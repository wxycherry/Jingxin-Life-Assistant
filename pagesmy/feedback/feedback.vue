<template>
	<view class="content">
		<!-- 问题描述 -->
		<view class="top">
			<p class="title">问题描述（必填）</p>
			<u--textarea v-model="value" maxlength="300" height="140px" count placeholder="请填写15字以上的描述,以便我们更好地为您提供帮助~"
				border="none"></u--textarea>
		</view>
		<!-- 上传照片 -->
		<view class="bottom">
			<p class="title">上传图片（最多3张）</p>
			<view class="upload">
				<u-upload
			    :fileList="fileList1"
				:previewFullImage="true"
			    @afterRead="afterRead"
			    @delete="deletePic"
			    name="1"
			    multiple
			    :maxCount="3"
			  ></u-upload>
			</view>
			 
		</view>
		<button class="btn">提交</button>
	</view>
</template>

<script>
  export default {
    data() {
      return {
		  value:'',
        fileList1: [],
      };
    },
    methods: {
      // 删除图片
      deletePic(event) {
        this[`fileList${event.name}`].splice(event.index, 1);
      },
      // 新增图片
      async afterRead(event) {
        // 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
        let lists = [].concat(event.file);
        let fileListLen = this[`fileList${event.name}`].length;
        lists.map((item) => {
          this[`fileList${event.name}`].push({
            ...item,
            status: "uploading",
            message: "上传中",
          });
        });
        for (let i = 0; i < lists.length; i++) {
          const result = await this.uploadFilePromise(lists[i].url);
          let item = this[`fileList${event.name}`][fileListLen];
          this[`fileList${event.name}`].splice(
            fileListLen,
            1,
            Object.assign(item, {
              status: "success",
              message: "",
              url: result,
            })
          );
          fileListLen++;
        }
      },
      uploadFilePromise(url) {
        return new Promise((resolve, reject) => {
          let a = uni.uploadFile({
            url: "http://192.168.2.21:7001/upload", // 仅为示例，非真实的接口地址
            filePath: url,
            name: "file",
            formData: {
              user: "test",
            },
            success: (res) => {
              setTimeout(() => {
                resolve(res.data.data);
              }, 1000);
            },
          });
        });
      },
    },
  };
</script>

<style>
	.content {
		background-color: #f2f2f4;
		width: 100%;
		height: 750px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.top {
		width: 90%;
		/* height: 200px; */
		background-color: white;
		border-radius: 15px;
		margin: 20px;
	}

	.bottom {
		width: 90%;
		/* height: 200px; */
		background-color: white;
		border-radius: 15px;
	}

	.btn {
		width: 90%;
		background-color: #1B77FB;
		color: white;
		margin-top: 190px;
	}

	.title {
		font-size: 15px;
		font-weight: 600;
		margin: 15px;
	}
	.upload{
		margin-left: 15px;
	}
</style>