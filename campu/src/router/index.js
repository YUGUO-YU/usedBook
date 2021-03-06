import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('../views/home/Home')
const Help = () => import('../views/help/Help')
const Login = () => import('../views/login/Login')
const Reg = () => import('../views/reg/Reg')
const Release = () => import('../views/release/Release')
const Car = () => import('../components/car/Car')
const WebWx = () => import('../components/websocket/WebSocket')
const Order = () => import('../components/order/order')
const routes = [
	{
		path: '',
		redirect: '/home'
	},
	{
		path: '/home',
		component: Home,
		meta: {
			title: '首页'
		},
	},
  {
    path: '/WebWx',
    component: WebWx,
    meta: {
      title: '聊天'
    }
  },
  {
    path: '/Car',
    component: Car,
    meta: {
      title: '收藏'
    }
  },
  {
    path: '/Order',
    component: Order,
    meta: {
      title: '订单'
    }
  },
	{
		path: '/help',
		component: Help,
		meta: {
			title: '我的订单'
		}
	},
	{
		path: '/login',
		component: Login,
		meta: {
			title: '登陆'
		}
	},
	{
		path: '/reg',
		component: Reg,
		meta: {
			title: '注册'
		}
	},
	{
		path: '/release',
		component: Release,
		meta: {
			title: '发布'
		}
	},
	{
		path: '/car',
		component: Car,
		meta: {
			title: '收藏'
		}
	}
]

const router = new Router({
	routes,
	mode: 'history',
	linkActiveClass: 'nav_active'
})

// router.beforeEach((to, from, next) => {
// 	document.title = to.matched[0].meta.title
// 	next()
// })

export default router
