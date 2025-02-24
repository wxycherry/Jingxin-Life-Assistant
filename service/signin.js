import {http} from "../utils/http.js";
//密码登录
export function signinAPI(params) {  
  return http({  
    method: 'POST',  
    url: '/api/user/logint',  
	data:params,
	})
}
//用户注册
export function registerAPI(params) {  
  return http({  
    method: 'POST',  
    url: '/api/user/register',  
	data:params,
	})
}
