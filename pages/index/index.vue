<template>
  <view class="content">
    <view class="top">
      <p class="title">睛心生活助手</p>
    </view>
    <view class="middle">
      <camera
        v-if="cameraAuthorized"
        id="myCamera"
        device-position="front"
        flash="off"
        binderror="cameraError"
        class="camera"
        :style="{ width: '280px', height: '280px' }"
      ></camera>
      <view v-else class="camera-skeleton">
        <view class="skeleton-circle">
			<img class="icon" src="../../static/ren.png" alt="" />
		</view>
      </view>
      <button class="btn" @click="takePhoto">开始识别</button>
    </view>
    <view class="bottom">
      <p class="history">查看历史报告</p>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: '标题',
      photoUrl: '', // 用于存储拍照后的图片路径
      cameraAuthorized: false, // 是否授权使用摄像头
    };
  },
  methods: {
    // 检查摄像头权限
    checkCameraAuthorization() {
      return new Promise((resolve) => {
        wx.getSetting({
          success: (res) => {
            resolve(!!res.authSetting['scope.camera']);
          }
        });
      });
    },
    // 请求摄像头权限
    requestCameraPermission() {
      return new Promise((resolve) => {
        wx.authorize({
          scope: 'scope.camera',
          success() {
            resolve(true);
          },
          fail() {
            resolve(false);
          }
        });
      });
    },
    // 引导用户前往设置页面
    guideToSettings() {
      wx.showModal({
        title: '摄像头权限未开启',
        content: '请前往设置页面开启摄像头权限',
        showCancel: false,
        success: () => {
          wx.openSetting({
            success: (settingdata) => {
              if (settingdata.authSetting['scope.camera']) {
                this.cameraAuthorized = true;
                wx.showToast({
                  title: '摄像头权限已开启',
                  icon: 'success'
                });
              } else {
                wx.showToast({
                  title: '摄像头权限未开启，请手动开启',
                  icon: 'none'
                });
              }
            }
          });
        }
      });
    },
    // 拍照
    takePhoto() {
      this.checkCameraAuthorization().then((authorized) => {
        if (!authorized) {
          this.requestCameraPermission().then((granted) => {
            if (!granted) {
              this.guideToSettings();
            } else {
              this.cameraAuthorized = true;
            }
          });
        } else {
          const ctx = wx.createCameraContext();
          ctx.takePhoto({
            quality: 'high',
            success: (res) => {
              this.photoUrl = res.tempImagePath;
              wx.showToast({
                title: '拍照成功，正在识别...',
                icon: 'loading'
              });
              this.recognizeFace(this.photoUrl); // 调用人脸识别
            },
            fail: (err) => {
              console.error('拍照失败:', err);
              wx.showToast({
                title: '拍照失败，请重试',
                icon: 'none'
              });
            }
          });
        }
      });
    },
    // 人脸识别
    recognizeFace(photoUrl) {
      const uploadTask = wx.uploadFile({
        url: 'https://your-server-url.com/recognize', // 替换为你的服务器地址
        filePath: photoUrl,
        name: 'file',
        success: (uploadRes) => {
          const data = JSON.parse(uploadRes.data);
          if (data.success) {
            wx.showToast({
              title: '识别成功',
              icon: 'success'
            });
            // 处理识别结果
            console.log('识别结果:', data.result);
          } else {
            wx.showToast({
              title: '识别失败',
              icon: 'none'
            });
          }
        },
        fail: (err) => {
          console.error('上传失败:', err);
          wx.showToast({
            title: '上传失败，请检查网络或服务器地址',
            icon: 'none'
          });
        }
      });

      uploadTask.onProgressUpdate((res) => {
        console.log('上传进度:', res.progress);
      });
    },
    // 摄像头错误处理
    cameraError(e) {
      console.error('摄像头错误:', e);
      wx.showToast({
        title: '摄像头权限未开启，请检查设置',
        icon: 'none'
      });
    }
  },
  mounted() {
    this.checkCameraAuthorization().then((authorized) => {
      this.cameraAuthorized = authorized;
    });
  }
};
</script>

<style>
.content {
  width: 100%;
  height: 650px;
  display: flex;
  flex-direction: column;
}

.top {
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 20px;
}

.middle {
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.camera {
  margin-top: -60px;
  width: 280px;
  height: 280px;
  border-radius: 50%; /* 设置为圆形 */
  border: 5px solid #3c9cFF; /* 添加蓝色外边框 */
  overflow: hidden; /* 确保内容不会溢出 */
}
/* 骨架屏 */
.camera-skeleton {
  margin-top: -60px;
  width: 280px;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 骨架屏 */
.skeleton-circle {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  border: 5px solid #3c9cFF;
  background-color: #f1fcff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon{
	width: 80%;
	height: 70%;
	margin-bottom: 20px;
}
.btn {
  width: 80%;
  background-color: #3c9cFF;
  color: white;
  margin-top: 20px;
}

.btn:active {
  background-color: #227aff;
}

.bottom {
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.history {
  color: #aaaaaa;
}

.history:active {
  color: #3c9cFF;
}
</style>