<template>
	<view class="content">
		<img class="bgc" src="https://pic.616pic.com/bg_w1180/00/05/12/JxRoOTCPwZ.jpg!/fw/1120" alt="" />
		<div class="doctor-card">
			<div class="doctor-info">
				<img src="https://bpic.588ku.com/element_origin_min_pic/23/02/19/845129d9933a624d3b08838335208aa6.jpg"
					alt="陈元堂" class="doctor-photo">
				<div class="doctor-details">
					<h2>陈元堂</h2>
					<p>临床心理科主任医师</p>
					<div class="tags">
						<span class="tag">抑郁治疗</span>
						<span class="tag">焦虑缓解纠正</span>
					</div>
				</div>
				<view class="money">
					<button class="consult-button">咨询</button>
					<p>￥300元起</p>
				</view>

			</div>
			<div class="doctor-introduction">
				<h3>医生介绍</h3>
				<p>职业背景: 目前任泉州神和医院院长，心理科主任擅长领域: 双相情感障碍，精神分裂症，抑郁障碍、焦虑障碍、睡眠障碍</p>
				<p>咨询风格: 咨询风格专注来访者内心感受，相信每个来访者内在力量的成长才是真正问题的解决之道。有20年的重性精神心理疾病心理治疗经验。擅长催眠治疗，从潜意识入手治疗疾病，事半功倍。</p>
			</div>
		</div>
		<div class="doctor-card">
			<div class="doctor-info">
				<img src="https://bpic.588ku.com/element_origin_min_pic/23/02/19/845129d9933a624d3b08838335208aa6.jpg"
					alt="陈元堂" class="doctor-photo">
				<div class="doctor-details">
					<h2>陈元堂</h2>
					<p>临床心理科主任医师</p>
					<div class="tags">
						<span class="tag">抑郁治疗</span>
						<span class="tag">焦虑缓解纠正</span>
					</div>
				</div>
				<view class="money">
					<button class="consult-button">咨询</button>
					<p>￥300元起</p>
				</view>
		
			</div>
			<div class="doctor-introduction">
				<h3>医生介绍</h3>
				<p>职业背景: 目前任泉州神和医院院长，心理科主任擅长领域: 双相情感障碍，精神分裂症，抑郁障碍、焦虑障碍、睡眠障碍</p>
				<p>咨询风格: 咨询风格专注来访者内心感受，相信每个来访者内在力量的成长才是真正问题的解决之道。有20年的重性精神心理疾病心理治疗经验。擅长催眠治疗，从潜意识入手治疗疾病，事半功倍。</p>
			</div>
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

	.doctor-card {
		background-color: white;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		overflow: hidden;
		width: 95%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 20px;
	}

	.doctor-info {
		display: flex;
		align-items: center;
		padding: 16px;
	}

	.doctor-photo {
		width: 60px;
		height: 60px;
		margin-right: 16px;
	}

	.doctor-details h2 {
		margin: 0;
		font-size: 18px;
	}

	.doctor-details p {
		margin: 5px 0;
		color: #666;
	}

	.tags {
		display: flex;
		gap: 8px;
		margin-top: 10px;
	}

	.tag {
		background-color: #e0e0e0;
		border-radius: 4px;
		padding: 2px 8px;
		font-size: 12px;
		color: #333;
	}

	.money {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.consult-button {
		width: 60px;
		height: 30px;
		background-color: #ffd700;
		border: none;
		border-radius: 20px;
		font-size: 14px;
		cursor: pointer;
		margin-left: 10px;
	}

	.money p {
		color: #555;
		font-size: 10px;
		margin-top: 10px;
		margin-left: 10px;
	}

	.doctor-introduction {
		padding: 10px;
		width: 85%;
		background-color: #f0f0f0;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-weight: bold;
		margin-bottom: 8px;
	}

	.doctor-introduction h3 {
		margin-top: 0;
		font-size: 16px;
		color: #333;
	}

	.doctor-introduction p {
		margin: 5px 0;
		font-size: 14px;
		color: #555;
	}
</style>