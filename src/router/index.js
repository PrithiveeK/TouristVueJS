import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Dashboard from '@/components/Dashboard'
import MasterList from '@/components/MasterList'
import SuperCompany from '@/components/SuperCompany'
import AllQuotations from '@/components/AllQuotations'
import BGA from '@/components/BGA'
import NewQuotation from '@/components/BGA/NewQuotation'
import NewServices from '@/components/AGA/NewServices'
import NewSuppliers from '@/components/AGA/NewSuppliers'
import AGA from '@/components/AGA'
import Access from '@/store/NavBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
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
      component: Home,
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'master-data/:dataContent',
          beforeEnter: (to, from, next) => {
            if (Access.access.includes('md')) next()
            else next({path: from.path})
          },
          name: 'MasterData',
          component: MasterList,
          props: true
        },
        {
          path: 'super-company/:dataContent',
          beforeEnter: (to, from, next) => {
            if (Access.access.includes('sc')) next()
            else next({path: from.path})
          },
          name: 'SuperCompany',
          component: SuperCompany,
          props: true
        },
        {
          path: 'quotations/:dataContent',
          beforeEnter: (to, from, next) => {
            if (Access.access.includes('q')) next()
            else next({path: from.path})
          },
          name: 'Quotations',
          component: AllQuotations,
          props: true
        },
        {
          path: 'AGA/:dataContent',
          beforeEnter: (to, from, next) => {
            if (Access.access.includes('aga')) next()
            else next({path: from.path})
          },
          name: 'AGA',
          component: AGA,
          props: true
        },
        {
          path: 'AGA/services/add',
          beforeEnter: (to, from, next) => {
            if (Access.access.includes('aga')) next()
            else next({path: from.path})
          },
          name: 'AddServices',
          component: NewServices
        },
        {
          path: 'AGA/placeholder_services/add',
          beforeEnter: (to, from, next) => {
            if (Access.access.includes('aga')) next()
            else next({path: from.path})
          },
          name: 'AddPlaceholderServices',
          component: NewServices
        },
        {
          path: 'AGA/suppliers/add',
          beforeEnter: (to, from, next) => {
            if (Access.access.includes('aga')) next()
            else next({path: from.path})
          },
          name: 'AddSupplier',
          component: NewSuppliers
        },
        {
          path: 'BGA/:dataContent',
          beforeEnter: (to, from, next) => {
            if (Access.access.includes('bga')) next()
            else next({path: from.path})
          },
          name: 'BGA',
          component: BGA,
          props: true
        },
        {
          path: 'BGA/quotations/add',
          beforeEnter: (to, from, next) => {
            if (Access.access.includes('bga')) next()
            else next({path: from.path})
          },
          name: 'BGANew',
          component: NewQuotation,
          props: true
        }
      ]
    }
  ]
})
