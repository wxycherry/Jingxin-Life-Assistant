<template>
	<view class="content">
		<view class="body">
			<view class="inputbody">
				<u--textarea v-model="value" maxlength="1000" height="200px" count placeholder="请输入你的看法~"
					border="none"></u--textarea>

			</view>
			<button class="btn" @click="publish">发布</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				type: 'textarea',
				border: true,
				height: 500,
				autoHeight: true,
			}
		},
		methods:{
			publish(){
				setTimeout(()=>{
					wx.showToast({
				  title: '发布成功',
				  icon: 'success'
				});
				})
				
			}
		}
	}
</script>

<style>
	.content {
		background-color: #f2f2f4;
		width: 100%;
		height: 800px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.body {
		background-color: white;
		width: 90%;
		height: 400px;
		border-radius: 15px;
		margin-top: 15px;
	}

	.btn {
		width: 80%;
		background-color: #3c9cFF;
		color: white;
		margin-top: 20px;
		border-radius: 30px;
	}

	.inputbody {
		margin: 15px;
		margin-left: 20px;
		height: 300px;
	}
</style>