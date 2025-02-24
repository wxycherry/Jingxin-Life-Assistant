<template>
	<view class="content">
		<!-- 上部 -->
		<view class="top">
			<view class="bgc">
				<view class="hot-topic">热门话题</view>
			</view>
			<view class="scroll">
				<u-scroll-list>
					<view v-for="(item, index) in list" :key="index">
						<image class="images" :src="item.thumb"></image>
						<text class="scroll-list__goods-item__text">#{{item.index}}</text>
					</view>
				</u-scroll-list>
			</view>
		</view>
		<!-- 下部 -->
		<view class="bottom">
			<!-- 上面的标题 -->
			<view class="title">
				<view class="bgc1" :class="{ active: activeTab === 'all' }" @click="setActiveTab('all')">
					<view class="hot-topic1">全部</view>
				</view>
				<view class="bgc1" :class="{ active: activeTab === 'hot' }" @click="setActiveTab('hot')">
					<view class="hot-topic1">热门</view>
				</view>
			</view>
			<!-- 评论内容 -->
			<view class="main">
				<view class="comment-section">
					<view class="comment-header">
						<img src="https://www.keaitupian.cn/cjpic/frombd/0/253/1152107840/119779555.jpg" alt="Avatar"
							class="avatar">
						<view>
							<view class="username">健康小助手</view>
							<view class="date">2025 年 2 月 20 日</view>
						</view>
					</view>
					<view class="tags">#健康知识推送新内容#</view>
					<view class="comment-content">
						伙伴们，最新健康知识来咯！春天到啦，万物复苏，也是养生的好时节。这次推送为你准备了春季养肝小知识、应对过敏的实用技巧，还有能让心情跟春日一样明媚的心理调适方法，助你活力满满地迎接春天，赶紧去看看专属你的健康推送吧！😋
					</view>
					<view class="actions">
						<view class="iconfont"><u-icon name="share-square" size="22"></u-icon> 92</view>
						<view class="iconfont"><u-icon name="chat" size="22"></u-icon> 10</view>
						<view class="iconfont">
							<u-rate activeIcon="heart-fill" inactiveIcon="heart" :count=1 v-model="value"></u-rate>️
							<p>18</p>
						</view>
					</view>
				</view>
				<view class="comment-section">
					<view class="comment-header">
						<img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.MqovI15z6O3xqrbcjHUm4gAAAA?rs=1&pid=ImgDetMain" alt="Avatar"
							class="avatar">
						<view>
							<view class="username">营养师李老师</view>
							<view class="date">2025 年 2 月 12 日</view>
						</view>
					</view>
					<view class="tags">#社区专业答疑时刻#</view>
					<view class="comment-content">
						在社区看到大家关于饮食营养的提问啦，已为大家详细解答。无论是减脂期的饮食困惑，还是增肌时的营养需求，都能在回复里找到答案，希望能帮到大家 ！有新问题也欢迎随时提问哦 。
					</view>
					<view class="actions">
						<view class="iconfont"><u-icon name="share-square" size="22"></u-icon> 65</view>
						<view class="iconfont"><u-icon name="chat" size="22"></u-icon>12</view>
						<view class="iconfont">
							<u-rate activeIcon="heart-fill" inactiveIcon="heart" :count=1 v-model="value"></u-rate>️
							<p>10</p>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="plus">
			<navigator url="/pagescommunity/publish/publish">
				<u-icon name="plus-circle-fill" color="#2979ff" size="80"></u-icon>
			</navigator>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: 0,
				list: [{
						thumb: "https://bpic.588ku.com/element_origin_min_pic/20/04/30/9079752da961c5f759b48da90ac23cb0.jpg",
						index:"如何有效缓.."
					},
					{
						thumb: "https://ts1.cn.mm.bing.net/th/id/R-C.027ee1ee0fa2ccc7d6bd69f859630e11?rik=hz6CzCE2%2bBSu7g&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50112%2f1369.jpg_wh1200.jpg&ehk=ip4ohXYPWc%2bKXvlpCA9NPaRr89OxrmyjFl4oamx4i4Q%3d&risl=&pid=ImgRaw&r=0",
						index:"春季健康饮..."
					},
					{
						thumb: "https://tse3-mm.cn.bing.net/th/id/OIP-C.FMqz3oMyh9Morj0nk1dhxQHaE7?rs=1&pid=ImgDetMain",
						index:"适合不同年..."
					},
					{
						thumb: "https://ts1.cn.mm.bing.net/th/id/R-C.ead9365064fcc155260f6e4961780982?rik=KjaB3nBvf3uYfQ&riu=http%3a%2f%2fpic.616pic.com%2fys_bnew_img%2f00%2f02%2f20%2fIh4iHhL1wz.jpg&ehk=hapT9F459hKTVatEI5G0NUnnBjUC1FscrQjUWZpRpCw%3d&risl=&pid=ImgRaw&r=0",
						index:"社区健康经..."
					},
					{
						thumb: "https://img95.699pic.com/photo/50123/8720.jpg_wh860.jpg",
						index:"长时间用眼..."
					},
					{
						thumb: "https://tse2-mm.cn.bing.net/th/id/OIP-C.5qWNuscfHvhQH6W2ex1l0AAAAA?rs=1&pid=ImgDetMain",
						index:"传统养生功..."
					},
					{
						thumb: "https://bpic.588ku.com/element_pic/23/04/24/aac28e43143a097799732753f8195ce1.png!/fw/300/unsharp/true",
						index:"21 天健康习惯..."
					},
					
					
				],
				activeTab: 'all', // 默认选中全部
			};
		},
		methods: {
			setActiveTab(tab) {
				this.activeTab = tab;
			},
		},
	};
</script>

<style>
	.content {
		background-color: #f2f2f4;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.plus {
		position: fixed;
		right: 0;
		bottom: 50px;
		z-index: 999;
	}

	.top {
		width: 90%;
		height: 30%;
		background-color: white;
		margin: 20px;
		border-radius: 15px;
	}

	.bgc {
		width: 110px;
		height: 10px;
		background-color: #fde3b0;
		position: relative;
		margin-top: 25px;
		margin-bottom: 20px;
		margin-left: 15px;
	}

	.scroll {
		width: 95%;
		margin: 12px;
	}

	.hot-topic {
		font-weight: bold;
		font-size: 22px;
		position: absolute;
		left: 10px;
		bottom: -6px;
	}

	.images {
		width: 90px;
		height: 90px;
		border-radius: 10px;
		margin: 6px;
	}

	.bottom {
		width: 90%;
		height: 70%;
		background-color: white;
		border-radius: 15px;
		margin-bottom: 10px;
	}

	.bgc1 {
		width: 65px;
		height: 10px;
		/* background-color: #fde3b0; */
		position: relative;
		margin-top: 25px;
		margin-bottom: 20px;
		margin-left: 15px;
	}

	.title {
		display: flex;
	}

	.hot-topic1 {
		font-weight: 500;
		font-size: 22px;
		position: absolute;
		left: 10px;
		bottom: -6px;
		color: #747474;
	}

	.active {
		background-color: #fde3b0 !important;
	}

	.main {
		width: 90%;
		/* height: 800px; */
		/* background-color: red; */
		margin-left: 15px;
	}

	.comment-section {
		margin-top: 10px;
		width: 90%;
		padding: 20px;
		background-color: #f9f9f9;
		border-radius: 10px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	}

	.comment-header {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}

	.avatar {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		margin-right: 10px;
	}

	.username {
		font-size: 18px;
		font-weight: bold;
	}

	.date {
		margin-left: auto;
		color: #888;
		font-size: 14px;
	}

	.tags {
		margin-bottom: 10px;
		font-weight: bold;
		color: #1B77FB;
	}

	.comment-content {
		color: #333;
		font-size: 16px;
		line-height: 1.6;
	}

	.actions {
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
		font-size: 14px;
		color: #555;
	}

	.actions div {
		text-align: center;
	}

	.actions div:not(:last-child) {
		margin-right: 10px;
	}

	.iconfont {
		display: flex;
		flex-direction: row;
	}
	.scroll-list__goods-item__text{
		font-size: 13px;
		color: #96c7fb;
	}
</style>