import {http} from "../utils/http.js";
//人脸识别
export function chatimageAPI(params) {  
  return http({  
    method: 'POST',  
    url: '/api/chat/image',  
	data:params,
	})
}