<template>
	<view class="content">
		<view class="welcome">
			<p>欢迎来到</p>
			<p>睛心生活助手</p>
		</view>
		<p class="buchong">开启健康生活新旅程！</p>
		<input type="text" placeholder="请输入您的手机号" v-model="value" />
		<p class="tips">未注册的手机号验证后自动创建账户</p>
		<view class="wrap" >
			<u-toast ref="uToast"></u-toast>
			<u-code startText="获取短信验证码"  :seconds="seconds" @end="end" @start="start" ref="uCode" @change="codeChange"></u-code>
			<u-button  Color="white" shape="circle" @tap="getCode">{{tips}}</u-button>
		</view>
		<p class="password"  @click="toTabBarPage">密码登录</p>
		<view class="agree">
			<u-radio-group v-model="value1">
			<u-radio activeColor="#6de675" label="我已阅读并同意<用户协议>" label-color="white"></u-radio>
		</u-radio-group>
		</view>
		
		<!-- <button @click="toTabBarPage">登录</button> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				tips:'',
				value1:'false',
				seconds: 60,
			}
		},
		methods: {
			toTabBarPage() {
				uni.switchTab({
					url: '/pages/index/index',
					success: () => {
						console.log('跳转成功');
					},
					fail: (err) => {
						console.error('跳转失败', err);
					}
				});
			},
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						uni.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					uni.$u.toast('倒计时结束后再发送');
				}
			},
			end() {
				uni.$u.toast('倒计时结束');
			},
			start() {
				uni.$u.toast('倒计时开始');
			}
		}
	};
</script>

<style>
	.content {
		width: 100%;
		height: 850px;
		background-color: #1B77FB;
	}

	.welcome {
		padding-top: 100px;
		padding-left: 40px;
	}

	.welcome p {
		font-size: 40px;
		color: white;
		font-weight: bold;
		font-family: kaiTi;
	}

	.buchong {
		margin: 35px;
		margin-left: 45px;
		color: white;
	}

	input {
		background-color: white;
		height: 40px;
		border-radius: 30px;
		width: 78%;
		margin-left: 40px;
		padding-left: 20px;
	}

	.tips {
		color: #dededf;
		font-size: 13px;
		margin-left: 90px;
		margin-top: 15px;
	}
	.wrap {
			padding: 24rpx;
			width: 83%;
			margin-left: 30px;
			margin-top: 20px;

		}
		.password{
			color: white;
			margin-top: 20px;
			margin-left: 45%;
		}
		.agree{
			margin-left: 25%;
			margin-top:300px ;
		}
</style>