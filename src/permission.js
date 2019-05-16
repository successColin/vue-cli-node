// import router from './router'

// router.beforeEach((to, from, next) => {
//   if (!sessionStorage['token'] && to.name !== 'login') { // determine if there has token
//     console.log(1)
//     next({path: '/login'})
//   } else if (!sessionStorage['token']  && to.name === 'login') {
//     console.log(2)
//     // 未登陆且要跳转的页面是登录页
//     next() // 跳转
//   }else if (sessionStorage['token'] && to.name === 'login') {
//     console.log(3)
//     // 已登录且要跳转的页面是登录页
//     next({
//       path: '/todo' // 跳转到homeName页
//     })
//   }
// })
