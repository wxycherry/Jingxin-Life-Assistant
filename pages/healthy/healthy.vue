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
					src="../../static/img/1.png"
					alt="" />
				<view class="kapian-main">
					<p class="small-title">报告分析</p>
					<p class="intro">从分析数据来看，您的皮肤光泽度处于正常范围，但黑眼圈度数显示您近一周可能睡眠不足，平均睡眠时长约为 6小时，低于健康睡眠标准。关键的情绪识别指标显示，您近期的压力水平略高，情绪状态偏向紧张。</p>
					<P class="blue">查看详情</P>
				</view>
			</view>
			<view class="kapian">
				<img class="imgs"
					src="../../static/img/2.png"
					alt="" />
				<view class="kapian-main">
					<p class="small-title">诊断结果</p>
					<p class="intro">综合各项关键指标的数值与健康标准对比分析，您目前的健康状态呈现睡眠不足与压力较大的情况。睡眠不足可能导致身体疲劳、免疫力下降，进而影响日常生活与工作学习效率；较高的压力水平若长期得不到缓解，可能会引发焦虑、抑郁等不良情绪。虽然目前尚未出现严重的健康问题，但这些潜在风险需要引起重视。</p>
					<P class="blue">查看详情</P>
				</view>
			</view>
			<view class="kapian">
				<img class="imgs"
					src="../../static/img/3.png"
					alt="" />
				<view class="kapian-main">
					<p class="small-title">个性化建议</p>
					<p class="intro">针对您目前的状态，我们为您定制了以下个性化方案：

睡眠改善：建议您建立规律的作息时间，每天尽量在相同的时间上床睡觉和起床，睡前避免使用电子设备，可尝试进行放松的冥想或阅读活动，以帮助提高睡眠质量。
压力缓解：每周安排至少三次有氧运动，如慢跑、游泳或骑自行车，每次运动 30 分钟以上，释放压力荷尔蒙；也可以学习一些简单的呼吸放松技巧，在感到压力时随时进行调节。
生活习惯调整：保持均衡的饮食，增加蔬菜、水果和优质蛋白质的摄入，避免过度摄入咖啡因和糖分，以维持身体的良好状态。</p>
<navigator url="/pageshealthy/healthy/healthy">
					<P class="blue" >查看详情</P>
					</navigator>
				</view>
			</view>
			<view class="kapian">
				<img class="imgs"
					src="../../static/img/4.png"
					alt="" />
				<view class="kapian-main">
					<p class="small-title">健康跟踪</p>
					<p class="intro">为持续关注您的健康状态改善情况，我们将定期提醒您上传新的面部照片，持续监测关键面部要素的变化。根据您后续上传的数据，实时更新分析报告与诊断结果，动态调整个性化建议。同时，您也可以在健康跟踪板块查看自己的健康改善历程，见证自身的健康变化。</p>
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