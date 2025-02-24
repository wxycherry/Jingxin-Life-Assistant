<template>
	<view class="content">
		<view class="top">
			<img class="touxiang"
				src="https://tse3-mm.cn.bing.net/th/id/OIP-C.K60AgC9XXNZdKtiUSJ3poAAAAA?w=213&h=213&c=7&r=0&o=5&dpr=1.5&pid=1.7"
				alt="" />
			<view class="intro">
				<p class="name">超级飞侠</p>
				<p class="number">17200863742</p>
			</view>
		</view>
		<view class="bottom">
			<view class="dongtai">
				<view class="bgc1">
					<view class="hot-topic">动态</view>
				</view>
				<u-line color="#959595" ></u-line>
				<view class="icon">
					<u-grid :border="false" @click="click">
						<u-grid-item v-for="(baseListItem,baseListIndex) in list1" :key="baseListIndex">
							<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="baseListItem.name" :size="22"></u-icon>
							<text class="grid-text">{{baseListItem.title}}</text>
						</u-grid-item>
					</u-grid>
					<u-toast ref="uToast" />
				</view>
			</view>
			<view class="dongtai jiankang">
				<view class="bgc1">
					<view class="hot-topic">健康</view>
				</view>
				<u-line color="#959595" ></u-line>
				<view class="icon">
					<u-grid :border="false" col="4">
						<u-grid-item @click="handleItemClick(listItem)" v-for="(listItem,listIndex) in list" :key="listIndex">
							<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="listItem.name" :size="22"></u-icon>
							<text class="grid-text">{{listItem.title}}</text>
						</u-grid-item>
					</u-grid>
					<u-toast ref="uToast" />
				</view>
			</view>
			<view class="dongtai yijian">
				<view class="bgc">
					<view class="hot-topic">意见/反馈</view>
				</view>
				<u-line color="#959595" ></u-line>
				<view class="icon">
					<u-grid :border="false"  col="2">
						<u-grid-item @click="handleItemClick(baseListItem)" v-for="(baseListItem,baseListIndex) in list2" :key="baseListIndex">
							<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="baseListItem.name" :size="22"></u-icon>
							<text class="grid-text">{{baseListItem.title}}</text>
						</u-grid-item>
					</u-grid>
					<u-toast ref="uToast" />
				</view>
			</view>
			<view class="dongtai zhanghao">
				<view class="bgc">
					<view class="hot-topic">账号管理</view>
				</view>
				<u-line color="#959595" ></u-line>
				<view class="icon">
					<u-grid :border="false" col="2">
						<u-grid-item v-for="(baseListItem,baseListIndex) in list3" :key="baseListIndex">
							<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="baseListItem.name" :size="22"></u-icon>
							<text class="grid-text">{{baseListItem.title}}</text>
						</u-grid-item>
					</u-grid>
					<u-toast ref="uToast" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
	  data() {
	    return {
	      list: [
	        {
	          name: 'file-text',
	          title: '健康报告',
	          url: '' 
	        },
	        {
	          name: 'checkmark-circle',
	          title: '健康打卡',
	          url: '' 
	        },
	        {
	          name: 'bell',
	          title: '提醒设置',
	          url: '' 
	        },
	        {
	          name: 'calendar',
	          title: '健康手册',
	          url: '' 
	        },
	        {
	          name: 'kefu-ermai',
	          title: '中医问诊',
	          url: '/pagesmy/search/search' 
	        },
	      ],
	      list1: [
	        {
	          name: '0',
	          title: '我的动态',
	          url: '' 
	        },
	        {
	          name: '0',
	          title: '喜欢',
	          url: '' ,
			  },
	        {
	          name: '0',
	          title: '收藏',
	          url: '' 
	        },
	      ],
	      list2: [
	        {
	          name: 'server-man',
	          title: '联系客服',
	          url: '' 
	        },
	        {
	          name: 'question-circle',
	          title: '意见反馈',
	          url: '/pagesmy/feedback/feedback' 
	        },
	      ],
	      list3: [
	        {
	          name: 'coupon',
	          title: '修改密码',
	          url: '' 
	        },
	        {
	          name: 'close-circle',
	          title: '退出登录',
	          url: '' 
	        },
	      ],
	    }
	  },
	  methods: {
	    handleItemClick(item) {
	      if (item.url) {
	        uni.navigateTo({
	          url: item.url
	        });
	      }
	    }
	  }
	}
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

	.top {
		width: 100%;
		height: 230px;
		/* background: linear-gradient(to right, #0162ff, #00FFFF); */
		background-image: url(https://img.tukuppt.com/ad_preview/00/15/19/5e783c397a891.jpg!/fw/980);
		border-radius: 0 0 40px 40px;
		display: flex;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.touxiang {
		width: 55px;
		height: 55px;
		border-radius: 50%;
		margin-top: 90px;
		margin-left: 30px;
		margin-right: 15px;
	}

	.intro {
		margin-top: 90px;
	}

	.name {
		color: white;
		font-size: 20px;
		font-weight: bold;
	}

	.number {
		color: white;
		margin-top: 5px;
		font-size: 15px;
	}

	.bottom {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 15px;
	}

	.dongtai {
		width: 90%;
		/* height: 200px; */
		background-color: white;
		border-radius: 15px;
		margin-top: 15px;
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

	.bgc1 {
		width: 70px;
		height: 10px;
		background-color: #fde3b0;
		position: relative;
		margin-top: 25px;
		margin-bottom: 20px;
		margin-left: 15px;
	}

	.hot-topic {
		font-weight: bold;
		font-size: 22px;
		position: absolute;
		left: 10px;
		bottom: -6px;
	}
	.icon{
		margin: 15px;
	}
</style>