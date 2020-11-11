<template>
	<view>
		<button class="bg-blue cu-btn sm">登录</button>
		{{$moment().format('YYYY-MM-DD')}}
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				 
			};
		},
		computed: {
			...mapState(['hasLogin', 'uid', 'isMember'])
		},
		methods: {
			...mapMutations(['login']),
		}
	}
</script>

<style>
 
</style>
