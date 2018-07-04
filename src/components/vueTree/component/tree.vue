<template>
	<ul>
		<li v-for="(item,id) in dataList" :key="id">
			<div @click="openTree" class="item-title">{{item.data.menuName}}</div>
			<ul v-show="open">
				<items :dataList="item.childTreeNode"></items>
			</ul>
		</li>
	</ul>
</template>

<script>
	export default{
		name:'items',
		props:{
			dataList:Array
		},
		data (){
			return {
				open:false
			}
		},
		computed:{
			
		},
		methods:{
			openTree (){
				this.open = !this.open
			}
		}
	}
</script>

<style scoped="scoped">
	*{margin:0;padding: 0;}
	ul{
		margin-left: 20px;
	}
	li{
		background: indianred;
		list-style: none;
		line-height: 48px;
		cursor: pointer;
		color:#fff;
	}
	.item-title{
		width: 180px;
		border-bottom: 2px solid hsla(1,50%,50%,.7);
	}
</style>