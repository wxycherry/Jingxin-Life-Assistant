<template>
	<view class="sku" v-if="showSkuPopup" :class="skuPopupStyleShow ? 'show' : 'hide'"
		@click="isMaskClose ? close() : ''">
		<view class="shopSpecsPopup" :class="shopSpecsPopupStyleShow ? 'show' : 'hide'" @click.stop>
			<image class="close" src="../../img/close.png" @click="close"></image>
			<view class="content">
				<view class="info flex f-y-c">
					<view class="cover" v-if="!isUseImgSku"
						:style="{backgroundImage: `url(${selectSku.logo || defaultCover})`}"></view>
					<view class="right t-w" :class="{useImgSku: isUseImgSku}">
						<view class="price flex f-y-e" :style="{color: themeRGB}">
							<view class="uity">￥</view>
							{{selectSku.id ? selectSku.price : `${showAreaPrice[0]}-${showAreaPrice[1]}`}}
						</view>
						<view class="stock" v-if="showStockNum">
							库存: {{selectSku.id ? selectSku.stock : `${showAreaStock[0]}-${showAreaStock[1]}`}}
						</view>
						<view class="actSkuStr">
							{{getSelectedSkuAttrStr}}
						</view>
					</view>
				</view>
				<view class="number flex f-y-c f-x-b">
					<view class="key">数量</view>
					<numBox :width="200" integer v-model="num" :minValue="selectSku.stock == 0 ? 0 : 1"
						:maxValue="selectSku.id ? selectSku.stock : showAreaStock[1]"></numBox>
				</view>
				<view class="specsList">
					<view class="item" v-for="(skuArr, skuArrKey) in r.result" :key="skuArrKey">
						<view class="title">{{skuArrKey}}</view>
						<view class="specsValueList flex f-w">
							<view class="specs" 
								v-for="(sku, skuKey) in skuArr" 
								:key="skuKey" 
								:class="{
									disabled: sku.disabled, 
									act: sku.active, 
									discard: sku.discard
								}" 
								:style="[specsStyle(sku)]"
								@click="bindEvent(sku, skuArr, skuArrKey)">
								<!-- 带有图片的sku -->
								<view v-if="sku.img" class="specs_img_box">
									<!-- 禁用遮罩层 -->
									<view class="specs_img_box_mask"></view>
									<!-- 预览按钮 -->
									<view class="specs_img_box_preview flex f-y-c f-x-c" @click.stop="preview(sku.img)">
										<image class="img" src="../../img/preview.png"></image>
									</view>
									<!-- 图片 -->
									<view class="specs_img_box_cover bgImg" :style="{
										backgroundImage: `url(${sku.img})`
									}"></view>
									<!-- 文字 -->
									<view class="specs_img_box_text t-c">{{sku.value}}</view>
								</view>
								<!-- 普通sku -->
								<view v-else class="specs_common" :style="{
									backgroundColor: sku.active ? themeRGBA : ''
								}">
									{{sku.value}}
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="btnBox">
				<view class="confirm" :class="{
						disabled: selectSku.id && selectSku.stock * 1 < 1
					}" :style="{
						background: themeRGB
					}" @click="confirm">
					{{btnConfirmShowText}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// 引入 CryptoJS 库
	import CryptoJS from "crypto-js";
	/**
	 * geek-sku
	 * @description 商品sku组件。
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=10470
	 * @property {Array} data 源数据。
	 * @property {Boolean} modelValue 是否显示sku组件(默认值: false, v3显示)。
	 * @property {Boolean} value 是否显示sku组件(默认值: false, v2显示)。
	 * @property {Boolean} isMaskClose 是否可以点击遮罩层关闭(默认值: false)。
	 * @property {Boolean} isSelectMinPriceSku 是否默认选中最低价格的sku(默认值: true)。
	 * @property {Boolean} selectSkuIndex 默认选中的sku下标。
	 * @property {String} defaultCover 默认封面图，用于没有选中完整的sku时展示。
	 * @property {Number} defaultNum 默认购买商品数量。
	 * @property {Array} themeColor 主题色，需要传入一个数组长度为3的数组，分别对应rgb三个颜色的值，例如: [84, 164, 255]。
	 * @property {String} btnConfirmText 确认按钮文字(默认值: '确认')。
	 * @property {Boolean} notStockDisabled 无库存sku是否禁用(默认值: false)。
	 * @property {Object} notStockDisabledStyle 无库存sku禁用样式，notStockDisabled为true时生效(默认值: {})。
	 * @property {String} notStockText 库存不足文字，notStockDisabled为false时生效(默认值: '库存不足')。
	 * @property {String} notSelectSku 未选择完整的sku时的文字提示(默认值: '请选择完整的sku属性')。
	 * @property {Boolean} showStockNum 是否展示库存数量。
	 * @event {Function} confirm 点击确认按钮时触发的事件，会返回e， e = { sku, skuText , num }，分别对应选中的sku值 、sku属性名 、输入框内的数量。
	 * @event {Function} skuChange sku发生变化时出发的事件，如果有选中完整的sku则会返回该sku，否则会返回{}。
	 * @event {Function} close 关闭sku组件触发事件。
	 * @event {Function} open 打开sku组件触发事件。
	 * @event {Function} numChange 输入框内数量发生改变时触发事件。
	 * @example <geek-sku 
					v-model="skuShow" 
					:data="skus"
					:defaultCover="logo"
					@skuChange="skuChange"
					@confirm="buyShop"
				>
				</geek-sku>
	 */
	export default {
		props: {
			// 源数据
			data: {
				default: () => [],
				type: Array
			},
			// 是否显示sku组件
			// #ifdef VUE3
			modelValue: {
				default: false,
				type: Boolean
			},
			// #endif
			// #ifndef VUE3
			value: {
				default: false,
				type: Boolean
			},
			// #endif
			// 是否可以点击关闭
			isMaskClose: {
				default: false,
				type: Boolean
			},
			// 是否默认选中最低价格sku
			isSelectMinPriceSku: {
				default: true,
				type: Boolean
			},
			// 默认选中的sku下标
			selectSkuIndex: {
				default: null,
				type: Number
			},
			// 默认封面图
			defaultCover: {
				default: "",
				type: String
			},
			// 默认购买商品数量
			defaultNum: {
				default: 1,
				type: Number
			},
			// 主题色
			themeColor: {
				default: () => [84, 164, 255],
				type: Array
			},
			// 确认按钮文字
			btnConfirmText: {
				default: "确定",
				type: String
			},
			// 无库存禁用
			notStockDisabled: {
				default: false,
				type: Boolean
			},
			// 无库存禁用样式
			notStockDisabledStyle: {
				default: () => {
					return {}
				},
				type: Object
			},
			// 库存不足文字
			notStockText: {
				default: "库存不足",
				type: String
			},
			// 未选择完整的sku时的文字提示
			notSelectSku: {
				default: "请选择完整的sku属性",
				type: String
			},
			// 展示库存数量
			showStockNum: {
				default: true,
				type: Boolean
			}
		},
		// data() 返回的属性将会成为响应式的状态
		// 并且暴露在 `this` 上
		data() {
			return {
				// sku所有属性得可能性集合
				res: {},
				// 拼接得字符
				spliter: '\u2299',
				// 组合数据
				r: {},
				// sku属性名合集
				// 机身颜色: '深空黑色',
				// 储存容量: '128G',
				// 套装: '快充套装',
				// keys = [机身颜色, 储存容量, 套装]
				keys: [],
				// 选中的sku的副本
				selectedCache: [],
				// 选中的sku
				selectSku: {},
				// 展示的区间价格
				showAreaPrice: [0, 0],
				// 展示的区间库存
				showAreaStock: [0, 0],
				// 购买的数量
				num: 1,
				// 主题色RGB
				themeRGB: '',
				// 主题色RGBA
				themeRGBA: '',
				// 是否使用带图sku
				isUseImgSku: false,
				// 是否v3
				// #ifdef VUE3
				isV3: true,
				// #endif
				// #ifndef VUE3
				isV3: false,
				// #endif
				// 显示sku
				showSkuPopup: false,
				// 从低向上的动画显示
				shopSpecsPopupStyleShow: false,
				// 透明度消失动画, 让他关闭时看上不不那么生硬
				skuPopupStyleShow: false
			}
		},
		// methods 是一些用来更改状态与触发更新的函数
		methods: {
			/**
			 * 计算组合数据
			 */
			combineAttr(data, keys) {
				var allKeys = []
				var result = {}

				for (var i = 0; i < data.length; i++) {
					var item = data[i].sku_attrs;
					var values = [];

					for (var j = 0; j < keys.length; j++) {
						let key = keys[j];
						// 属性名
						let attr_info = this.getObjAppointAttr(item[key]);

						if (!result[key]) result[key] = [];
						if (result[key].indexOf(attr_info.value) < 0) result[key].push(item[key]);

						values.push(attr_info.value);
					}

					allKeys.push({
						path: values.join(this.spliter),
						sku: data[i].id,
						stock: data[i].stock
					})
				}

				for (let key in result) {
					let obj = {};
					result[key].forEach(item => {
						// 属性名
						let attr_info = this.getObjAppointAttr(item);
						// 如果本次的属性不存在 则 将该属性设置为空对象
						if (!obj[attr_info.name]) obj[attr_info.name] = {};
						// 本次要操作的属性 下面得赋值是为了防止已有属性被覆盖
						obj[attr_info.name].value = attr_info.value;
						obj[attr_info.name].active = false;
						obj[attr_info.name].disabled = false;
						// 如果无库存禁用
						if (this.notStockDisabled) {
							obj[attr_info.name].discard = false; // 是否废弃
						}

						// 如果该sku属性是对象则取其中的name属性
						if (Object.prototype.toString.call(item) === '[object Object]') {
							obj[attr_info.name] = {
								...obj[attr_info.name],
								...item
							};
							this.isUseImgSku = true;
						}

					})
					result[key] = obj;
				}

				return {
					result: result,
					items: allKeys
				}
			},
			getAllKeys(arr) {
				var result = []
				for (var i = 0; i < arr.length; i++) {
					result.push(arr[i].path)
				}
				return result;
			},
			/**
			 * 取得集合的所有子集「幂集」
			 arr = [1,2,3]
			
			     i = 0, ps = [[]]:
			         j = 0; j < ps.length => j < 1:
			             i=0, j=0 ps.push(ps[0].concat(arr[0])) => ps.push([].concat(1)) => [1]
			                      ps = [[], [1]]
			
			     i = 1, ps = [[], [1]] :
			         j = 0; j < ps.length => j < 2
			             i=1, j=0 ps.push(ps[0].concat(arr[1])) => ps.push([].concat(2))  => [2]
			             i=1, j=1 ps.push(ps[1].concat(arr[1])) => ps.push([1].concat(2)) => [1,2]
			                      ps = [[], [1], [2], [1,2]]
			
			     i = 2, ps = [[], [1], [2], [1,2]]
			         j = 0; j < ps.length => j < 4
			             i=2, j=0 ps.push(ps[0].concat(arr[2])) => ps.push([3])    => [3]
			             i=2, j=1 ps.push(ps[1].concat(arr[2])) => ps.push([1, 3]) => [1, 3]
			             i=2, j=2 ps.push(ps[2].concat(arr[2])) => ps.push([2, 3]) => [2, 3]
			             i=2, j=3 ps.push(ps[3].concat(arr[2])) => ps.push([2, 3]) => [1, 2, 3]
			                      ps = [[], [1], [2], [1,2], [3], [1, 3], [2, 3], [1, 2, 3]]
			 */
			powerset(arr) {
				var ps = [
					[]
				];
				for (var i = 0; i < arr.length; i++) {
					for (var j = 0, len = ps.length; j < len; j++) {
						ps.push(ps[j].concat(arr[i]));
					}
				}
				return ps;
			},
			/**
			 * 生成所有子集是否可选、库存状态 map
			 */
			buildResult(items) {
				var allKeys = this.getAllKeys(items);

				for (var i = 0; i < allKeys.length; i++) {
					var curr = allKeys[i];
					var sku = items[i].sku;
					var values = curr.split(this.spliter);
					var allSets = this.powerset(values)

					// 每个组合的子集
					for (var j = 0; j < allSets.length; j++) {
						var set = allSets[j]
						// 使用CryptoJS的MD5对原属性名加密 用来禁绝因特殊符号带来的属性名错误
						var key = CryptoJS.MD5(set.join(this.spliter)).toString();

						if (this.res[key]) {
							this.res[key].skus.push(sku)
						} else {
							this.res[key] = {
								skus: [sku]
							}
						}
					}
				}
			},
			trimSpliter(str, spliter) {
				// ⊙abc⊙ => abc
				// ⊙a⊙⊙b⊙c⊙ => a⊙b⊙c
				var reLeft = new RegExp('^' + spliter + '+', 'g');
				var reRight = new RegExp(spliter + '+$', 'g');
				var reSpliter = new RegExp(spliter + '+', 'g');
				return str.replace(reLeft, '')
					.replace(reRight, '')
					.replace(reSpliter, spliter)
			},
			/**
			 * 获取当前选中的属性
			 */
			getSelectedItem() {
				var result = [];

				let resObj = this.r.result;
				if (resObj) {
					Object.keys(resObj).forEach((key1, index) => {
						result[index] = "";
						Object.keys(resObj[key1]).forEach(key2 => {
							// 查找选中的属性
							let item = resObj[key1][key2];
							item.active ? result[index] = item.value : '';
						})
					})
				}

				return result
			},
			/**
			 * 无效属性点击
			 */
			handleDisableClick(sku, skuArrKey, index) {
				this.selectedCache[index] = sku;

				// 清空所有sku选中属性
				let resObj = this.r.result;
				Object.keys(resObj).forEach((key1, index) => {
					Object.keys(resObj[key1]).forEach(key2 => {
						// 查找选中的属性
						let item = resObj[key1][key2];
						item.active = false;
					})
				})

				// 删除无效属性的禁止状态 并 选中
				sku.active = true;
				sku.disabled = false;

				this.updateStatus(this.getSelectedItem());

				/**
				 * 恢复原来已选属性
				 * 遍历所有非当前属性行
				 *   1. 与 selectedCache 对比
				 *   2. 如果要恢复的属性存在（非 disable）且 和当前*未高亮行*已选择属性的*可组合*），高亮原来已选择的属性且更新
				 *   3. 否则什么也不做
				 */
				for (var i = 0; i < this.keys.length; i++) {
					var item = this.keys[i];
					if (item == skuArrKey) continue

					// 没有被禁用的属性 (可以被选择)
					if (this.selectedCache[i] && !this.selectedCache[i].disabled && !this.selectedCache[i].discard) {
						this.selectedCache[i].active = true;
						this.updateStatus(this.getSelectedItem())
					}
				}

			},

			/**
			 * 更新所有属性状态
			 */
			updateStatus(selected) {
				// 遍历sku属性名合集
				for (var i = 0; i < this.keys.length; i++) {
					// 如果这段看不懂将console.log的注释解开即可
					var key = this.keys[i];
					var data = this.r.result[key];
					var hasActive = !!selected[i];
					var copy = selected.slice();
					// console.log(key, '属性名合集')
					// console.log(i)
					// console.log(copy, '已选属性');
					// 遍历data所有属性
					Object.keys(data).forEach(dataKey => {
						var item = data[dataKey];
						if (selected[i] == item.value) return;
						copy[i] = item.value;
						// 加密后的属性名
						var curr = CryptoJS.MD5(this.trimSpliter(copy.join(this.spliter), this.spliter))
					.toString();
						// 从sku组合合集中找出这项
						var resCurr = this.res[curr];
						// console.log(this.res, 'sku组合合集')
						// console.log(curr, '合集加密名称')
						// console.log(this.trimSpliter(copy.join(this.spliter), this.spliter))
						// 如果存在这种组合
						if (resCurr) {
							// console.log(resCurr)
							item.disabled = false;
							// 如果sku无库存不展示 而且 当前sku属性没有被废弃
							if (this.notStockDisabled) {
								// 该属性是否无库存
								let itemNotStock = true;
								// 遍历该属性所有的合集
								// resCurr.skus是一个[],里面有合集id 可能有多个合集id
								// 每个合集id都有独一无二的信息 
								// 如果所有相关合集都没库存则说明该属性无库存 则废弃 否则 不废弃
								resCurr.skus.forEach(skuID => {
									let sku = this.r.items.filter(sku => sku.sku === skuID)[0];
									if (sku.stock > 0) itemNotStock = false;
								})
								item.discard = itemNotStock;
							}
						} else {
							// 如果无库存不展示
							if (this.notStockDisabled) {
								item.disabled = !item.discard;
							} else {
								item.disabled = true;
							}
							item.active = false;
						}
					})
				}

				// 获取当前选中的属性
				var result = selected.slice();
				// 如果所有属性都已选中
				if (result.every(item => item)) {
					// 将属性合成r.items中的sku名称
					let name = this.trimSpliter(result.join(this.spliter), this.spliter);
					// 查找sku
					let sku = this.r.items.find(item => item.path == name);
					// 如果找到该sku
					if (sku) {
						// 根据sku的sku属性(唯一标识，通常来说会是id)找到源数据中的匹配的那一项并选中;
						this.selectSku = JSON.parse(JSON.stringify(this.data.find(item => item.id == sku.sku)));
						// 重置数量
						this.num = this.defaultNum;
					}
				} else {
					this.selectSku = {};
				}
			},
			bindEvent(sku, skuArr, skuArrKey) {
				// 如果该sku属性被废弃则直接返回
				if (sku.discard) return;

				if (!sku.active) {
					// 清空当前行的所有sku选中属性
					Object.keys(skuArr).forEach(key => {
						skuArr[key].active = false;
					})

					sku.active = true;

					// 当前选中的keys的index
					let index = this.keys.findIndex(item => item == skuArrKey);

					if (sku.disabled) {
						this.handleDisableClick(sku, skuArrKey, index);
					} else {
						this.selectedCache[index] = sku;
					}
				} else {
					sku.active = false;
					// 清空所有sku禁用状态
					let resObj = this.r.result;
					Object.keys(resObj).forEach((key1, index) => {
						Object.keys(resObj[key1]).forEach(key2 => {
							// 查找选中的属性
							let item = resObj[key1][key2];
							item.disabled = false;
						})
					})
				}

				this.updateStatus(this.getSelectedItem());
			},

			/**
			 * 选中最便宜价格的sku
			 */
			selectMinPriceSku() {
				let minPriceSku = null;
				this.data.forEach(sku => {
					// 如果为空则直接赋值
					if (minPriceSku === null) {
						minPriceSku = sku
					} else if (minPriceSku.price > sku.price) { // 如果比最小价格低 就赋值
						minPriceSku = sku
					}
				})

				for (var key in minPriceSku.sku_attrs) {
					let attr_info = this.getObjAppointAttr(minPriceSku.sku_attrs[key]);
					// 找出对应项并选中
					this.r.result[key][attr_info.name].active = true;
				}
				this.updateStatus(this.getSelectedItem());
			},

			/**
			 * 选中某项sku
			 * @param {Number} index 选中的skuIndex
			 */
			selectAppointSku(index) {
				// 视图更新后在更新选中的skuIndex
				this.$nextTick(() => {
					if (!this.data[index]) return console.error('请输入正确的sku下标');
					let sku_attrs = this.data[index].sku_attrs;
					for (var key in sku_attrs) {
						let attr_info = this.getObjAppointAttr(sku_attrs[key]);
						// 找出对应项并选中
						this.r.result[key][attr_info.name].active = true;
					}
					this.updateStatus(this.getSelectedItem());
				})
			},

			/**
			 * 找出区间数据
			 */
			findAreaData() {
				let minPrice = null;
				let maxPrice = 0;
				let minStock = null;
				let maxStock = 0;
				this.data.forEach(sku => {
					// 如果最小价格为空则直接赋值
					if (minPrice === null) {
						minPrice = sku.price;
					} else if (minPrice * 1 > sku.price * 1) { // 如果比最小价格低 就赋值
						minPrice = sku.price;
					}
					// 如果大于最大价格则赋值
					if (maxPrice < sku.price) {
						maxPrice = sku.price;
					}

					// 如果最小库存为空则直接赋值
					if (minStock === null) {
						minStock = sku.stock;
					} else if (minStock * 1 > sku.stock * 1) { // 如果比最小库存少 就赋值
						minStock = sku.stock;
					}
					// 如果大于最大库存则赋值
					if (maxStock * 1 < sku.stock * 1) {
						maxStock = sku.stock;
					}
				})
				// 赋值区间
				this.showAreaPrice = [minPrice, maxPrice];
				this.showAreaStock = [minStock, maxStock];
			},

			// 初始化
			init(data) {
				this.res = {}
				this.r = {};
				this.keys = [];
				this.selectedCache = [];

				// skus 长度为空则没必要往下继续进行了
				if (!data.length) return;

				// 拼接主题色
				this.joinThemColor(this.themeColor);

				// 找出sku的可选属性的标题
				for (var attr_key in data[0].sku_attrs) {
					// 如果这个属性未定义存则跳过
					if (!(attr_key in data[0].sku_attrs)) continue;
					// 如果这个属性未赋值 或 不存在 则删除该属性
					if (data[0].sku_attrs[attr_key] === null || data[0].sku_attrs[attr_key] === undefined) delete data[0]
						.sku_attrs[attr_key];
					// 否则添加属性
					else this.keys.push(attr_key);
				}

				//计算组合数据
				this.r = this.combineAttr(data, this.keys);

				// 生成所有子集是否可选、库存状态 map
				this.buildResult(this.r.items);

				// 找到区间数据
				this.findAreaData();
				
				// 如果无库存不展示 则 更新一下数据 因为有可能某个属性没有库存
				if(this.notSelectSku) {
					this.updateStatus(this.getSelectedItem());
				}

				// 如果需要选中某项sku
				if (this.selectSkuIndex !== null && this.selectSkuIndex !== undefined) {
					this.selectAppointSku(this.selectSkuIndex);
				} else if (this.isSelectMinPriceSku) {
					// 如果需要选中默认最便宜的sku
					this.selectMinPriceSku();
				}
			},

			// 确认事件
			confirm() {
				// 如果已有选中的完整sku
				if (this.selectSku.id) {
					// 如果有库存
					if (this.selectSku.stock * 1 > 0) {
						// 按钮确认事件
						this.$emit('confirm', {
							sku: this.selectSku,
							skuText: this.getSelectedItem(),
							num: this.num * 1
						})
					}
				} else {
					uni.showToast({
						title: this.notSelectSku,
						icon: 'none',
						duration: 1500
					})
				}
			},

			// 拼接主题色
			joinThemColor(n) {
				this.themeRGB = `rgb(${n[0]}, ${n[1]}, ${n[2]})`;
				this.themeRGBA = `rgba(${n[0]}, ${n[1]}, ${n[2]}, 0.1)`;
			},

			// 关闭sku组件
			close() {
				// #ifdef VUE3
				this.$emit('update:modelValue', false);
				// #endif

				// #ifndef VUE3
				this.$emit('input', false);
				// #endif

				// #ifdef H5
				// fix by mehaotian 处理 h5 滚动穿透的问题
				document.getElementsByTagName('body')[0].style.overflow = 'visible'
				// #endif

				this.$emit('close');

				this.skuPopupStyleShow = false;
				this.shopSpecsPopupStyleShow = false;

				setTimeout(() => {
					this.showSkuPopup = false;
				}, 300)
			},

			// 打开sku组件
			open() {
				// #ifdef VUE3
				this.$emit('update:modelValue', true);
				// #endif

				// #ifndef VUE3
				this.$emit('input', true);
				// #endif

				// #ifdef H5
				// fix by mehaotian 处理 h5 滚动穿透的问题
				document.getElementsByTagName('body')[0].style.overflow = 'hidden'
				// #endif

				this.$emit('open');

				this.showSkuPopup = true;

				setTimeout(() => {
					this.skuPopupStyleShow = true;
					this.shopSpecsPopupStyleShow = true;
				})
			},

			// 重置购买数量
			resetNum() {
				this.num = this.defaultNum;
			},

			// 获取对象中指定属性
			getObjAppointAttr(obj, attr = 'name') {
				// 用来储存属性中对应的值
				let value = "";
				// 如果该sku属性是对象则取其中的name属性
				if (Object.prototype.toString.call(obj) === '[object Object]') {
					value = obj[attr];
				} else {
					value = obj;
				}

				// 使用CryptoJS的MD5对原属性名加密 用来禁绝因特殊符号带来的属性名错误
				let name = CryptoJS.MD5(value).toString();

				return {
					value,
					name
				}
			},

			// 预览图片
			preview(img) {
				uni.previewImage({
					urls: [img]
				});
			},
			
			// specs样式
			specsStyle(sku) {
				let style = {
					borderRadius: sku.img ? '15rpx' : '10rpx'
				};
				// 选中的样式
				if(sku.active) {
					style.color = this.themeRGB;
					style.border = `3rpx solid ${this.themeRGB}`;
				}
				// 废弃的样式
				if(sku.discard) {
					style = {...style, ...this.notStockDisabledStyle};
				}
				
				return style
			}
		},
		// computed 计算属性
		computed: {
			// 获取已选中的sku属性字符串
			getSelectedSkuAttrStr() {
				let attrArr = this.getSelectedItem();
				// 如果有未选中的数据
				if (attrArr.findIndex(item => !item) !== -1) {
					// 获取sku属性名
					let resultArr = Object.keys(this.r.result);
					// 未选中的sku属性名
					let noAttrNameArr = [];
					attrArr.forEach((item, index) => {
						if (!item) {
							noAttrNameArr.push(resultArr[index]);
						}
					})

					return `请选择：${noAttrNameArr.join('、')}`
				} else {
					return `已选择：${attrArr.join('，')}`
				}
				return this.getSelectedItem();
			},
			// 获取确认按钮显示文字
			btnConfirmShowText() {
				return this.selectSku.id && this.selectSku.stock * 1 < 1 ? this.notStockText : this.btnConfirmText
			}
		},
		// 监听
		watch: {
			data: {
				handler(n) {
					this.init(n);
				},
				deep: true
			},
			// #ifdef VUE3
			modelValue(n) {
				n ? this.open() : this.close();
			},
			// #endif
			// #ifndef VUE3
			value(n) {
				n ? this.open() : this.close();
			},
			// #endif
			num(n) {
				this.$emit('numChange', n);
			},
			selectSku(n) {
				this.$emit('skuChange', n);
			},
			themeColor(n) {
				this.joinThemColor(n);
			},
			selectSkuIndex(n) {
				this.selectAppointSku(n);
			}
		},
		// 挂载时
		mounted() {
			// 赋值默认购买商品数量
			this.num = this.defaultNum;
			this.init(this.data);
		}
	}
</script>

<style lang="less" scoped>
	@import url("../common.less");

	.sku {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		background-color: rgba(0, 0, 0, 0.4);
		z-index: 999;
		transition: all 0.3s ease;

		&.show {
			opacity: 1;
		}

		&.hide {
			opacity: 0;
		}

		.shopSpecsPopup {
			background: #FFFFFF;
			border-radius: 24rpx 24rpx 0 0;
			padding: 45rpx 30rpx 30rpx;
			position: fixed;
			box-sizing: border-box;
			left: 0;
			right: 0;
			transition: all 0.3s ease;

			&.show {
				bottom: 0%;
			}

			&.hide {
				bottom: -100%;
			}

			.close {
				width: 40rpx;
				height: 40rpx;
				position: absolute;
				top: 33rpx;
				right: 30rpx;
			}

			.content {
				bottom: 0;
			}

			.btnBox {
				background-color: #fff;
				border: none;
				margin-top: 40rpx;

				.confirm {
					border-radius: 50rpx;
					font-size: 32rpx;
					font-weight: 500;
					text-align: center;
					box-sizing: border-box;
					height: 86rpx;
					line-height: 1;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #FFFFFF;

					&.disabled {
						background-color: #b4b4b4 !important;
						color: #fff;
					}
				}
			}

			.info {
				.cover {
					width: 200rpx;
					height: 200rpx;
					flex-shrink: 0;
					margin-right: 20rpx;
					border-radius: 20rpx;
					background-size: cover;
					background-repeat: no-repeat;
					background-position: center;
					background-color: #1cffe5;
				}

				.right {
					width: calc(100% - 220rpx);

					&.useImgSku {
						width: 100%;
						text-align: center;

						.price {
							justify-content: center;
						}
					}

					.title {
						font-size: 32rpx;
						font-weight: 500;
						color: #333333;
						margin-bottom: 20rpx;
						padding-right: 120rpx;
					}

					.price {
						font-size: 44rpx;
						font-weight: bold;
						margin-bottom: 25rpx;
						line-height: 1;

						.uity {
							font-size: 34rpx;
						}
					}

					.stock {
						font-size: 30rpx;
						color: #999999;
						margin-bottom: 15rpx;
					}

					.actSkuStr {
						color: #333;
						font-size: 30rpx;
					}
				}
			}

			.number {
				margin-top: 30rpx;
				margin-bottom: 22rpx;

				.key {
					font-size: 32rpx;
					font-weight: 500;
					color: #333333;
				}
			}

			.specsList {
				max-height: 45vh;
				overflow-y: auto;
				margin-bottom: 30rpx;

				.item {
					.title {
						font-size: 32rpx;
						font-weight: 500;
						color: #333333;
						margin-bottom: 30rpx;
					}

					.specsValueList {
						.specs {
							background: #fff;
							font-size: 28rpx;
							font-weight: 500;
							margin-bottom: 30rpx;
							margin-right: 30rpx;
							border: 3rpx solid #e4e4e4;
							overflow: hidden;

							&:not(.act) {
								.specs_common {
									color: #999999;
								}

								.specs_img_box {
									color: #fff;
								}
							}

							&.discard {
								color: #999999;
								text-decoration: line-through;
							}

							&.disabled {
								border: 3rpx solid transparent;

								.specs_common {
									background-color: #f3f3f3;
								}

								.specs_img_box .specs_img_box_mask {
									position: absolute;
									left: 0;
									right: 0;
									bottom: 0;
									top: 0;
									background-color: rgba(0, 0, 0, 0.2);
								}
							}

							&_img_box {
								position: relative;

								&_preview {
									position: absolute;
									background: rgba(0, 0, 0, 0.7);
									border-radius: 50%;
									padding: 10rpx;
									right: 8rpx;
									top: 8rpx;

									.img {
										width: 25rpx;
										height: 25rpx;
										transform: scale(1.2);
									}
								}

								&_cover {
									width: 200rpx;
									height: 200rpx;
								}

								&_text {
									background: #302e2f;
									padding: 15rpx 20rpx;
								}
							}

							&_common {
								padding: 14rpx 40rpx;
							}
						}
					}
				}
			}
		}
	}
</style>