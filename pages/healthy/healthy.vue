<template>
	<view class="content">
		<view class="top">
			<view class="title">
				<p>健康管理中心</p>
				<p class="smalltitle">----个性化服务，满足您的健康需求</p>
			</view>
		</view>
		<view class="main">
			<view class="kapian">
				<img class="imgs"
					src="https://ts1.cn.mm.bing.net/th/id/R-C.3c7b265b89c84c2957b2a40dbf9c02e0?rik=GdHT8J%2fpHxN2sA&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f50084%2f9823.jpg_wh860.jpg&ehk=T0XqSwNgC7Yae4Hn8QGInL2KcTAqYAoan1NnQxUh7Oo%3d&risl=&pid=ImgRaw&r=0"
					alt="" />
				<view class="kapian-main">
					<p class="small-title">报告分析</p>
					<p class="intro">最近一次的分析报告关键信息如关键指标的数值、健康状态的总体评价等。</p>
					<P class="blue">查看详情</P>
				</view>
			</view>
			<view class="kapian">
				<img class="imgs"
					src="https://ts1.cn.mm.bing.net/th/id/R-C.3c7b265b89c84c2957b2a40dbf9c02e0?rik=GdHT8J%2fpHxN2sA&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f50084%2f9823.jpg_wh860.jpg&ehk=T0XqSwNgC7Yae4Hn8QGInL2KcTAqYAoan1NnQxUh7Oo%3d&risl=&pid=ImgRaw&r=0"
					alt="" />
				<view class="kapian-main">
					<p class="small-title">诊断结果</p>
					<p class="intro">最近一次的分析报告关键信息如关键指标的数值、健康状态的总体评价等。</p>
					<P class="blue">查看详情</P>
				</view>
			</view>
			<view class="kapian">
				<img class="imgs"
					src="https://ts1.cn.mm.bing.net/th/id/R-C.3c7b265b89c84c2957b2a40dbf9c02e0?rik=GdHT8J%2fpHxN2sA&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f50084%2f9823.jpg_wh860.jpg&ehk=T0XqSwNgC7Yae4Hn8QGInL2KcTAqYAoan1NnQxUh7Oo%3d&risl=&pid=ImgRaw&r=0"
					alt="" />
				<view class="kapian-main">
					<p class="small-title">个性化建议</p>
					<p class="intro">最近一次的分析报告关键信息如关键指标的数值、健康状态的总体评价等。</p>
					<P class="blue">查看详情</P>
				</view>
			</view>
			<view class="kapian">
				<img class="imgs"
					src="https://ts1.cn.mm.bing.net/th/id/R-C.3c7b265b89c84c2957b2a40dbf9c02e0?rik=GdHT8J%2fpHxN2sA&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f50084%2f9823.jpg_wh860.jpg&ehk=T0XqSwNgC7Yae4Hn8QGInL2KcTAqYAoan1NnQxUh7Oo%3d&risl=&pid=ImgRaw&r=0"
					alt="" />
				<view class="kapian-main">
					<p class="small-title">健康跟踪</p>
					<p class="intro">最近一次的分析报告关键信息如关键指标的数值、健康状态的总体评价等。</p>
					<P class="blue">查看详情</P>
				</view>
			</view>
			<view class="btn">
				<u-button type="success" shape="circle">立即开启健康之旅</u-button>
			</view>
		</view>

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
		background-color: white;
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}

	.top {
		width: 100%;
		height: 150px;
		background-color: #1B77FB;
		z-index: 999;
		border-radius: 0 0 50px 50px;
	}

	.title {
		color: white;
		font-size: 30px;
		margin-left: 20px;
		font-family: KaiTi;
		margin-top: 20px;
	}

	.smalltitle {
		font-size: 19px;
		margin-top: 15px;
		margin-left: 50px;
	}

	.btn {
		width: 90%;
		margin-top: 20px;
		margin-bottom: 20px;
		/* margin-left: 3%; */

	}

	.main {
		width: 100%;
		height: 600px;
		background-color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.kapian {
		width: 90%;
		height: 120px;
		margin-top: 20px;
		background-color: #FFFFFF;
		box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
		background-color: white;
		border-radius: 10px;
		display: flex;
		flex-direction: row;
	}

	.imgs {
		width: 90px;
		height: 90px;
		margin: 10px;
		border-radius: 15px;
	}

	.kapian-main {
		width: 70%;
		height: 110px;
	}

	.small-title {
		margin: 10px;
		font-weight: bold;
		font-size: 17px;
	}

	.intro {
		margin-left: 10px;
		margin-right: 10px;
		font-size: 15px;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		/* 设置显示的行数 */
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		color: #7A7F7F;
	}
	.blue{
		color: #1B77FB ;
		font-weight: bold;
		position: relative;
		left: 160px;
		top: 4px;
	}
</style>