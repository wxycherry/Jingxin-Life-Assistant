<template>
	<view class="container">
		<scroll-view scroll-y class="viewport">
			<!-- 基本信息 -->
			<view class="goods">
				<!-- 商品主图 -->
				<view class="preview">
					<swiper circular>
						<swiper-item>
							<image mode="aspectFill"
								src="https://yanxuan-item.nosdn.127.net/99c83709ca5f9fd5c5bb35d207ad7822.png" />
						</swiper-item>
						<swiper-item>
							<image mode="aspectFill"
								src="https://yanxuan-item.nosdn.127.net/f9107d47c08f0b99c097e30055c39e1a.png" />
						</swiper-item>
						<swiper-item>
							<image mode="aspectFill"
								src="https://yanxuan-item.nosdn.127.net/754c56785cc8c39f7414752f62d79872.png" />
						</swiper-item>
						<swiper-item>
							<image mode="aspectFill"
								src="https://yanxuan-item.nosdn.127.net/ef16f8127610ef56a2a10466d6dae157.jpg" />
						</swiper-item>
						<swiper-item>
							<image mode="aspectFill"
								src="https://yanxuan-item.nosdn.127.net/1f0c3f5d32b0e804deb9b3d56ea6c3b2.png" />
						</swiper-item>
					</swiper>
					<view class="indicator">
						<text class="current">1</text>
						<text class="split">/</text>
						<text class="total">5</text>
					</view>
				</view>

				<!-- 商品简介 -->
				<view class="meta">
					<view class="price">
						<text class="symbol">¥</text>
						<text class="number">29.90</text>
					</view>
					<view class="name ellipsis">云珍·轻软旅行长绒棉方巾 </view>
					<view class="desc"> 轻巧无捻小方巾，旅行便携 </view>
				</view>

				<!-- 操作面板 -->
				<view class="action">
					<view class="item arrow" @click="show = true">
						<text class="label">选择</text>
						<text class="text ellipsis"> 请选择商品规格 </text>
					</view>
					<view class="item arrow">
						<text class="label1">用户评价</text>
					</view>
					<view class="contant">
						<div class="review">
							<div class="review-header">
								<span class="review-user"><img class="touxiang"
										src="https://tse3-mm.cn.bing.net/th/id/OIP-C.TcBhAP29KQ58b7Hzz2Rz2AAAAA?w=207&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7"
										alt="" />A***7</span>
								<span class="review-date">2024/09/27</span>
							</div>
							<div class="review-content">好评！</div>
						</div>
						<div class="review">
							<div class="review-header">
								<span class="review-user"><img class="touxiang"
										src="https://tse3-mm.cn.bing.net/th/id/OIP-C.TcBhAP29KQ58b7Hzz2Rz2AAAAA?w=207&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7"
										alt="" />A***7</span>
								<span class="review-date">2024/09/27</span>
							</div>
							<div class="review-content">好评！</div>
						</div>
					</view>
				</view>
			</view>
		</scroll-view>

		<!-- 用户操作 -->
		<view class="toolbar" :style="{ paddingBottom: safeAreaInsets.bottom + 'px' }">
			<view class="icons">
				<button class="icons-button"><u-icon name="star"></u-icon>收藏</button>
				<button class="icons-button" open-type="contact">
					<u-icon name="chat"></u-icon>客服
				</button>
				<navigator class="icons-button" url="/pages/cart/cart" open-type="switchTab">
					<u-icon name="shopping-cart"></u-icon>购物车
				</navigator>
			</view>
			<view class="buttons">
				<view class="addcart"> 加入购物车 </view>
				<view class="buynow" @click="show = true">
					立即购买
					<u-popup :show="show" @close="close" @open="open" mode="bottom" closeOnClickOverlay="true"
						closeable="true">
						<view class="popup-content">
							<view class="product-info">
								<image class="product-image"
									src="https://yanxuan-item.nosdn.127.net/99c83709ca5f9fd5c5bb35d207ad7822.png" />
								<view class="product-price">
									<text class="symbol">¥</text>
									<text class="number">220.00</text>
								</view>
							</view>
							<view class="product-specs">
								<p class="bold">规格</p>
								<p class="tip1">宝萃健即溶茶固体饮料</p>
							</view>
							<view class="product-quantity">
								<p class="bold">数量</p>
								<view class="quantity-control tip2">
									<button class="quantity-button" @click="decreaseQuantity">-</button>
									<text class="quantity-value">{{ quantity }}</text>
									<button class="quantity-button" @click="increaseQuantity">+</button>
								</view>
							</view>
							<view class="product-actions">
								<button class="add-to-cart" @click="addToCart">加入购物车</button>
								<navigator url="/pagesgoods/pay/pay" class="buy-now">
									<button class="buy-now" @click="buyNow">立即购买</button>
								</navigator>
							</view>
						</view>
					</u-popup>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				quantity: 1
			}
		},
		methods: {
			open() {
				// console.log('open');
			},
			close() {
				this.show = false
				// console.log('close');
			},
			decreaseQuantity() {
				if (this.quantity > 1) {
					this.quantity--;
				}
			},
			increaseQuantity() {
				this.quantity++;
			},
			addToCart() {
				console.log('Added to cart:', this.quantity);
				this.close();
			},
			buyNow() {
				console.log('Buy now:', this.quantity);
				this.close();
			}
		}
	}
</script>

<style lang="scss">
	/* 样式部分保持不变，直接复制过来即可 */
	page {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.container {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.viewport {
		background-color: #f4f4f4;
		flex: 1;
	}

	.panel {
		margin-top: 20rpx;
		background-color: #fff;

		.title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 90rpx;
			line-height: 1;
			padding: 30rpx 60rpx 30rpx 6rpx;
			position: relative;

			text {
				padding-left: 10rpx;
				font-size: 28rpx;
				color: #333;
				font-weight: 600;
				border-left: 4rpx solid #27ba9b;
			}

			navigator {
				font-size: 24rpx;
				color: #666;
			}
		}
	}

	.arrow {
		&::after {
			position: absolute;
			top: 50%;
			right: 30rpx;
			content: '\e6c2';
			color: #ccc;
			font-family: 'erabbit' !important;
			font-size: 32rpx;
			transform: translateY(-50%);
		}
	}

	swiper {
		height: 700px;
	}

	/* 商品信息 */
	.goods {
		background-color: #fff;

		.preview {
			height: 350px;
			position: relative;

			image {
				width: 100%;
				height: 350px;
			}

			.indicator {
				height: 40rpx;
				padding: 0 24rpx;
				line-height: 40rpx;
				border-radius: 30rpx;
				color: #fff;
				font-family: Arial, Helvetica, sans-serif;
				background-color: rgba(0, 0, 0, 0.3);
				position: absolute;
				bottom: 30rpx;
				right: 30rpx;

				.current {
					font-size: 26rpx;
				}

				.split {
					font-size: 24rpx;
					margin: 0 1rpx 0 2rpx;
				}

				.total {
					font-size: 24rpx;
				}
			}
		}

		.meta {
			position: relative;
			border-bottom: 1rpx solid #eaeaea;

			.price {
				height: 130rpx;
				padding: 25rpx 30rpx 0;
				color: #fff;
				font-size: 34rpx;
				box-sizing: border-box;
				background-color: #35c8a9;
			}

			.number {
				font-size: 56rpx;
			}

			.brand {
				width: 160rpx;
				height: 80rpx;
				overflow: hidden;
				position: absolute;
				top: 26rpx;
				right: 30rpx;
			}

			.name {
				max-height: 88rpx;
				line-height: 1.4;
				margin: 20rpx;
				font-size: 32rpx;
				color: #333;
			}

			.desc {
				line-height: 1;
				padding: 0 20rpx 30rpx;
				font-size: 24rpx;
				color: #cf4444;
			}
		}

		.action {
			padding-left: 20rpx;

			.item {
				height: 90rpx;
				padding-right: 60rpx;
				border-bottom: 1rpx solid #eaeaea;
				font-size: 26rpx;
				color: #333;
				position: relative;
				display: flex;
				align-items: center;

				&:last-child {
					border-bottom: 0 none;
				}
			}

			.label {
				width: 60rpx;
				color: #898b94;
				margin: 0 16rpx 0 10rpx;
			}

			.label1 {
				width: 100rpx;
				color: #898b94;
				font-weight: bold;
				margin: 0 16rpx 0 10rpx;
			}

			.text {
				flex: 1;
				-webkit-line-clamp: 1;
			}
		}
	}

	/* 底部工具栏 */
	.toolbar {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
		background-color: #fff;
		height: 100rpx;
		padding: 0 20rpx var(--window-bottom);
		border-top: 1rpx solid #eaeaea;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: content-box;

		.buttons {
			display: flex;

			&>view {
				width: 220rpx;
				text-align: center;
				line-height: 72rpx;
				font-size: 26rpx;
				color: #fff;
				border-radius: 72rpx;
			}

			.addcart {
				background-color: #ffa868;
			}

			.buynow,
			.payment {
				background-color: #27ba9b;
				margin-left: 20rpx;
				color: white;
				border-radius: 50px;
				font-size: 15px;
			}
		}

		.icons {
			padding-right: 10rpx;
			display: flex;
			align-items: center;
			flex: 1;

			.icons-button {
				flex: 1;
				text-align: center;
				line-height: 1.4;
				padding: 0;
				margin: 0;
				border-radius: 0;
				font-size: 20rpx;
				color: #333;
				background-color: #fff;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				&::after {
					border: none;
				}
			}

			text {
				display: block;
				font-size: 34rpx;
			}
		}
	}

	.contant {
		height: 250px;
		background-color: white;
		width: 100%;
		padding: 10px;
	}

	.review {
		width: 90%;
		margin-bottom: 20px;
		padding-bottom: 20px;
		border-bottom: 1px solid #eee;
	}

	.review:last-child {
		border-bottom: none;
		margin-bottom: 0;
		padding-bottom: 0;
	}

	.review-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
	}

	.review-user {
		display: flex;
		align-items: center;
		font-weight: bold;
		color: #333;
	}

	.review-date {
		color: #999;
		font-size: 0.9em;
	}

	.review-content {
		color: #555;
		line-height: 1.6;
	}

	.view-more {
		text-align: center;
		margin-top: 20px;
	}

	.view-more a {
		color: #007bff;
		text-decoration: none;
	}

	.view-more a:hover {
		text-decoration: underline;
	}

	.touxiang {
		width: 30px;
		height: 30px;
		margin-right: 10px;
		border-radius: 50%;
	}

	.popup-content {
		padding: 20px;
		background-color: #fff;
	}

	.product-info {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
	}

	.product-image {
		width: 80px;
		height: 80px;
		border-radius: 10px;
		margin-right: 20px;
	}

	.product-price {
		font-size: 24px;
		color: #ff4d4f;
	}

	.product-specs {
		margin-bottom: 20px;
		color: black;
		
	}

	.product-quantity {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 20px;
		width: 100%;
		height: 70px;
		// background-color: red;
		color: black;
	}

	.quantity-control {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.quantity-button {
		width: 28px;
		height: 28px;
		background-color: #f0f0f0;
		border: none;
		cursor: pointer;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.quantity-value {
		margin: 0 10px;
		font-size: 20px;
	}

	.product-actions {
		display: flex;
		justify-content: space-between;
	}

	.add-to-cart,
	.buy-now {
		width: 48%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		color: #fff;
		border-radius: 20px;
	}

	.add-to-cart {
		background-color: #ffa868;
	}

	.buy-now {
		background-color: #ff4d4f;
		width: 180px;
	}
	.bold{
		font-weight: bold;
		margin-right: 300px;
	}
	.tip1{
		margin-right: 160px;
		margin-left: 6px;
		width: 50%;
		background-color:#EE7121 ;
		color: white;
		border-radius: 5px;
		height: 35px;
	}
	.tip2{
		margin-right: 240px;
	}
</style>