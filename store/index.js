import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		userInfo: {
			avatar: '', // 用户头像
			userName: '', // 用户姓名
			studentId: '', //学号
			phone: '', //电话
			nickName: '', // 用户名
			deptName: ''
		},
		token: ''
	},
	mutations: {
		setUserInfo(state, userInfo) {
			state.userInfo = {
				...state.userInfo,
				...userInfo
			};
		},
		SET_TOKEN(state, token) {
			state.token = token;
		}
	},
	actions: {
		fetchUserInfo({
			commit
		}) {
			uni.getStorage({
				key: 'userInfo',
				success: (res) => {
					commit('setUserInfo', res.data);
				},
				fail: () => {
					commit('setUserInfo', {
						avatar: '',
						userName: '',
						studentId: '',
						phone: '',
						nickName: '',
						deptName: ''
					});
				}
			});
		},
		fetchToken({
			commit
		}) {
			uni.getStorage({
				key: 'token',
				success: (res) => {
					commit('SET_TOKEN', res.data);
				},
				fail: () => {
					commit('SET_TOKEN', ''); // 设置为空字符串以确保状态的一致性
				}
			});
		},
		saveUserInfo({
			commit
		}, userInfo) {
			uni.setStorage({
				key: 'userInfo',
				data: userInfo
			});
			commit('setUserInfo', userInfo);
		},
		saveToken({
			commit
		}, token) {
			commit('SET_TOKEN', token);
		}
	}
});

export default store;