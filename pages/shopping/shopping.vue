<template>
	<view class="content">
		<view class="shop" v-for="(item, index) in products" :key="index">
			<navigator url="/pagesgoods/details/details">
				<img :src="item.image" alt="番茄红素沙棘果油软胶囊" class="product-image">
				<view class="product-info">
					<view class="product-title">{{ item.title }}</view>
					<view class="product">
						<view class="product-price">¥{{ item.price }}</view>
						<view class="product-sales">
							<span>销量: {{ item.sales }}</span>
						</view>
					</view>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				products: [
					{
						image: 'https://ts1.cn.mm.bing.net/th/id/R-C.4881fea03fb71a8f0d2bd295d3d766de?rik=n3hoPewn5XXxEA&riu=http%3a%2f%2fm.360buyimg.com%2fn12%2fjfs%2ft2290%2f28%2f1862041609%2f199610%2fc4f7622a%2f56dfc4bfN913b48e1.jpg!q70.jpg&ehk=qfylY%2bqPX8tQOBPYWhsTR1SVjPrkKVqlBbqkEPP2VQU%3d&risl=&pid=ImgRaw&r=0',
						title: '桂格即食燕麦片',
						price: 45,
						sales: 20123
					},{
						image: 'https://img.alicdn.com/bao/uploaded/i1/94050694/O1CN01gssXVK1GztZ1NrSKn_!!94050694.jpg',
						title: '海藻保湿补水面膜',
						price: 400,
						sales: 8652
					},
					{
						image: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.S82MVq0hG4KnZEfSBh63CQHaEK?rs=1&pid=ImgDetMain',
						title: '滚珠式眼部按摩仪',
						price: 268,
						sales: 6321 
					},
					{
						image: 'https://img.yaopinnet.com/img500/202112/c73y3y1638973346.jpg',
						title: '蓝莓叶黄素酯压片糖果 ',
						price: 158,
						sales: 7890
					},
					{
						image: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.AyEWAKim6hh7DNMqLDI5xAHaHa?rs=1&pid=ImgDetMain',
						title: '天然植物精华眼霜',
						price: 399,
						sales: 5986
					},
					{
						image: 'https://pic3.zhimg.com/50/v2-deaad83ef692183467027684313eca7e_720w.jpg?source=1940ef5c',
						title: '无印良品护眼台灯',
						price: 359,
						sales: 4850 
					},
					{
						image: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/118411/14/10498/420564/5eec70c8E3469ac8b/5b4122c3d2949502.jpg',
						title: '综合坚果礼盒',
						price: 198,
						sales: 9023 
					},
					{
						image: 'https://cbu01.alicdn.com/img/ibank/2019/471/984/12774489174_1025357403.jpg',
						title: '美的智能体脂秤',
						price: 129,
						sales: 3568
					},
					{
						image: 'https://imgservice.suning.cn/uimg1/b2c/image/Z-fz83hX0Abzji4JYFyplQ==.jpg_800w_800h_4e',
						title: '珍视明滴眼液',
						price: 15,
						sales: 23456 
					},
					{
						image: 'https://pic2.zhimg.com/v2-d1b6c9c0e1cbfc8e37f6f382bba5bc6f_1440w.jpg?source=172ae18b',
						title: '理 * 泉 B5 多效修复霜',
						price: 108,
						sales: 15632
					},
					{
						image: 'https://hqsx-1258552171.file.myqcloud.com/uploads/2022/09/20220909003248512.jpg',
						title: '雅 * 兰黛小棕瓶眼霜',
						price: 530,
						sales: 12589
					},
					{
						image: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/100413/7/6964/179600/5df84814E23ca1689/8f714b0de440c0d0.jpg!q80.dpg',
						title: '良品铺子每日坚果礼盒',
						price:199,
						sales: 18765
					}
				]
			};
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		background-color: #f2f2f4;
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}

	.shop {
		width: 42%;
		height: 200px;
		background-color: white;
		border-radius: 10px;
		margin: 10px;
		margin-top: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.product-card {
		width: 200px;
		border: 1px solid #f2f2f2;
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		font-family: Arial, sans-serif;
	}

	.product-image {
		width: 70%;
		margin-top: 10px;
		margin-left: 15%;
		height: 100px;
	}

	.product-info {
		padding: 10px;
	}

	.product-title {
		font-size: 13px;
		margin-bottom: 5px;
		color: #333;
	}

	.product-price {
		font-size: 18px;
		color: #e60012;
		margin-bottom: 5px;
		margin-right: 20px;
	}

	.product-sales {
		font-size: 14px;
		color: #1B77FB;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.product-sales span {
		width: 80px;
		background-color: #dbdffb;
		padding: 2px 5px;
		border-radius: 50px;
		border: 1px solid #1B77FB;
	}

	.product {
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
	}
</style>