<template>
	<view>
		<u-no-network @disconnected="disconnected" @connected="connected" @retry="retry"></u-no-network>
		<view class="u-content">
			<view class="u-content__circle">
				<u-icon name="checkbox-mark" color="#fff" size="30"></u-icon>
			</view>
			<text class="u-content__normal">支付成功</text>
		</view>
		<p class="name">睛彩智康科技有限公司</p>
		<p class="yuan">￥45.00</p>
		<navigator url="/pagesgoods/details/details" class="buy-now">
			<button type="primary" @click="toTabBarPage" :plain="true" text="镂空" class="success">完成</button>
		</navigator>
	</view>
</template>

<script>
	export default {
		methods: {
			toTabBarPage() {
				uni.switchTab({
					url: '/pages/shopping/shopping',
					success: () => {
						console.log('跳转成功');
					},
					fail: (err) => {
						console.error('跳转失败', err);
					}
				});
			},
			disconnected() {
				console.log('disconnected');
			},
			connected() {
				console.log('connected');
			},
			retry() {
				console.log('retry');
			}
		},
	}
</script>

<style lang="scss" scoped>
	.u-content {
		padding: 150px 60px 0;
		@include flex(column);
		align-items: center;
		justify-content: center;

		&__circle {
			background-color: $u-success;
			@include flex;
			border-radius: 100px;
			width: 60px;
			height: 60px;
			align-items: center;
			justify-content: center;
		}

		&__normal {
			font-size: 20px;
			font-weight: bold;
			color: $u-success;
			margin-top: 15px;
		}
	}

	.name {
		margin-top: 50px;
		margin-left: 24%;
		font-size: 18px;
		font-weight: 500;
	}

	.yuan {
		margin-bottom: 20px;
		font-size: 40px;
		font-weight: bold;
		margin-left: 30%;
		margin-top: 10px;
	}

	.success {
		width: 90%;
		position: relative;
		top: 300px;
	}
</style>