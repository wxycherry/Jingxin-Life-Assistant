<template>
	<view class="numBox" :style="{
		color, 
		width: width + 'rpx',
		height: height + 'rpx',
		fontSize: size
	}">
		<view class="reduce" @click="change('-')" :style="{
			lineHeight: height * 0.80 + 'rpx',
			color: inputValue == minValue ? disabledColor : '#000',
			backgroundColor: inputValue == minValue ? disabledBgColor : bgColor
		}">-</view>
		
		<!-- 按钮 -->
		<input type="number" :adjust-position="false" :style="{backgroundColor: bgColor}" :maxlength="-1" :value="inputValue" @input="input"  @blur="blur"/>
		
		<view class="add" @click="change('+')" :style="{
			lineHeight: height * 0.95 + 'rpx',
			color: inputValue ==  maxValue ? disabledColor : '#000',
			backgroundColor: inputValue ==  maxValue ? disabledBgColor : bgColor
		}">+</view>
	</view>
</template>

<script>
	/**
	 * numBox 步进器
	 * @description 步进器，一般用于选择商品数量的场景。
	 * @property {Nunber} width 宽度(默认值: 180)。
	 * @property {Nunber} height 高度(默认值: 64)。
	 * @property {Nunber} maxValue 最大值(默认值: -1), -1则为无限大
	 * @property {Nunber} minValue 最小值(默认值: 1)
	 * @property {Nunber} modelValue 值, v3
	 * @property {Nunber} value 值, v2
	 * @property {Boolean} integer 是否只可输入整数(默认值: false)
	 * @property {Number} step 每次步进的范围(默认值: 1)
	 * @property {Number} decimalLength 显示的小数位数(默认值: -1)，-1代表不限制小数位数
	 * @property {String} bgColor 步进器背景色(默认值: #EBECEE)
	 * @property {String} color 文字颜色(默认值: #323233)
	 * @property {String} disabledBgColor 按钮禁用背景色(默认值: #F7F8Fa)
	 * @property {String} disabledColor 按钮禁用的文字颜色(默认值: #C8C9CC)
	 * @property {String} borderColor 边框背景色(默认值:EEEFF1)
	 * @property {String} size -、+大小(默认值: 45rpx)
	 * @event {Function} change 数量发生变化时触发。
	 * @example <numBox v-model="1"></numBox>
	 */
	export default {
		props: {
			// 宽
			width: {
				default: 180,
			},
			// 高
			height: {
				default: 64,
			},
			// 最大值为-1则可最大值为无限
			maxValue: {
				default: -1,
			},
			// 最小值
			minValue: {
				default: 1,
			},
			// 值
			// #ifdef VUE3
			modelValue: {
				default: 1
			},
			// #endif
			// #ifndef VUE3
			value: {
				default: 1
			},
			// #endif
			// 是否只可输入整数类型
			integer: {
				default: false,
				type: Boolean
			},
			// 步进
			step: {
				default: 1,
				type: Number
			},
			// 显示的小数位数 -1代表不限制小数位数
			decimalLength: {
				default: -1,
				type: Number
			},
			// 步进器背景色
			bgColor: {
				default: '#EBECEE',
				type: String
			},
			// 文字颜色
			color: {
				default: "#323233",
				type: String
			},
			// 按钮禁用背景色
			disabledBgColor: {
				default: '#F7F8Fa',
				type: String
			},
			// 按钮禁用文字颜色
			disabledColor: {
				default: '#C8C9CC',
				type: String
			},
			// +、-大小
			size: {
				default: "45rpx",
				type: String
			}
		},
		// data() 返回的属性将会成为响应式的状态
		data() {
			return {
				inputValue: null,
			}
		},
		methods: {
			// 更改数量
			change(type) {
				// 看步进是否有小数
				let valueArr = (this.step + '').split('.');
				// 保留小数长度
				let decimal = this.decimalLength != -1 ? this.decimalLength : valueArr.length > 1 ? valueArr[1].length : 0;
				// 值
				let value = this.inputValue * 1;
				if (type == "+") {
					if (this.maxValue == -1 || this.inputValue < this.maxValue) {
						value += this.step;
						this.inputValue = value.toFixed(decimal);
					}
			
				} else if (type == "-" && this.inputValue > this.minValue) {
					value -= this.step;
					this.inputValue = value.toFixed(decimal);
				}
				
				// 触发事件
				this.customEvent('update');
				this.customEvent('change')
			},
			// 输入事件
			input(e) {
				// 本次输入的内容
				let v = e.detail.value;
				// 复制目前的内容
				let copyInputValue = this.inputValue;
				// 目前的输入内容
				this.inputValue = v;
				// 校正数量
				this.correctingNum(this.inputValue);
				
				// 更新绑定的数据
				this.customEvent('update');
				
				// 为了防止.重复触发change事件
				// 复制本次输入的内容
				let copyV = v;
				// 如果只能输入整数 则 需要直接取整数部分
				if(this.integer) {
					copyInputValue = parseInt((copyV + '').indexOf('.') != -1 ? this.inputValue : copyInputValue);
					copyV = parseInt(copyV);
				}
				if(copyInputValue != copyV) {
					// 触发chage事件
					this.customEvent('change');
				}
			},
			// 失焦事件
			blur() {
				// 如果清空了且未输入内容 则 在失焦后变为最小值
				if(this.inputValue === '') {
					this.inputValue = this.minValue;
					// 更新绑定的数据
					this.customEvent('update');
					// 触发chage事件
					this.customEvent('change');
				}
			},
			// 校正数量
			correctingNum(value) {
				// 看步进是否有小数
				let valueArr = (this.step + '').split('.');
				// 保留小数长度
				let decimal = this.decimalLength != -1 ? this.decimalLength : valueArr.length > 1 ? valueArr[1].length : 0;
				// 如果用户输入的内容不是 ''
				if(value !== '') {
					// 如果用户输入的内容小于最小值 则等于 最小值
					if (value < this.minValue) {
						this.$nextTick(()=>{
							this.inputValue = this.minValue.toFixed(decimal);
						})
					} else if (this.maxValue !== -1 && value > this.maxValue) {
						// 如果用户输入的内容大于最大值 则等于 最大值
						this.$nextTick(()=>{
							this.inputValue = this.maxValue.toFixed(decimal);
						})
					} else if(this.integer){
						// 检测是否包含. 如果包含 则删除
						let index = (value + '').indexOf('.');
						if(index != -1) {
							this.$nextTick(()=>{
								this.inputValue = value.slice(0, index);
							})
						}
					}
				}
			},
			// 事件
			customEvent(eventName, value = this.inputValue) {
				this.$nextTick(()=>{
					// 如果不是更新事件 则 触发相应的自定义事件
					if(eventName !== 'update') {
						this.$emit(eventName, value);
					} else {
						// 触发更新事件 
						// #ifdef VUE3
						this.$emit('update:modelValue', this.inputValue);
						// #endif
						// #ifndef VUE3
						this.$emit('input', this.inputValue);
						// #endif
					}
				})
			}
		},
		mounted() {
			// #ifdef VUE3
			this.inputValue = this.modelValue;
			// #endif
			// #ifndef VUE3
			this.inputValue = this.value;
			// #endif
		},
		watch: {
			// #ifdef VUE3
			modelValue(v1) {
				this.inputValue = v1;
				this.correctingNum(this.inputValue);
			},
			// #endif
			// #ifndef VUE3
			value(v1) {
				this.inputValue = v1;
				this.correctingNum(this.inputValue);
			},
			// #endif
			maxValue() {
				this.correctingNum(this.inputValue);
			},
			minValues() {
				this.correctingNum(this.inputValue);
			}
		}
	}
</script>

<style lang="less" scoped>
	.numBox {
		border-radius: 10rpx;
		overflow: hidden;
		display: flex;
		align-content: center;
		text-align: center;

		.reduce,
		.add {
			width: 33%;
		}

		input {
			height: 100%;
			width: 33%;
			border-left: 3rpx solid #EEEFF1;
			border-right: 3rpx solid #EEEFF1;
			margin: 0 5rpx;
		}
	}
</style>
