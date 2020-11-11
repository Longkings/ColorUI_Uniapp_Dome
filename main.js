import Vue from 'vue'
import App from './App'

// 全局变量
import store from './store'
Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

//colorUI引入
import cuCustom from '@/components/colorui/components/cu-custom.vue'
Vue.component('cu-custom', cuCustom)

// 日期函数
import moment from 'moment'
Vue.prototype.$moment = moment; //赋值使用

// 下拉分页刷新组件
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)

const app = new Vue({
	...App
})
app.$mount()
