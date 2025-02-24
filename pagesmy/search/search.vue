<template>
	<view class="content">
		<img class="bgc" src="https://pic.616pic.com/bg_w1180/00/05/12/JxRoOTCPwZ.jpg!/fw/1120" alt="" />
		<div class="doctor-card">
			<div class="doctor-info">
				<img src="https://pic.52112.com/180321/180321_31/9juXPI1wlL_small.jpg"
					alt="林逸轩" class="doctor-photo">
				<div class="doctor-details">
					<h2>林逸轩</h2>
					<p>资深中医专家</p>
					<div class="tags">
						<span class="tag">体质调理</span>
						<span class="tag">中医养生</span>
					</div>
				</div>
				<view class="money">
					<button class="consult-button">咨询</button>
					<p>￥199元起</p>
				</view>

			</div>
			<div class="doctor-introduction">
				<h3>医生介绍</h3>
				<p>职业背景:出身中医世家，从业12年，现任职于知名优质中医馆，临床经验丰富。</p>
				<p>咨询风格: 耐心细致，注重与患者的沟通，根据个体差异制定个性化诊疗与养生方案 。 </p>
				<p>擅长领域: 依据中医理论，通过望闻问切综合判断体质与健康状况，擅长调理气血亏虚、痰湿体质等多种体质问题，对常见疾病的中医辩证治疗见解独到。</p>
			</div>
		</div>
		<div class="doctor-card">
			<div class="doctor-info">
				<img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.nLt4YCG-WX4REBnA0vJkbwHaI1?rs=1&pid=ImgDetMain"
					alt="柳悦然" class="doctor-photo">
				<div class="doctor-details">
					<h2>柳悦然</h2>
					<p>主任中医师</p>
					<div class="tags">
						<span class="tag">妇科调理</span>
						<span class="tag">脾胃病治疗</span>
					</div>
				</div>
				<view class="money">
					<button class="consult-button">咨询</button>
					<p>￥350元起</p>
				</view>
		
			</div>
			<div class="doctor-introduction">
				<h3>医生介绍</h3>
				<p>职业背景: 毕业于北京中医药大学，在三甲医院及中医馆工作多年，积累了大量临床案例。</p>
				<p>咨询风格:严谨专业，关注患者身心健康，会从生活习惯等多方面给予全面建议。</p>
				<p>擅长领域:运用中医理论和方法，针对妇科月经不调、痛经等问题，以及脾胃虚弱、消化不良等病症有显著疗效，同时擅长中医康复理疗方案制定。</p>
			</div>
		</div>
		<div class="doctor-card">
			<div class="doctor-info">
				<img src="https://img95.699pic.com/photo/50168/2884.jpg_wh860.jpg"
					alt="徐墨轩" class="doctor-photo">
				<div class="doctor-details">
					<h2>徐墨轩</h2>
					<p>国医传承中医师</p>
					<div class="tags">
						<span class="tag">疑难杂症诊治</span>
						<span class="tag">经络调理</span>
					</div>
				</div>
				<view class="money">
					<button class="consult-button">咨询</button>
					<p>￥400元起</p>
				</view>
		
			</div>
			<div class="doctor-introduction">
				<h3>医生介绍</h3>
				<p>职业背景: 出身中医世家，传承数代中医医术，在中医界德高望重，于多家中医馆巡回坐诊。</p>
				<p>咨询风格: 沉稳睿智，以深厚的中医知识储备，为患者提供权威且有效的诊疗建议。</p>
				<p>擅长领域：对各类疑难杂症有独特的辩证思路和治疗方法，精通经络调理，善于根据患者症状精准配伍中药方剂。</p>
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