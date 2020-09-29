import MasterList from './MasterList'
import { Branch, Details } from './SuperCompany'
import { AGAServices } from './AGA'

export default {
  is_sales: {
    getData: async function () {
      return {
        t: 'title',
        v: 'value',
        data: [
          {title: 'Yes', value: true},
          {title: 'No', value: false}
        ]
      }
    }
  },
  continent_id: {
    getData: async function () {
      if (MasterList.location.data.types[0].rows.length < 1) {
        await MasterList.location.fetchData(0)
      }
      return {
        t: 'name',
        v: 'id',
        data: MasterList.location.data.types[0].rows
      }
    }
  },
  country_id: {
    getData: async function () {
      if (MasterList.location.data.types[1].rows.length < 1) {
        await MasterList.location.fetchData(1)
      }
      return {
        t: 'name',
        v: 'id',
        data: MasterList.location.data.types[1].rows
      }
    }
  },
  city_id: {
    getData: async function () {
      if (MasterList.location.data.types[2].rows.length < 1) {
        await MasterList.location.fetchData(2)
      }
      return {
        t: 'name',
        v: 'id',
        d: 'country_id',
        data: MasterList.location.data.types[2].rows
      }
    }
  },
  service_type_id: {
    getData: async function () {
      if (MasterList.services.data.types[0].rows.length < 1) {
        await MasterList.services.fetchData(0)
      }
      return {
        t: 'name',
        v: 'id',
        data: MasterList.services.data.types[0].rows
      }
    }
  },
  from_market_id: {
    getData: async function () {
      if (MasterList.location.data.types[4].rows.length < 1) {
        await MasterList.location.fetchData(4)
      }
      return {
        t: 'name',
        v: 'id',
        data: MasterList.location.data.types[4].rows
      }
    }
  },
  to_market_id: {
    getData: async function () {
      if (this.data.length > 0) return
      if (MasterList.location.data.types[4].rows.length < 1) {
        await MasterList.location.fetchData(4)
      }
      return {
        t: 'name',
        v: 'id',
        data: MasterList.location.data.types[4].rows
      }
    }
  },
  master_chain_id: {
    getData: async function () {
      if (MasterList.package.data.types[10].rows.length < 1) {
        await MasterList.package.fetchData(10)
      }
      return {
        t: 'name',
        v: 'id',
        data: MasterList.package.data.types[10].rows
      }
    }
  },
  chain_id: {
    getData: async function () {
      if (MasterList.package.data.types[11].rows.length < 1) {
        await MasterList.package.fetchData(11)
      }
      return {
        t: 'name',
        v: 'id',
        data: MasterList.package.data.types[11].rows
      }
    }
  },
  hotdate_difficulty_id: {
    getData: async function () {
      if (MasterList.location.data.types[7].rows.length < 1) {
        await MasterList.location.fetchData(7)
      }
      return {
        t: 'name',
        v: 'id',
        data: MasterList.location.data.types[7].rows
      }
    }
  },
  remark_type: {
    getData: async function () {
      return {
        t: 'value',
        v: 'value',
        data: [
          {value: 'STATIC'},
          {value: 'FLEXIBLE'}
        ]
      }
    }
  },
  select_type: {
    getData: async function () {
      return {
        t: 'value',
        v: 'value',
        data: [
          {value: 'City'},
          {value: 'Local Services'}
        ]
      }
    }
  },
  status: {
    getData: async function () {
      return {
        t: 'value',
        v: 'value',
        data: [
          {value: 'ACTIVE'},
          {value: 'INACTIVE'},
          {value: 'BLACKLIST'}
        ]
      }
    }
  },
  title_id: {
    getData: async function () {
      if (MasterList.company.data.types[0].rows.length < 1) {
        await MasterList.company.fetchData(0)
      }
      return {
        t: 'name',
        v: 'id',
        data: MasterList.company.data.types[0].rows
      }
    }
  },
  company_id: {
    getData: async function () {
      if (Branch.data.rows.length < 1) {
        await Details.fetchData()
        await Branch.fetchData()
      }
      return {
        t: 'name',
        v: 'id',
        data: [Details.data.row, ...Branch.data.rows]
      }
    }
  },
  department_id: {
    getData: async function () {
      if (MasterList.company.data.types[2].rows.length < 1) {
        await MasterList.company.fetchData(2)
      }
      return {
        t: 'name',
        v: 'id',
        data: MasterList.company.data.types[2].rows
      }
    }
  },
  role_id: {
    getData: async function () {
      if (MasterList.company.data.types[5].rows.length < 1) {
        await MasterList.company.fetchData(5)
      }
      return {
        t: 'name',
        v: 'id',
        data: MasterList.company.data.types[5].rows
      }
    }
  },
  document_type_id: {
    getData: async function () {
      if (MasterList.package.data.types[0].rows.length < 1) {
        await MasterList.package.fetchData(0)
      }
      return {
        t: 'name',
        v: 'id',
        data: MasterList.package.data.types[0].rows
      }
    }
  },
  tc_id: {
    getData: async function () {
      if (MasterList.services.data.types[12].rows.length < 1) {
        await MasterList.services.fetchData(12)
      }
      return {
        t: 'terms',
        v: 'id',
        data: MasterList.services.data.types[12].rows
      }
    }
  },
  company_type_id: {
    getData: async function () {
      if (MasterList.company.data.types[1].rows.length < 1) {
        await MasterList.company.fetchData(1)
      }
      return {
        t: 'name',
        v: 'id',
        data: MasterList.company.data.types[1].rows
      }
    }
  },
  is_preferred: {
    getData: async function () {
      return {
        t: 'title',
        v: 'value',
        data: [
          {title: 'Yes', value: true},
          {title: 'No', value: false}
        ]
      }
    }
  },
  currency: {
    getData: async function () {
      if (MasterList.company.data.types[3].rows.length < 1) {
        await MasterList.company.fetchData(3)
      }
      return {
        t: 'name',
        v: 'name',
        data: MasterList.company.data.types[3].rows
      }
    }
  },
  location_type_id: {
    getData: async function () {
      if (MasterList.location.data.types[10].rows.length < 1) {
        await MasterList.location.fetchData(10)
      }
      return {
        t: 'name',
        v: 'id',
        data: MasterList.location.data.types[10].rows
      }
    }
  },
  location2_type_id: {
    getData: async function () {
      if (MasterList.location.data.types[11].rows.length < 1) {
        await MasterList.location.fetchData(11)
      }
      return {
        t: 'name',
        v: 'id',
        data: MasterList.location.data.types[11].rows
      }
    }
  },
  style_id: {
    getData: async function () {
      if (MasterList.location.data.types[6].rows.length < 1) {
        await MasterList.location.fetchData(6)
      }
      return {
        t: 'name',
        v: 'id',
        data: MasterList.location.data.types[6].rows
      }
    }
  },
  language_id: {
    getData: async function () {
      if (MasterList.location.data.types[3].rows.length < 1) {
        await MasterList.location.fetchData(3)
      }
      return {
        t: 'name',
        v: 'id',
        data: MasterList.location.data.types[3].rows
      }
    }
  },
  rating_id: {
    getData: async function () {
      if (MasterList.services.data.types[5].rows.length < 1) {
        await MasterList.services.fetchData(5)
      }
      return {
        t: 'name',
        v: 'id',
        data: MasterList.services.data.types[5].rows
      }
    }
  },
  has_ac: {
    getData: async function () {
      return {
        t: 'title',
        v: 'value',
        data: [
          {title: 'Yes', value: true},
          {title: 'No', value: false}
        ]
      }
    }
  },
  is_unesco: {
    getData: async function () {
      return {
        t: 'title',
        v: 'value',
        data: [
          {title: 'Yes', value: true},
          {title: 'No', value: false}
        ]
      }
    }
  },
  room_type_id: {
    getData: async function () {
      if (MasterList.services.data.types[4].rows.length < 1) {
        await MasterList.services.fetchData(4)
      }
      return {
        t: 'name',
        v: 'id',
        data: MasterList.services.data.types[4].rows
      }
    }
  },
  category_type_id: {
    getData: async function () {
      if (MasterList.services.data.types[6].rows.length < 1) {
        await MasterList.services.fetchData(6)
      }
      return {
        t: 'name',
        v: 'id',
        data: MasterList.services.data.types[6].rows
      }
    }
  },
  category2_type_id: {
    getData: async function () {
      if (MasterList.services.data.types[7].rows.length < 1) {
        await MasterList.services.fetchData(7)
      }
      return {
        t: 'name',
        v: 'id',
        data: MasterList.services.data.types[7].rows
      }
    }
  },
  amenity_id: {
    getData: async function () {
      if (MasterList.services.data.types[8].rows.length < 1) {
        await MasterList.services.fetchData(8)
      }
      return {
        t: 'name',
        v: 'id',
        data: MasterList.services.data.types[8].rows
      }
    }
  },
  person_type_id: {
    getData: async function () {
      if (MasterList.services.data.types[3].rows.length < 1) {
        await MasterList.services.fetchData(3)
      }
      return {
        t: 'name',
        v: 'id',
        data: MasterList.services.data.types[3].rows
      }
    }
  },
  pricing_type: {
    getData: async function () {
      return {
        t: 'title',
        v: 'title',
        data: [
          {title: 'BGT'},
          {title: 'TRF'}
        ]
      }
    }
  },
  charge_type_id: {
    getData: async function () {
      if (MasterList.services.data.types[2].rows.length < 1) {
        await MasterList.services.fetchData(2)
      }
      return {
        t: 'name',
        v: 'id',
        data: MasterList.services.data.types[2].rows
      }
    }
  },
  meal_type_id: {
    getData: async function () {
      if (MasterList.package.data.types[5].rows.length < 1) {
        await MasterList.package.fetchData(5)
      }
      return {
        t: 'name',
        v: 'id',
        data: MasterList.package.data.types[5].rows
      }
    }
  },
  breakfast_type_id: {
    getData: async function () {
      if (MasterList.package.data.types[6].rows.length < 1) {
        await MasterList.package.fetchData(6)
      }
      return {
        t: 'name',
        v: 'id',
        data: MasterList.package.data.types[6].rows
      }
    }
  },
  type: {
    getData: async function () {
      return {
        t: 'title',
        v: 'title',
        data: [
          {title: 'FIT'},
          {title: 'GIT'}
        ]
      }
    }
  },
  service_id: {
    getData: async function () {
      if (AGAServices.data.rows.length < 1) {
        await AGAServices.fetchData()
      }
      return {
        t: 'name',
        v: 'id',
        data: AGAServices.data.rows
      }
    }
  }
}
