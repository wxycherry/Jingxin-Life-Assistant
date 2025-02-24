const baseURL = 'http://localhost:8101'
import store from '../store/index.js'
// 1.非http开头需要拼接地址
// 2.请求超时
// 3.添加小程序端请求头标识
// 4.添加token请求头标识
//添加拦截器
const httpInterceptor = {
  //拦截前触发
  invoke(options) {
    // 1.非http开头需要拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 2.请求超时
    options.timeout = 6000
    // 3.添加小程序端请求头标识
    options.header = {
      ...options.header,
      'source-client': 'minapp',
    }
    // 4.添加token请求头标识
	// options.header.Authorization = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJ7XCJvcGVuaWRcIjpcInNkYXNkYVwifSIsIm9wZW5pZCI6InNkYXNkYSIsImV4cCI6MTcyNzE1NTYyNCwidXNlcmlkIjoxfQ.8B3yuml9l4zjwWSaYxeKEchWTl3HYvlaW6ArJz1F3fs'
	const token = store.state.token; 
	if(token){
		 options.header['Authorization'] =  token
	}
	    
  },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

// 请求函数
// 1.返回promise对象
// 2.请求成功
// 2.1提取核心数据 res.data
// 2.2添加类型，支持泛型
// 3.请求失败
// 3.1网络错误->提示用户换网络
// 3.2 401错误->清理用户信息，跳转到登录页
// 3.3其他错误->根据后端错误信息轻提示
export const http = (options) => {
  return new Promise((resolve, reject) => {
    uni.request({
      ...options,
      success(res) {
        // 2.1提取核心数据
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data)
        } else if (res.statusCode === 401) {
          // 3.2 401错误->清理用户信息，跳转到登录页
          reject(res)
        } else {
          // 3.3其他错误->根据后端错误信息轻提示
          uni.showToast({
            title: (res.data).msg || '请求错误',
            icon: 'none',
          })
          reject(res)
        }
      },
      //响应失败
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试',
        })
        reject(err)
      },
    })
  })
}
