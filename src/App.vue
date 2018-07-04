<template>
	<div id="app">
		<img src="./assets/logo.png">
		<ul class="nav">
			<li>
				<router-link to="/">首页</router-link>
			</li>
			<li>
				<router-link to="/tree">vue树组件</router-link>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'App',
		mounted: function() {
			this.$router.push('/');
		}
	}
</script>

<style scoped="scoped">
	*{
		margin:0;
		padding: 0;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
		display: inline-block;
		padding: 0 40px;
		background: indianred;
	}
	.nav{
		display: flex;
		width: 100%;
		padding: 10px 0;
	}
	.nav>li{
		list-style: none;
		flex: 1;
	}
	.nav>li>a{
		color:yellow
	}
</style>