import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VueTree from '@/components/vueTree/vue-tree'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/'
	}, {
		path: '/tree',
		name: 'VueTree',
		component: VueTree
	}]
})