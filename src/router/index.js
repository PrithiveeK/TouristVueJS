import Vue from 'vue'
import Router from 'vue-router'
import Access from '@/store/NavBar'

Vue.use(Router)

function loadComponent (component) {
  return () => import(`@/components/${component}`)
}

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: loadComponent('Login'),
      beforeEnter: (to, from, next) => {
        localStorage.removeItem('liu')
        next()
      }
    },
    {
      path: '/',
      beforeEnter: async (to, from, next) => {
        if (to.path === '/login') next()
        fetch('/go/api/', {
          method: 'get',
          headers: {
            'token': localStorage.getItem('liu')
          }
        }).then(res => {
          if (res.status === 200) next()
          else next({name: 'Login'})
        }).catch(err => {
          console.log(err)
          next({name: 'Login'})
        })
      },
      component: loadComponent('Home'),
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: loadComponent('Dashboard')
        },
        {
          path: 'master-data/:dataContent',
          beforeEnter: (to, from, next) => {
            if (Access.access.includes('md')) next()
            else next({path: from.path})
          },
          name: 'MasterData',
          component: loadComponent('MasterList'),
          props: true
        },
        {
          path: 'super-company/:dataContent',
          beforeEnter: (to, from, next) => {
            if (Access.access.includes('sc')) next()
            else next({path: from.path})
          },
          name: 'SuperCompany',
          component: loadComponent('SuperCompany'),
          props: true
        },
        {
          path: 'quotations/:dataContent',
          beforeEnter: (to, from, next) => {
            if (Access.access.includes('q')) next()
            else next({path: from.path})
          },
          name: 'Quotations',
          component: loadComponent('AllQuotations'),
          props: true
        },
        {
          path: 'AGA/:dataContent',
          beforeEnter: (to, from, next) => {
            if (Access.access.includes('aga')) next()
            else next({path: from.path})
          },
          name: 'AGA',
          component: loadComponent('AGA'),
          props: true
        },
        {
          path: 'AGA/services/add',
          beforeEnter: (to, from, next) => {
            if (Access.access.includes('aga')) next()
            else next({path: from.path})
          },
          name: 'AddServices',
          component: loadComponent('AGA/NewServices')
        },
        {
          path: 'AGA/placeholder_services/add',
          beforeEnter: (to, from, next) => {
            if (Access.access.includes('aga')) next()
            else next({path: from.path})
          },
          name: 'AddPlaceholderServices',
          component: loadComponent('AGA/NewServices')
        },
        {
          path: 'AGA/suppliers/add',
          beforeEnter: (to, from, next) => {
            if (Access.access.includes('aga')) next()
            else next({path: from.path})
          },
          name: 'AddSupplier',
          component: loadComponent('AGA/NewSuppliers')
        },
        {
          path: 'BGA/:dataContent',
          beforeEnter: (to, from, next) => {
            if (Access.access.includes('bga')) next()
            else next({path: from.path})
          },
          name: 'BGA',
          component: loadComponent('BGA'),
          props: true
        },
        {
          path: 'BGA/quotations/add',
          beforeEnter: (to, from, next) => {
            if (Access.access.includes('bga')) next()
            else next({path: from.path})
          },
          name: 'BGANew',
          component: loadComponent('BGA/NewQuotation'),
          props: true
        }
      ]
    }
  ]
})
