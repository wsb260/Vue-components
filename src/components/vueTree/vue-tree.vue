<template>
	<items :dataList="dataList"></items>
</template>

<script>
	import items from '@/components/vueTree/component/tree';
	import axios from 'axios'

	export default {
		name: 'tree',
		components: {
			items
		},
		data() {
			return {
				dataList: []
			}
		},
		methods:{
			getData:function(){
				axios.get('/static/tree.json').then(this.setData);
			},
			setData:function(res){
				res = eval('(' + res.data + ')');
				this.dataList = res;
			}
		},
		mounted:function(){
			this.getData();
		}
	}
</script>

<style>

</style>