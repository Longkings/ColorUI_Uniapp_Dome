import Vue from 'vue'
import Vuex from 'vuex'
import jwtdecode from "jwt-decode"

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		isMember: false, //是否是会员
		uid: null,
		token: null
	},
	mutations: {
		login(state, result) {
			state.hasLogin = true;
			state.uid = result.id;
			state.token = result.accessToken;
			try {
				const loginPayload = jwtdecode(result.accessToken);
				const role = loginPayload['https://hasura.io/jwt/claims']['x-hasura-default-role'];
				state.isMember = role == "company_member";
			} catch (e) {
				console.log(e);
			}
			uni.setStorageSync('uid', result.id)
			uni.setStorageSync('token', result.accessToken)
			uni.$emit("login")
		},
		logout(state) {
			state.hasLogin = false
			state.uid = null
			state.token = null
			uni.clearStorage()
			uni.$emit("logout")
		}
	}
})

export default store
