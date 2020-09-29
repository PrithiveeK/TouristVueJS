import { RAILS } from './apiProxy'

export default {
  data: {
    d: {
      title: 'Dashboard',
      route: '/',
      icon: 'dashboard-icon',
      show: true,
      isSelected: function (path) {
        return path === '/' || path.startsWith('/quotations')
      }
    },
    sc: {
      title: 'Super Company',
      route: '/super-company/details',
      icon: 'business-icon',
      show: false,
      isSelected: function (path) {
        return path.startsWith('/company')
      }
    },
    bga: {
      title: 'BGA',
      route: '/BGA/services',
      icon: 'business-icon',
      show: false,
      isSelected: function (path) {
        return path.startsWith('/BGA')
      }
    },
    aga: {
      title: 'AGA',
      route: '/AGA/services',
      icon: 'business-icon',
      show: false,
      isSelected: function (path) {
        return path.startsWith('/AGA')
      }
    },
    md: {
      title: 'Master Data',
      route: '/master-data/package',
      icon: 'master-data-icon',
      show: false,
      isSelected: function (path) {
        return path.startsWith('/master-data')
      }
    }
  },
  access: ['d'],
  getAccess: async function () {
    const res = await fetch(`${RAILS}/api/users/access`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'token': localStorage.getItem('liu')
      }
    })
    const data = await res.json()
    if (data.code === 200) {
      this.access = data.data
      this.data.sc.show = false
      this.data.bga.show = false
      this.data.aga.show = false
      this.data.md.show = false
      data.data.forEach(access => {
        this.data[access].show = true
      })
    }
  }
}
