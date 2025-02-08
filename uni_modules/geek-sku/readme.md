# geek-sku
一款仿京东算法的轻量化、强大、拓展性强、可使用带图sku、可根据配置主题色自动生成相应的组件主题色的商品多规格sku，仅需要按照指定格式传入sku数组便可以直接使用。

## 官网地址
需要vue版本的geek-sku组件/捐赠作者/查看文档等可点击下方链接;
目前域名正在本案中，所以官网访问次数有限，如有疑问请加入:qq群: 830086788

[官网](https://static-mp-0220ec29-f9b0-4fe2-909a-8da0b1d1e377.next.bspapp.com)

加入交流反馈群请点击下方链接

[交流反馈](https://static-mp-0220ec29-f9b0-4fe2-909a-8da0b1d1e377.next.bspapp.com/#/guide?type=2)

## 依赖包
使用前需要安装这个包，用来生成加密的属性名称。
`npm install crypto-js`

## 使用方法
从插件时长直接使用HBuilderX 导入插件复制下方的示例即可直接快速使用，然后再根据业务需求进行调整即可。

### v3示例
```vue
<template>
    <view class="test" style="padding: 3rem 1.5rem;">
        <geek-sku
        	v-model="skuShow"
        	:data="skus"
        	:themeColor="[226, 35, 26]"
        	defaultCover="https://img-blog.csdnimg.cn/img_convert/587467738dfa4de190a7cd9818ca59fb.jpeg"
        	btnConfirmText="购买"
        	notSelectSku="请选择完整的商品信息"
        	@skuChange="skuChange"
        	@confirm="skuConfirm"
        ></geek-sku>
        <!-- 打开sku组件 -->
        <button @click="skuShow = true">打开sku组件</button>
    </view>
</template>
	
<script setup>
    import { ref, reactive, inject, toRefs } from "vue";
    import { onLoad } from '@dcloudio/uni-app';
    
    let skuShow = ref(false);
    // sku列表
    let skus = ref([
        {
            id: 1,
            price: 7000,
            stock: 30,
            sku_attrs: {
                '机身颜色': '深空黑色',
                '储存容量': '128G',
                '套装': '快充套装'
            }
        },
        {
            id: 2,
            price: 8500,
            stock: 10,
            sku_attrs: {
                '机身颜色': '暗紫色',
                '储存容量': '256G',
                '套装': '快充套装'
            }
        },
        {
            id: 3,
            price: 9500,
            stock: 0,
            sku_attrs: {
                '机身颜色': '暗紫色',
                '储存容量': '512G',
                '套装': 'AirPods套装'
            }
        },
        {
            id: 4,
            price: 9200,
            stock: 60,
            sku_attrs: {
                '机身颜色': '银色',
                '储存容量': '512G',
                '套装': 'AirPods套装'
            }
        },
        {
            id: 5,
            price: 9200,
            stock: 80,
            sku_attrs: {
                '机身颜色': '金色',
                '储存容量': '512G',
                '套装': 'AirPods3套装'
            }
        }
    ])
    
    // sku发生改变事件, 选择完整的sku则回返回 否则sku的值为{}
    let skuChange = (sku)=>{
        console.log(sku);
    }
    // sku确认事件
    let skuConfirm = (e)=>{
        console.log(e);
    }
</script>
```

### v2示例
```vue
<template>
	<view class="test" style="padding: 3rem 1.5rem;">
		<geek-sku
			v-model="skuShow"
			:data="skus"
			:themeColor="[226, 35, 26]"
			defaultCover="https://img-blog.csdnimg.cn/img_convert/587467738dfa4de190a7cd9818ca59fb.jpeg"
			btnConfirmText="购买"
			notSelectSku="请选择完整的商品信息"
			@skuChange="skuChange"
			@confirm="skuConfirm"
		></geek-sku>
		<!-- 打开sku组件 -->
		<button @click="skuShow = true">打开sku组件</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 是否显示组件
				skuShow: false,
				// sku列表
				skus: [
                    {
                        id: 1,
                        price: 7000,
                        stock: 30,
                        sku_attrs: {
                            '机身颜色': '深空黑色',
                            '储存容量': '128G',
                            '套装': '快充套装'
                        }
                    },
                    {
                        id: 2,
                        price: 8500,
                        stock: 10,
                        sku_attrs: {
                            '机身颜色': '暗紫色',
                            '储存容量': '256G',
                            '套装': '快充套装'
                        }
                    },
                    {
                        id: 3,
                        price: 9500,
                        stock: 0,
                        sku_attrs: {
                            '机身颜色': '暗紫色',
                            '储存容量': '512G',
                            '套装': 'AirPods套装'
                        }
                    },
                    {
                        id: 4,
                        price: 9200,
                        stock: 60,
                        sku_attrs: {
                            '机身颜色': '银色',
                            '储存容量': '512G',
                            '套装': 'AirPods套装'
                        }
                    },
                    {
                        id: 5,
                        price: 9200,
                        stock: 80,
                        sku_attrs: {
                            '机身颜色': '金色',
                            '储存容量': '512G',
                            '套装': 'AirPods3套装'
                        }
                    }
                ]
			}
		},
		onLoad() {},
		methods: {
			// sku发生改变事件, 选择完整的sku则回返回 否则sku的值为{}
			skuChange(sku) {
				console.log(sku);
			},
			// sku确认事件
			skuConfirm(e) {
				console.log(e);
			}
		}
	}
</script>
```


## 补充(ps: 在不使用带图sku时生效)
在sku列表数组中的每一项都可以有logo属性，这样在选择完整的sku后就会自动展示本项sku的logo。

例如: 
``` javascript
	[
		...
		{
			id: 5,
			price: 9200,
			logo: '图片路径',
			stock: 80,
			sku_attrs: {
				'机身颜色': '金色',
				'储存容量': '512G',
			}
		}
		...
	]
```


## 带图sku数据示例
仅需要在需要展示的图片的sku属性上稍微修改一下就行了，将原来的 `属性名:属性值` 变成 `属性名: {name: 属性名, img: '图片链接'}`。

如下: 直接粘贴使用即可
``` javascript
[
	{
		id: 1,
		price: 7000,
		stock: 30,
		sku_attrs: {
			'机身颜色': {
				name: '深空黑色',
				img: 'https://img-blog.csdnimg.cn/img_convert/c7ff1eaa3cb84945baa960230a758cbd.jpeg',
			},
			'储存容量': '128G',
			'套装': '快充套装'
		}
	},
	{
		id: 2,
		price: 8500,
		stock: 10,
		sku_attrs: {
			'机身颜色': {
				name: '暗紫色',
				img: 'https://img-blog.csdnimg.cn/img_convert/0c16e250057a4ce38f8d7fc6b187a3b4.jpeg',
			},
			'储存容量': '256G',
			'套装': '快充套装'
		}
	},
	{
		id: 3,
		price: 9500,
		stock: 0,
		sku_attrs: {
			'机身颜色': {
				name: '暗紫色',
				img: 'https://img-blog.csdnimg.cn/img_convert/0c16e250057a4ce38f8d7fc6b187a3b4.jpeg',
			},
			'储存容量': '512G',
			'套装': 'AirPods套装'
		}
	},
	{
		id: 4,
		price: 9200,
		stock: 60,
		sku_attrs: {
			'机身颜色': {
				name: '银色',
				img: 'https://img-blog.csdnimg.cn/img_convert/a4694b8a900140569e10ab8fa3e89445.jpeg',
			},
			'储存容量': '512G',
			'套装': 'AirPods套装'
		}
	},
	{
		id: 5,
		price: 9200,
		stock: 80,
		sku_attrs: {
			'机身颜色': {
				name: '金色',
				img: 'https://img-blog.csdnimg.cn/img_convert/a439916f21f141428e3836bff8b5d50b.jpeg',
			},
			'储存容量': '512G',
			'套装': 'AirPods3套装'
		}
	}
]
```

## 指定默认选中sku
`selectSkuIndex`用来指定要选中的sku下标
### 示例
``` html
<geek-sku
	v-model="skuShow"
	:data="skus"
	defaultTitle="iPhone14 Pro MAX"
	defaultCover="http://rn8zfvrr0.hn-bkt.clouddn.com/e40744e32a2930f945e67da79a35f270.jpg?e=1672666137&token=0qmhoqQQZ4ggfGZOevcNXE4wYe_IZD3Y5xm8ZZ5Y:bxn-lcJPnFNY22kGWwh5MRgdGwM="
	btnConfirmText="购买"
	notSelectSku="请选择完整的商品信息"
	:isShowStock="false"
	:selectSkuIndex="3"
	@skuChange="skuChange"
	@confirm="skuConfirm"
></geek-sku>
```
## 无库存sku
无库存sku的默认是可以选中并展示信息的，但如果要无法选中的话请看下方。
### notStockDisabled
`notStockDisabled`用来指定无库存sku是否不能被选中的，默认为false，也就是默认可以被选中。
### notStockDisabledStyle
`notStockDisabledStyle`用来指定无库存sku不可使用时的样式，格式是{}。
### 示例
``` html
<geek-sku
	v-model="skuShow"
	:data="skus"
	defaultTitle="iPhone14 Pro MAX"
	defaultCover="http://rn8zfvrr0.hn-bkt.clouddn.com/e40744e32a2930f945e67da79a35f270.jpg?e=1672666137&token=0qmhoqQQZ4ggfGZOevcNXE4wYe_IZD3Y5xm8ZZ5Y:bxn-lcJPnFNY22kGWwh5MRgdGwM="
	btnConfirmText="购买"
	notStockDisabled
	:notStockDisabledStyle="{}"
	notSelectSku="请选择完整的商品信息"
	:isShowStock="false"
	:selectSkuIndex="3"
	@skuChange="skuChange"
	@confirm="skuConfirm"
></geek-sku>
```

## API

### Props
| 属性名 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | -- | -- | -- |
| data | 源数据(sku列表) | Array | [] | - |
| value/modelValue | 是否显示sku组件 | Boolean | false | true |
| isMaskClose | 是否可以点击遮罩层关闭 | Boolean | false | true |
| isSelectMinPriceSku | 是否默认选中最低价格的sku | Boolean | true | false |
| selectSkuIndex | 默认选中的sku下标 | Number | null | - |
| defaultCover | 默认封面图，用于没有选中完整的sku时展示 | String | '' | - |
| defaultNum | 默认购买商品数量 | Number | 1 | - |
| themeColor | 主题色，需要传入一个数组长度为3的数组，分别对应rgb三个颜色的值，例如: [84, 164, 255] | Array | [84, 164, 255] | - |
| btnConfirmText | 确认按钮文字 | String | '确认' | - |
| notStockDisabled | 无库存sku是否禁用 | Boolean | false | true |
| notStockDisabledStyle | 无库存sku禁用样式，notStockDisabled为true时生效 | Object | {} | - |
| notStockText | 库存不足文字，notStockDisabled为false时生效 | String | '库存不足' | - |
| notSelectSku | 未选择完整的sku时的文字提示 | String | '请选择完整的sku属性' | - |
| showStockNum | 是否展示库存数量 | Boolean | true | false |

### Events
| 事件名 | 说明 | 回调参数 |
| --- | --- | -- |
| confirm | 点击确认按钮时触发的事件 | e = { sku, skuText , num }。分别对应选中的sku值 、sku属性名数组 、输入框内的数量。 |
| skuChange | sku发生变化时出发的事件，如果有选中完整的sku则会返回该sku，否则会返回{} | e = {} |
| numChange | 输入框内数量发生改变时触发事件 | e = num, 返回输入框数量 |
| close | 关闭sku组件触发事件 | - |
| open | 打开sku组件触发事件 | - |

### Methods
| 方法名 | 说明 |
| --- | --- |
| resetNum | 重置购买数量 |
