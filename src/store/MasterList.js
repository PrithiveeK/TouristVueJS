import { RAILS } from './apiProxy'

export const PackageData = {
  data: {
    types: [
      {
        title: 'Document Type',
        route: 'document_types',
        tHead: ['ID', 'Document Type', 'Description'],
        td: ['id', 'name', 'description'],
        rows: [],
        addItem: [
          {title: 'Document type', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Tour Pattern',
        route: 'tour_pattern_types',
        tHead: ['ID', 'Tour pattern', 'Description'],
        td: ['id', 'name', 'description'],
        rows: [],
        addItem: [
          {title: 'Pattern type', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Tour Pattern 2',
        route: 'tour_pattern2_types',
        tHead: ['ID', 'Tour pattern 2', 'Description'],
        td: ['id', 'name', 'description'],
        rows: [],
        addItem: [
          {title: 'Pattern type', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Group PAX Slab',
        route: 'group_pax_slab_types',
        tHead: ['ID', 'Group PAX Slab', 'FOC', 'Half Twin', 'SGL', 'Description'],
        td: ['id', 'pax_slab', 'foc', 'half_twin', 'sgl', 'description'],
        rows: [],
        addItem: [
          {title: 'Pax Count', required: true, key: 'pax_slab', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Foc Count', required: true, key: 'foc', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Half-Twin Count', required: false, key: 'half_twin', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Sgl Count', required: false, key: 'sgl', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Coach Size',
        route: 'coach_size_types',
        tHead: ['ID', 'Coach Size', 'Description'],
        td: ['id', 'coach_size', 'description'],
        rows: [],
        addItem: [
          {title: 'Coach Size', required: true, key: 'coach_size', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Menu Type',
        route: 'menu_types',
        tHead: ['ID', 'Menu Type', 'Description'],
        td: ['id', 'name', 'description'],
        rows: [],
        addItem: [
          {title: 'Menu Type', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Breakfast Type',
        route: 'breakfast_types',
        tHead: ['ID', 'Breakfast Type', 'Description'],
        td: ['id', 'name', 'description'],
        rows: [],
        addItem: [
          {title: 'Breadfast Type', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Duration Type',
        tHead: ['ID', 'Duration type', 'Service Type', 'Description'],
        rows: [],
        addItem: [
          {title: 'Duration Type', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Service Type', selector: true, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Ticket Type',
        route: 'tickets',
        tHead: ['ID', 'Ticket Type', 'Description'],
        td: ['id', 'name', 'description'],
        rows: [],
        addItem: [
          {title: 'Ticket Type', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Class Type',
        route: 'class_types',
        tHead: ['ID', 'Class Type', 'Description'],
        td: ['id', 'name', 'description'],
        rows: [],
        addItem: [
          {title: 'Class Type', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Master Chain',
        route: 'master_chains',
        tHead: ['ID', 'Master chain', 'Description'],
        td: ['id', 'name', 'description'],
        rows: [],
        addItem: [
          {title: 'Master Chain', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Chain',
        route: 'chains',
        tHead: ['ID', 'Chain', 'Master Chain', 'Description'],
        td: ['id', 'name', 'master_chain_name', 'description'],
        rows: [],
        addItem: [
          {title: 'Chain Name', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Master Chain', required: true, key: 'master_chain_id', selector: true, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Service Type', required: false, key: 'service_type_id', selector: true, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      }
    ]
  },
  fetchData: async function (id, filter) {
    // console.log(this.data.types[id])
    this.data.types[id].rows = await fetchMasterData(this.data.types[id].route, filter)
  },
  postData: async function (id) {
    let body = {}
    this.data.types[id].addItem.forEach(item => {
      body[item.key] = item.value
    })
    const insertedData = await postMasterData(this.data.types[id].route, body)
    if (insertedData[0]) {
      this.data.types[id].rows.push(insertedData[1])
      return true
    } else {
      return false
    }
  },
  deleteData: async function (Tid, Did) {
    const result = await deleteMasterData(this.data.types[Tid].route, this.data.types[Tid].rows[Did].id)
    if (result) {
      this.data.types[Tid].rows.splice(Did, 1)
      return true
    } else {
      return false
    }
  },
  editData: async function (Tid, Did) {
    let body = {}
    this.data.types[Tid].addItem.forEach(item => {
      body[item.key] = item.value
    })
    const result = await updateMasterData(this.data.types[Tid].route, this.data.types[Tid].rows[Did].id, body)
    if (result[0]) {
      this.data.types[Tid].rows[Did] = result[1]
      return true
    } else {
      return false
    }
  }
}

export const CompanyData = {
  data: {
    types: [
      {
        title: 'Title',
        route: 'titles',
        tHead: ['ID', 'Title', 'Description'],
        td: ['id', 'name', 'description'],
        rows: [],
        addItem: [
          {title: 'Title', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Company Type',
        route: 'company_types',
        tHead: ['ID', 'Company Type', 'Description'],
        td: ['id', 'name', 'description'],
        rows: [],
        addItem: [
          {title: 'Company Type', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Department',
        route: 'departments',
        tHead: ['ID', 'Department Name', 'Description'],
        td: ['id', 'name', 'description'],
        rows: [],
        addItem: [
          {title: 'Department Name', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Currency',
        route: 'currencies',
        tHead: ['ID', 'Currency Name', 'Description'],
        td: ['id', 'name', 'description'],
        rows: [],
        addItem: [
          {title: 'Currency Name', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Sales', required: true, key: 'is_sales', selector: true, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Currency 2',
        route: 'currencies2',
        tHead: ['ID', 'Currency 2 Name', 'Description'],
        td: ['id', 'name', 'description'],
        rows: [],
        addItem: [
          {title: 'Currency Name', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Role',
        route: 'roles',
        tHead: ['ID', 'Role'],
        td: ['id', 'name'],
        rows: [],
        addItem: [
          {title: 'Role', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      }
    ]
  },
  fetchData: async function (id, filter) {
    // console.log(this.data.types[id])
    this.data.types[id].rows = await fetchMasterData(this.data.types[id].route, filter)
  },
  postData: async function (id) {
    let body = {}
    this.data.types[id].addItem.forEach(item => {
      body[item.key] = item.value
    })
    const insertedData = await postMasterData(this.data.types[id].route, body)
    if (insertedData[0]) {
      this.data.types[id].rows.push(insertedData[1])
      return true
    } else {
      return false
    }
  },
  deleteData: async function (Tid, Did) {
    const result = await deleteMasterData(this.data.types[Tid].route, this.data.types[Tid].rows[Did].id)
    if (result) {
      this.data.types[Tid].rows.splice(Did, 1)
      return true
    } else {
      return false
    }
  },
  editData: async function (Tid, Did) {
    let body = {}
    this.data.types[Tid].addItem.forEach(item => {
      body[item.key] = item.value
    })
    const result = await updateMasterData(this.data.types[Tid].route, this.data.types[Tid].rows[Did].id, body)
    if (result[0]) {
      this.data.types[Tid].rows[Did] = result[1]
      return true
    } else {
      return false
    }
  }
}

export const ServiceData = {
  data: {
    types: [
      {
        title: 'Service Type',
        route: 'service_types',
        tHead: ['ID', 'Service Type', 'Description'],
        td: ['id', 'name', 'description'],
        rows: [],
        addItem: [
          {title: 'Service type', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Supplier Type',
        route: 'supplier_types',
        tHead: ['ID', 'Supplier Type', 'Description'],
        td: ['id', 'name', 'description'],
        rows: [],
        addItem: [
          {title: 'Supplier type', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Charge Type',
        route: 'charge_types',
        tHead: ['ID', 'Charge Type', 'Description'],
        td: ['id', 'name', 'description'],
        rows: [],
        addItem: [
          {title: 'Charge type', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Person Type',
        route: 'person_types',
        tHead: ['ID', 'Person Type', 'Description'],
        td: ['id', 'name', 'description'],
        rows: [],
        addItem: [
          {title: 'Person type', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Room Type',
        route: 'room_types',
        tHead: ['ID', 'Room Type', 'Description'],
        td: ['id', 'name', 'description'],
        rows: [],
        addItem: [
          {title: 'Room type', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Rating',
        route: 'rating_types',
        tHead: ['ID', 'Rating', 'Description'],
        td: ['id', 'name', 'description'],
        rows: [],
        addItem: [
          {title: 'Rating', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Categories',
        route: 'category_types',
        tHead: ['ID', 'Categories', 'Service Type', 'Description'],
        td: ['id', 'name', 'service_type_name', 'description'],
        rows: [],
        addItem: [
          {title: 'Category', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Service type', required: true, key: 'service_type_id', selector: true, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Categories 2',
        route: 'category2_types',
        tHead: ['ID', 'Categories 2', 'Service Type', 'Description'],
        td: ['id', 'name', 'service_type_name', 'description'],
        rows: [],
        addItem: [
          {title: 'Category', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Service type', required: true, key: 'service_type_id', selector: true, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Amenities',
        route: 'amenities',
        tHead: ['ID', 'Amenities', 'Service Type', 'Description'],
        td: ['id', 'name', 'service_type_name', 'description'],
        rows: [],
        addItem: [
          {title: 'Amenities', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Service type', required: true, key: 'service_type_id', selector: true, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Facilities',
        route: 'facilities',
        tHead: ['ID', 'Facilities', 'Service Type', 'Description'],
        td: ['id', 'name', 'service_type_name', 'description'],
        rows: [],
        addItem: [
          {title: 'Facilities', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Service type', required: true, key: 'service_type_id', selector: true, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Remarks',
        route: 'remarks',
        tHead: ['ID', 'Remarks', 'Type'],
        td: ['id', 'name', 'remark_type'],
        rows: [],
        addItem: [
          {title: 'Remarks', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Type', required: false, key: 'remark_type', selector: true, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Select Type', required: false, key: 'select_type', selector: true, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Addons',
        route: 'addons',
        tHead: ['ID', 'Addons', 'Service Type'],
        td: ['id', 'name', 'service_type_name'],
        rows: [],
        addItem: [
          {title: 'Addons', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Service type', required: true, key: 'service_type_id', selector: true, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Terms And Conditions',
        route: 'terms_and_conditions',
        tHead: ['ID', 'From Market', 'To Market', 'Terms and Conditions'],
        td: ['id', 'from_market_name', 'to_market_name', 'terms'],
        rows: [],
        addItem: [
          {title: 'From Market', required: true, key: 'from_market_id', selector: true, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'To Market', required: true, key: 'to_market_id', selector: true, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Terms and Conditions', required: true, key: 'terms', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      }
    ]
  },
  fetchData: async function (id, filter) {
    // console.log(this.data.types[id])
    this.data.types[id].rows = await fetchMasterData(this.data.types[id].route, filter)
  },
  postData: async function (id) {
    let body = {}
    this.data.types[id].addItem.forEach(item => {
      body[item.key] = item.value
    })
    const insertedData = await postMasterData(this.data.types[id].route, body)
    if (insertedData[0]) {
      this.data.types[id].rows.push(insertedData[1])
      return true
    } else {
      return false
    }
  },
  deleteData: async function (Tid, Did) {
    const result = await deleteMasterData(this.data.types[Tid].route, this.data.types[Tid].rows[Did].id)
    if (result) {
      this.data.types[Tid].rows.splice(Did, 1)
      return true
    } else {
      return false
    }
  },
  editData: async function (Tid, Did) {
    let body = {}
    this.data.types[Tid].addItem.forEach(item => {
      body[item.key] = item.value
    })
    const result = await updateMasterData(this.data.types[Tid].route, this.data.types[Tid].rows[Did].id, body)
    if (result[0]) {
      this.data.types[Tid].rows[Did] = result[1]
      return true
    } else {
      return false
    }
  }
}

export const LocationData = {
  data: {
    types: [
      {
        title: 'Continents',
        route: 'continents',
        tHead: ['ID', 'Continent', 'Description'],
        td: ['id', 'name', 'description'],
        rows: [],
        addItem: [
          {title: 'Continent Name', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Countries',
        route: 'countries',
        tHead: ['ID', 'Country', 'Continent', 'ISD Code', 'ISO Code', 'Description'],
        td: ['id', 'name', 'continent_name', 'isd_code', 'iso_code', 'description'],
        rows: [],
        addItem: [
          {title: 'Continent Name', required: true, key: 'continent_id', selector: true, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Country Name', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'ISD Code', required: false, key: 'isd_code', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'ISO Code', required: false, key: 'iso_code', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Cities',
        route: 'cities',
        tHead: ['ID', 'City', 'Country', 'Airport Code', 'STD Code', 'Description'],
        td: ['id', 'name', 'country_name', 'airport_code', 'std_code', 'description'],
        rows: [],
        addItem: [
          {title: 'Country Name', required: true, key: 'country_id', selector: true, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'City Name', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Airport Code', required: false, key: 'airport_code', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'STD Code', required: false, key: 'std_code', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Languages',
        route: 'languages',
        tHead: ['ID', 'Language', 'Language ISO Code', 'Description'],
        td: ['id', 'name', 'language_iso_code', 'description'],
        rows: [],
        addItem: [
          {title: 'Language Name', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Language ISO Code', required: false, key: 'language_iso_code', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Markets',
        route: 'markets',
        tHead: ['ID', 'Market', 'Description'],
        td: ['id', 'name', 'description'],
        rows: [],
        addItem: [
          {title: 'Market Name', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Regions',
        route: 'regions',
        tHead: ['ID', 'Region', 'Description'],
        td: ['id', 'name', 'description'],
        rows: [],
        addItem: [
          {title: 'Region Name', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Styles',
        route: 'styles',
        tHead: ['ID', 'Style', 'Description'],
        td: ['id', 'name', 'description'],
        rows: [],
        addItem: [
          {title: 'Style Name', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Hot Date Difficulty',
        route: 'hotdate_difficulty',
        tHead: ['ID', 'Hot Date Difficulty', 'Description'],
        td: ['id', 'name', 'description'],
        rows: [],
        addItem: [
          {title: 'HotDate Difficulty Name', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Hot Date',
        route: 'hotdates',
        tHead: ['ID', 'Event name', 'From Date', 'To Date', 'Description'],
        td: ['id', 'name', 'from_date', 'to_date', 'description'],
        rows: [],
        addItem: [
          {title: 'Event Name', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Valid From', required: true, key: 'from_date', selector: false, type: 'date', value: null, setVal: function (val) { this.value = val }},
          {title: 'Valid To', required: false, key: 'to_date', selector: false, type: 'date', value: null, setVal: function (val) { this.value = val }},
          {title: 'Difficulty', required: true, key: 'hotdate_difficulty_id', selector: true, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Country', required: false, key: 'country_id', selector: true, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'City', required: false, key: 'city_id', selector: true, type: 'text', value: null, setVal: function (val) { this.value = val }, dep: 4},
          {title: 'Description', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Nationalities',
        route: 'nationalities',
        tHead: ['ID', 'Nationality', 'Description'],
        td: ['id', 'name', 'description'],
        rows: [],
        addItem: [
          {title: 'Nationality Name', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Descrpition', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Location Type',
        route: 'location_types',
        tHead: ['ID', 'Location Type', 'Description'],
        td: ['id', 'name', 'description'],
        rows: [],
        addItem: [
          {title: 'Location Type', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Descrpition', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      },
      {
        title: 'Location Type 2',
        route: 'location2_types',
        tHead: ['ID', 'Location Type 2', 'Description'],
        td: ['id', 'name', 'description'],
        rows: [],
        addItem: [
          {title: 'Location Type 2', required: true, key: 'name', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }},
          {title: 'Descrpition', required: false, key: 'description', selector: false, type: 'text', value: null, setVal: function (val) { this.value = val }}
        ]
      }
    ]
  },
  fetchData: async function (id, filter) {
    // console.log(this.data.types[id])
    this.data.types[id].rows = await fetchMasterData(this.data.types[id].route, filter)
  },
  postData: async function (id) {
    let body = {}
    this.data.types[id].addItem.forEach(item => {
      body[item.key] = item.value
    })
    const insertedData = await postMasterData(this.data.types[id].route, body)
    if (insertedData[0]) {
      this.data.types[id].rows.push(insertedData[1])
      return true
    } else {
      return false
    }
  },
  deleteData: async function (Tid, Did) {
    const result = await deleteMasterData(this.data.types[Tid].route, this.data.types[Tid].rows[Did].id)
    if (result) {
      this.data.types[Tid].rows.splice(Did, 1)
      return true
    } else {
      return false
    }
  },
  editData: async function (Tid, Did) {
    let body = {}
    this.data.types[Tid].addItem.forEach(item => {
      body[item.key] = item.value
    })
    const result = await updateMasterData(this.data.types[Tid].route, this.data.types[Tid].rows[Did].id, body)
    if (result[0]) {
      this.data.types[Tid].rows[Did] = result[1]
      return true
    } else {
      return false
    }
  }
}

async function fetchMasterData (route, filter = '') {
  const res = await fetch(`${RAILS}/api/master_data/${route}?${filter}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'token': localStorage.getItem('liu')
    }
  })
  const data = await res.json()
  if (data.code === 200) {
    return data.data
  } else {
    console.log(data.msg)
  }
  return []
}

async function postMasterData (route, body) {
  const res = await fetch(`${RAILS}/api/master_data/${route}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'token': localStorage.getItem('liu')
    },
    body: JSON.stringify({[route]: body})
  })
  const data = await res.json()
  if (data.code === 201) {
    return [true, data.data]
  } else {
    console.log(data.msg)
  }
  return [false, {}]
}

async function deleteMasterData (route, id) {
  const res = await fetch(`${RAILS}/api/master_data/${route}/${id}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'token': localStorage.getItem('liu')
    }
  })
  const data = await res.json()
  if (data.code === 200) {
    return true
  } else {
    console.log(data.msg)
    return false
  }
}

async function updateMasterData (route, id, body) {
  const res = await fetch(`${RAILS}/api/master_data/${route}/${id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'token': localStorage.getItem('liu')
    },
    body: JSON.stringify({[route]: body})
  })
  const data = await res.json()
  if (data.code === 200) {
    return [true, data.data]
  } else {
    console.log(data.msg)
  }
  return [false, {}]
}

export default {
  package: PackageData,
  company: CompanyData,
  services: ServiceData,
  location: LocationData
}
