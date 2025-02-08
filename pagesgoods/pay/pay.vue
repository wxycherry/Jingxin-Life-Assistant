<template>
	<view class="content">
		<p class="demo">Demo订单</p>
		<p class="yuan">￥15.00</p>
		<view class="square">
			<view class="in">收款方</view>
			<view>上海叽里呱啦晴栀有限公司</view>
		</view>
		<u-line color="#707070"></u-line>
		<navigator url="/pagesgoods/success/success" class="nav">
			<button class="btn" @click="takePhoto">立即支付</button>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		background-color: #E8E8E8;
		width: 100%;
		height: 800px;
		display: flex;
		flex-direction: column;
		align-items: center;
		/* justify-content: center; */
	}

	.btn {
		width: 90%;
		background-color: #1AAC19;
		color: white;
		margin-top: 20px;
	}

	.btn:active {
		background-color: #158813;
	}

	.demo {
		margin: 20px;
		font-weight: bold;
		font-size: 20px;
	}

	.yuan {
		margin-bottom: 20px;
		font-size: 40px;
		font-weight: bold;
	}

	.square {
		width: 140%;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		margin-bottom: 20px
	}

	.in {
		color: #AFADAD;
	}
	.nav{
		width: 100%;
	}
</style>