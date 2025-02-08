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
						<text class="scroll-list__goods-item__text">#{{index}}</text>
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
							<view class="username">1号任雅玲</view>
							<view class="date">2024年09月30日</view>
						</view>
					</view>
					<view class="tags">#情满金秋 健康常伴#</view>
					<view class="comment-content">
						伙伴们，金秋打卡活动还在继续！9月恰逢中秋佳节，我们见证了伙伴们自制健康美食的创意，以及团队聚会时的温馨美好场景！😋国庆来临…
					</view>
					<view class="actions">
						<view class="iconfont"><u-icon name="share-square" size="22"></u-icon> 67</view>
						<view class="iconfont"><u-icon name="chat" size="22"></u-icon> 3</view>
						<view class="iconfont">
							<u-rate activeIcon="heart-fill" inactiveIcon="heart" :count=1 v-model="value"></u-rate>️
							<p>14</p>
						</view>
					</view>
				</view>
				<view class="comment-section">
					<view class="comment-header">
						<img src="https://www.keaitupian.cn/cjpic/frombd/0/253/1152107840/119779555.jpg" alt="Avatar"
							class="avatar">
						<view>
							<view class="username">2号任雅玲</view>
							<view class="date">2024年09月30日</view>
						</view>
					</view>
					<view class="tags">#情满金秋 健康常伴#</view>
					<view class="comment-content">
						伙伴们，9月恰逢中秋佳节，我们见证了伙伴们自制健康美食的创意，以及团队聚会时的温馨美好场景！😋国庆来临…
					</view>
					<view class="actions">
						<view class="iconfont"><u-icon name="share-square" size="22"></u-icon> 67</view>
						<view class="iconfont"><u-icon name="chat" size="22"></u-icon> 3</view>
						<view class="iconfont">
							<u-rate activeIcon="heart-fill" inactiveIcon="heart" :count=1 v-model="value"></u-rate>️
							<p>14</p>
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
						thumb: "https://img.shetu66.com/2023/04/25/1682408628498684.png",
					},
					{
						thumb: "https://img.shetu66.com/2023/04/25/1682408628498684.png",
					},
					{
						thumb: "https://img.shetu66.com/2023/04/25/1682408628498684.png",
					},
					{
						thumb: "https://img.shetu66.com/2023/04/25/1682408628498684.png",
					},
					{
						thumb: "https://img.shetu66.com/2023/04/25/1682408628498684.png",
					},
					{
						thumb: "https://img.shetu66.com/2023/04/25/1682408628498684.png",
					},
					{
						thumb: "https://img.shetu66.com/2023/04/25/1682408628498684.png",
					},
					{
						thumb: "https://img.shetu66.com/2023/04/25/1682408628498684.png",
					},
					{
						thumb: "https://img.shetu66.com/2023/04/25/1682408628498684.png",
					},
					{
						thumb: "https://img.shetu66.com/2023/04/25/1682408628498684.png",
					},
					{
						thumb: "https://img.shetu66.com/2023/04/25/1682408628498684.png",
					},
					{
						thumb: "https://img.shetu66.com/2023/04/25/1682408628498684.png",
					},
					{
						thumb: "https://img.shetu66.com/2023/04/25/1682408628498684.png",
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
</style>