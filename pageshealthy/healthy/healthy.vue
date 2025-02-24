<template>
	<view class="content">
		<img class="bgc" src="https://tse2-mm.cn.bing.net/th/id/OIP-C.Elsq2C6hkzKQrlIdPov2sQAAAA?rs=1&pid=ImgDetMain"
			alt="" />
		<div class="suggestion">
			<view class="top">
				<img class="imgs" src="../../static/icon.png" alt="" />
				<p class="title">睡眠改善</p>
			</view>
			<p class="main">建议您建立规律的作息时间，每天尽量在相同的时间上床睡觉和起床，睡前避免使用电子设备，可尝试进行放松的冥想或阅读活动，以帮助提高睡眠质量。</p>
		</div>
		<div class="suggestion">
			<view class="top">
				<img class="imgs" src="../../static/icon.png" alt="" />
				<p class="title">压力缓解</p>
			</view>
			<p class="main">每周安排至少三次有氧运动，如慢跑、游泳或骑自行车，每次运动 30 分钟以上，释放压力荷尔蒙；也可以学习一些简单的呼吸放松技巧，在感到压力时随时进行调节。</p>
		</div>
		<div class="suggestion">
			<view class="top">
				<img class="imgs" src="../../static/icon.png" alt="" />
				<p class="title">生活习惯调整</p>
			</view>
			<p class="main">保持均衡的饮食，增加蔬菜、水果和优质蛋白质的摄入，避免过度摄入咖啡因和糖分，以维持身体的良好状态。</p>
		</div>
		<div class="suggestion">
			<view class="top">
				<img class="imgs" src="../../static/icon.png" alt="" />
				<p class="title">眼部护理</p>
			</view>
			<p class="main">因您用眼时间较长，容易出现眼疲劳，建议每用眼 40 分钟，就远望 5 分钟，让眼睛得到放松。可以使用温热毛巾敷眼，促进眼周血液循环，缓解不适。也可在医生指导下，使用滋润型眼药水。</p>
		</div>
		<div class="suggestion">
			<view class="top">
				<img class="imgs" src="../../static/icon.png" alt="" />
				<p class="title">社交互动</p>
			</view>
			<p class="main">良好的社交能改善情绪状态，您可以每周安排 2 - 3 次与亲朋好友的聚会，分享生活点滴，获得情感支持。还可以参加一些自己感兴趣的社团活动，拓展社交圈，丰富生活。</p>
		</div>
		<div class="suggestion">
			<view class="top">
				<img class="imgs" src="../../static/icon.png" alt="" />
				<p class="title">皮肤保养</p>
			</view>
			<p class="main">鉴于您作息和压力可能对皮肤有影响，每天要做好皮肤清洁和保湿。每周可使用 2 - 3 次具有修复功效的面膜。同时，注意防晒，减少紫外线对皮肤的伤害，维持皮肤健康状态。</p>
		</div>

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
		background-color: #f2f2f4;
		width: 100%;
		/* height: 750px; */
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.bgc {
		width: 100%;
		height: 200px;
		margin-bottom: 15px;
	}

	.suggestion {
		background-color: white;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		overflow: hidden;
		width: 95%;
		/* height: 200px; */
		/* display: flex;
		flex-direction: column;
		align-items: center; */
		margin-bottom: 20px;
	}
	.imgs{
		width: 30px;
		height: 30px;
		margin: 10px;
	}
	.top{
		display: flex;
		align-items: center;
	}
	.title{
		font-size: 18px;
		color: #1B77FB;
		font-weight: bold;
	}
	.main{
		margin-left: 20px;
		text-indent: 2em;
		margin-bottom: 20px;
		color: #969697;
	}
</style>