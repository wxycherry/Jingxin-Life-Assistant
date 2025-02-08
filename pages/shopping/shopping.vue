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
				products: [{
						image: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.zK0tU8SLEEF_ufwSDdZFKAAAAA?rs=1&pid=ImgDetMain',
						title: '番茄红素沙棘果油软胶囊',
						price: 400,
						sales: 5206
					},
					{
						image: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.zK0tU8SLEEF_ufwSDdZFKAAAAA?rs=1&pid=ImgDetMain',
						title: '番茄红素沙棘果油软胶囊',
						price: 400,
						sales: 5206
					},
					{
						image: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.zK0tU8SLEEF_ufwSDdZFKAAAAA?rs=1&pid=ImgDetMain',
						title: '番茄红素沙棘果油软胶囊',
						price: 400,
						sales: 5206
					},
					{
						image: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.zK0tU8SLEEF_ufwSDdZFKAAAAA?rs=1&pid=ImgDetMain',
						title: '番茄红素沙棘果油软胶囊',
						price: 400,
						sales: 5206
					},
					{
						image: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.zK0tU8SLEEF_ufwSDdZFKAAAAA?rs=1&pid=ImgDetMain',
						title: '番茄红素沙棘果油软胶囊',
						price: 400,
						sales: 5206
					},
					{
						image: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.zK0tU8SLEEF_ufwSDdZFKAAAAA?rs=1&pid=ImgDetMain',
						title: '番茄红素沙棘果油软胶囊',
						price: 400,
						sales: 5206
					},
					{
						image: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.zK0tU8SLEEF_ufwSDdZFKAAAAA?rs=1&pid=ImgDetMain',
						title: '番茄红素沙棘果油软胶囊',
						price: 400,
						sales: 5206
					},
					{
						image: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.zK0tU8SLEEF_ufwSDdZFKAAAAA?rs=1&pid=ImgDetMain',
						title: '番茄红素沙棘果油软胶囊',
						price: 400,
						sales: 5206
					},
					{
						image: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.zK0tU8SLEEF_ufwSDdZFKAAAAA?rs=1&pid=ImgDetMain',
						title: '番茄红素沙棘果油软胶囊',
						price: 400,
						sales: 5206
					},
					{
						image: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.zK0tU8SLEEF_ufwSDdZFKAAAAA?rs=1&pid=ImgDetMain',
						title: '番茄红素沙棘果油软胶囊',
						price: 400,
						sales: 5206
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
		width: 40%;
		margin-top: 10px;
		margin-left: 31%;
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
	}

	.product-sales {
		font-size: 14px;
		color: #1B77FB;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.product-sales span {
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