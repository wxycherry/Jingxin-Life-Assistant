<template>
	<view class="content">
		<view class="welcome">
			<p>欢迎来到</p>
			<p>睛心生活助手</p>
		</view>
		<p class="buchong">开启健康生活新旅程！</p>
		<!-- 登录 -->
		<view v-if="signin">
			<input type="text" placeholder="请输入您的账号" v-model="account" />
			<!-- <input type="text" placeholder="请输入您的验证码" v-model="code" v-if="iscode"/> -->
			<input type="text" placeholder="请输入您的密码" v-model="password" v-if="ispassword" />
		</view>
		<!-- 注册 -->
		<view v-if="register">
			<input type="text" placeholder="请输入您的账号" v-model="account1" />
			<!-- <input type="text" placeholder="请输入您的验证码" v-model="code" v-if="iscode"/> -->
			<input type="text" placeholder="请输入您的密码" v-model="password1" />
			<input type="text" placeholder="请确认您的密码" v-model="password2" />
		</view>
		<!-- <p class="tips">未注册的手机号验证后自动创建账户</p> -->
		<!-- 验证码 -->
		<!-- <view class="wrap" @click="getcode">
			<u-toast ref="uToast"></u-toast>
			<u-code startText="获取短信验证码"  :seconds="seconds" @end="end" @start="start" ref="uCode" @change="codeChange"></u-code>
			<u-button  Color="white" shape="circle" @tap="getCode">{{tips}}</u-button>
		</view> -->
		<view class="buttons">
			<p class="password" @click="totoregister" v-if="signin">前去注册</p>
			<p class="password " @click="totosignin" v-if="register">返回登录</p>
			<p class="password" v-if="register">注册</p>
			<p class="password" @click="toTabBarPage" v-if="signin">登录</p>
		</view>
		<!-- <p class="password"  @click="toTabBarPage">密码登录</p> -->
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
				account: '',
				password: '',
				account1: '',
				password1: '',
				password2: '',
				code: '',
				tips: '',
				value1: 'true',
				seconds: 60,
				iscode: false,
				ispassword: true,
				signin: true,
				register: false,
			}
		},
		methods: {
			toTabBarPage() {
				this.ispassword = true;
				if (this.account == "admin" && this.password == "123456") {
					uni.showToast({
						title: '登录成功',
						icon: 'success',
						duration: 1000
					});
					 setTimeout(() => {
					      uni.switchTab({
					        url: '/pages/index/index',
					        success: () => {
					          console.log('跳转成功');
					        },
					        fail: (err) => {
					          console.error('跳转失败', err);
					        }
					      });
					    }, 2000);
				} else {
					uni.showToast({
						title: '账号或密码有误',
						icon: 'none'
					});
				}

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
			},
			getcode() {
				this.iscode = true;
			},
			totoregister() {
				this.register = true;
				this.signin = false;
			},
			totosignin() {
				this.register = false;
				this.signin = true;
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
		margin-bottom: 20px;
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

	.password {
		color: white;
		margin-top: 20px;
		/* margin-left: 45%; */
	}

	.agree {
		left: 25%;
		top: 750px;
		position: fixed;
	}

	.buttons {
		display: flex;
		flex-direction: row;
		width: 80%;
		margin-left: 50px;
		align-items: center;
		justify-content: space-between;
	}

	.password:active {
		color: #1561cc;
	}
</style>