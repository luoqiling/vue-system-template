import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false })

// 白名单
const whiteList = ['/login']

router.beforeEach(async(to, from, next) => {
  NProgress.start()

  document.title = getPageTitle(to.meta.title)

  store.dispatch('app/close', to.meta.closed)

  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      if (store.getters.checked) {
        next()
      } else {
        try {
          await store.dispatch('user/getInfo')
          const accessRoutes = await store.dispatch('permission/generateRoutes')
          // console.log(accessRoutes)
          router.addRoutes(accessRoutes)
          next({ ...to, replace: true })
        } catch (error) {
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          // next(`/login?redirect=${to.path}`)
          next('/login')
          NProgress.done()
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      // next(`/login?redirect=${to.path}`)
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
