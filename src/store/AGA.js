export const AGAServices = {
  data: {
    title: 'Services',
    route: 'services',
    tHead: ['Service ID', 'Service Name', 'City', 'Country'],
    td: ['id', 'name', 'city_name', 'country_name'],
    rows: [],
    input: [
      {title: 'Service Type', key: 'service_type_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Service Name', key: 'name', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Country', key: 'country_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'City', key: 'city_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }}
    ],
    addItem: {
      serviceID: 0,
      type: {title: 'Service Type', required: true, key: 'service_type_id', selector: true, type: 'text', value: 1, setVal: function (val) { this.value = val }},
      basic: [
        {title: 'Service Name', required: true, key: 'name', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }, for: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]},
        {title: 'Country', required: true, key: 'country_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }, for: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]},
        {title: 'City', required: true, key: 'city_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }, for: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], dep: 1},
        {title: 'Street', required: false, key: 'street', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }, for: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]},
        {title: 'Postal Code', required: false, key: 'zipcode', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }, for: [1, 2, 3]},
        {title: 'Website', required: false, key: 'website', selector: false, type: 'text', value: '', ph: 'www.example.com', setVal: function (val) { this.value = val }, for: [1, 2, 3]},
        {title: 'Mobile', required: false, key: 'phone_no', selector: false, type: 'text', value: '', ph: '9876543210', setVal: function (val) { this.value = val }, for: [1, 2, 3]},
        {title: 'Telephone', required: false, key: 'telephone_no', selector: false, type: 'text', value: '', ph: '(444)-444-4444', setVal: function (val) { this.value = val }, for: [1, 2, 3]},
        {title: 'Fax', required: false, key: 'fax', selector: false, type: 'text', value: '', ph: '4444-4444', setVal: function (val) { this.value = val }, for: [1, 2, 3]},
        {title: 'Email', required: false, key: 'email', selector: false, type: 'email', value: '', ph: 'mailto@company.com', setVal: function (val) { this.value = val }, for: [1, 2, 3]}
      ],
      description: [
        {title: 'Location', required: false, key: 'location_type_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }, for: [1, 2]},
        {title: 'Location 2', required: false, key: 'location2_type_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }, for: [1, 2]},
        {title: 'Master Chain', required: false, key: 'master_chain_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }, for: [1, 2]},
        {title: 'Chain', required: false, key: 'chain_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }, for: [1, 2]},
        {title: 'Seats', required: false, key: 'seats', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }, for: [2]},
        {title: 'Style', required: false, key: 'style_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }, for: [1, 4]},
        {title: 'Star Rating', required: false, key: 'rating_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }, for: [1]},
        {title: 'Air Con', required: false, key: 'has_ac', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }, for: [1]},
        {title: 'Preffered Services', required: false, key: 'is_preferred', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }, for: [1, 2]},
        {title: 'UNESCO', required: false, key: 'is_unesco', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }, for: [3, 4]},
        {title: 'Language', required: false, key: 'language_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }, for: [5, 6, 7]}
      ],
      info: {title: 'Info', required: false, key: 'description', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      roomTypes: {
        title: 'Room Type',
        rows: [],
        addItem: [
          {title: 'Room Type', required: false, key: 'room_type_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
          {title: 'No. of Rooms', required: true, key: 'no_of_rooms', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }}
        ]
      },
      categories: {
        title: 'Categories',
        rows: [],
        addItem: {title: 'Category', required: false, key: 'category_type_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }}
      },
      amenities: {
        title: 'Amenities',
        rows: [],
        addItem: {title: 'Amenity', required: false, key: 'amenity_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }}
      },
      linkServices: {
        title: 'Link Services',
        rows: [],
        addItem: [
          {title: 'Service type', required: true, key: 'service_type_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
          {title: 'City', required: true, key: 'city_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
          {title: 'Service', required: true, key: 'service_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }}
        ]
      },
      currency: {title: 'Currency', required: true, key: 'currency', selector: true, value: '', setVal: function (val) { this.value = val }},
      priceDetails: {
        title: 'Price Details',
        rows: [],
        addItem: [
          {title: 'Room Type', required: true, key: 'room_type_id', selector: true, value: '', setVal: function (val) { this.value = val }},
          {title: 'Person Type', required: true, key: 'person_type_id', selector: true, value: '', setVal: function (val) { this.value = val }},
          {title: 'Pricing', required: true, key: 'pricing_type', selector: true, value: '', setVal: function (val) { this.value = val }},
          {title: 'Charge', required: true, key: 'charge_type_id', selector: true, value: '', setVal: function (val) { this.value = val }},
          {title: 'Meal Type', required: false, key: 'meal_type_id', selector: true, value: '', setVal: function (val) { this.value = val }},
          {title: 'Breakfast Type', required: false, key: 'breakfast_type_id', selector: true, value: '', setVal: function (val) { this.value = val }},
          {title: 'Description', required: false, key: 'description', selector: false, value: '', setVal: function (val) { this.value = val }},
          {title: 'Type', required: true, key: 'type', selector: true, value: '', setVal: function (val) { this.value = val }},
          {title: 'Category', required: false, key: 'category_type_id', selector: true, value: '', setVal: function (val) { this.value = val }},
          {title: 'Price', required: true, key: 'price', selector: false, value: '', setVal: function (val) { this.value = val }}
        ]
      },
      supplierId: -1,
      tcId: -1
    }
  },
  fetchData: async function () {
    this.data.rows = await fetchAGAData(this.data.route)
  },
  postData: async function () {
    let body = {services: {}, categories: [], amenities: [], linkedServices: []}
    body.services.service_type_id = this.data.addItem.type.value
    body.services.description = this.data.addItem.info.value
    this.data.addItem.basic.forEach(item => {
      if (item.value) {
        body.services[item.key] = item.key.endsWith('id') ? +item.value : item.value
      }
    })
    this.data.addItem.description.forEach(item => {
      if (item.value) {
        body.services[item.key] = item.key.endsWith('id') ? +item.value : item.value
      }
    })
    this.data.addItem.categories.rows.forEach(item => {
      body.categories.push(item.value)
    })
    this.data.addItem.amenities.rows.forEach(item => {
      body.amenities.push(item.value)
    })
    this.data.addItem.linkServices.rows.forEach(item => {
      body.linkedServices.push(item.value.service_id)
    })
    const result = await postAGAData(this.data.route, body)
    if (result[0]) {
      this.data.rows.push(result[1])
      this.data.addItem.serviceID = result[1].id
    }
    return result[0]
  },
  postPriceData: async function () {
    let body = {
      service_id: +this.data.addItem.serviceID,
      price: []
    }
    this.data.addItem.priceDetails.rows.forEach(item => {
      let newPrice = {currency: this.data.addItem.currency.value}
      for (let [key, val] of Object.entries(item)) {
        newPrice[key] = key.endsWith('_id') ? +val[1] : val[1]
      }
      newPrice.price = +newPrice.price
      body.price.push(newPrice)
    })
    const result = await postAGAData(this.data.route + '/price', body)
    return result[0]
  },
  postSupplierData: async function () {
    const body = {
      service_id: +this.data.addItem.serviceID,
      supplier_id: +this.data.addItem.supplierId
    }
    const result = await postAGAData(this.data.route + '/supplier', body)
    return result[0]
  },
  postTCData: async function () {
    const body = {
      service_id: +this.data.addItem.serviceID,
      tc_id: +this.data.addItem.tcId
    }
    const result = await postAGAData(this.data.route + '/tc', body)
    return result[0]
  }
}

export const Suppliers = {
  data: {
    route: 'suppliers',
    preferred: {
      title: 'Preferred Suppliers List',
      tHead: ['Supplier ID', 'Con.Ser', 'Supplier Name', 'Contact', 'Email', 'City', 'Country'],
      td: ['id', 'service_type_name', 'name', 'phone_no', 'email', 'city_name', 'country_name'],
      rows: []
    },
    other: {
      title: 'Other Suppliers List',
      tHead: ['Supplier ID', 'Con.Ser', 'Supplier Name', 'Contact', 'Email', 'City', 'Country'],
      td: ['id', 'service_type_name', 'name', 'phone_no', 'email', 'city_name', 'country_name'],
      rows: []
    },
    input: [
      {title: 'Service Type', key: 'service_type_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Supplier Name', key: 'name', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Country', key: 'country_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'City', key: 'city_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }}
    ],
    addItem: {
      basic: [
        {title: 'Supplier Code', required: true, key: 'code', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
        {title: 'Supplier Name', required: true, key: 'name', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
        {title: 'Connected Services', required: true, key: 'service_type_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
        {title: 'Preffered Supplier', required: false, key: 'is_preferred', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
        {title: 'Currency', required: false, key: 'currency', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
        {title: 'Supplier Status', required: true, key: 'status', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
        {title: 'Date of Creation', required: false, key: 'date_of_establishment', selector: false, type: 'date', value: '', setVal: function (val) { this.value = val }},
        {title: 'Country', required: true, key: 'country_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
        {title: 'City', required: true, key: 'city_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }, dep: 7},
        {title: 'Street', required: false, key: 'street', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
        {title: 'Postal Code', required: false, key: 'zipcode', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
        {title: 'Website', required: false, key: 'website', selector: false, type: 'text', value: '', ph: 'www.example.com', setVal: function (val) { this.value = val }},
        {title: 'Mobile', required: false, key: 'phone_no', selector: false, type: 'text', value: '', ph: '9876543210', setVal: function (val) { this.value = val }},
        {title: 'Telephone', required: false, key: 'telephone_no', selector: false, type: 'text', value: '', ph: '(444)-444-4444', setVal: function (val) { this.value = val }},
        {title: 'Fax', required: false, key: 'fax', selector: false, type: 'text', value: '', ph: '4444-4444', setVal: function (val) { this.value = val }},
        {title: 'Email', required: true, key: 'email', selector: false, type: 'email', value: '', ph: 'mailto@company.com', setVal: function (val) { this.value = val }},
        {title: 'Skype ID', required: false, key: 'skype_id', selector: false, type: 'text', value: '', ph: '12345678', setVal: function (val) { this.value = val }}
      ],
      bank: [
        {title: 'Beneficiary Name', required: true, key: 'beneficiary_name', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
        {title: 'Beneficiary Account Number', required: false, key: 'beneficiary_account_number', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
        {title: 'Beneficiary Address', required: false, key: 'beneficiary_address', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
        {title: 'Beneficiary Bank', required: false, key: 'beneficiary_bank', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
        {title: 'Beneficiary Branch Name', required: false, key: 'beneficiary_branch_name', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
        {title: 'Beneficiary Bank Address', required: false, key: 'beneficiary_bank_address', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
        {title: 'Beneficiary IFSC Code', required: false, key: 'beneficiary_ifsc_code', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
        {title: 'Beneficiary Swift Code', required: false, key: 'beneficiary_swift_code', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
        {title: 'Beneficiary IBN Code', required: false, key: 'beneficiary_ibn_code', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
        {title: 'Beneficiary BIC Code', required: false, key: 'beneficiary_bic_code', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }}
      ]
    }
  },
  fetchData: async function () {
    let {preferred, other} = await fetchAGAData(this.data.route)
    this.data.preferred.rows = preferred
    this.data.other.rows = other
  },
  postData: async function () {
    let body = {supplier: {}, contact: {}, bank: {}}
    this.data.addItem.basic.forEach((input, i) => {
      if (i <= 6) {
        body.supplier[input.key] = input.value
      } else {
        body.contact[input.key] = input.value
      }
    })
    this.data.addItem.bank.forEach(input => {
      body.bank[input.key] = input.value
    })
    const result = await postAGAData(this.data.route, body)
    if (result[0]) {
      this.data[result[1].is_preferred ? 'preferred' : 'other'].rows = result[1]
    }
    return result[0]
  }
}

export const PlaceholderServices = {
  data: {
    title: 'Place Holder Services',
    route: 'placeholder_services',
    tHead: ['Place Holder Service ID', 'Place Holder Service Name', 'Country', 'City', 'Service type'],
    td: ['id', 'name', 'country_name', 'city_name', 'service_type_name'],
    rows: [],
    input: [
      {title: 'Service Type', key: 'service_type_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Place Holder Service ID', key: 'id', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Place Holder Service Name', key: 'name', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Country', key: 'country_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'City', key: 'city_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }, dep: 3}
    ]
  },
  fetchData: async function () {
    this.data.rows = await fetchAGAData(this.data.route)
  }
  // postData: async function () {
  //   let body = {}
  //   this.data.addItem.forEach(item => {
  //     body[item.key] = item.value
  //   })
  //   const insertedData = await postBGAData(this.data.route, body)
  //   if (insertedData[0]) {
  //     this.data.rows.push(insertedData[1])
  //     return true
  //   } else {
  //     return false
  //   }
  // }
}

export const Services99A = {
  data: {
    title: '99 Services',
    route: '99a_services',
    tHead: ['99A Service ID', '99A Service Name', 'Country', 'City', 'Service Type', 'Actions'],
    td: ['id', 'name', 'country_name', 'city_name', 'service_type_name'],
    rows: [],
    input: [
      {title: 'Service Type', key: 'service_type_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: '99A Service ID', key: 'id', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: '99A Service Name', key: 'name', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Country', key: 'country_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'City', key: 'city_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }, dep: 3}
    ]
  },
  fetchData: async function () {
    this.data.rows = await fetchAGAData(this.data.route)
  }
}

async function fetchAGAData (route) {
  const res = await fetch(`/go/api/AGA/${route}`, {
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
    return []
  }
}

async function postAGAData (route, body) {
  const res = await fetch(`/go/api/AGA/${route}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'token': localStorage.getItem('liu')
    },
    body: JSON.stringify(body)
  })
  const data = await res.json()
  if (data.code === 201) {
    return [true, data.data]
  } else {
    console.log(data.msg)
    return [false, {}]
  }
}

export default {
  'services': AGAServices,
  'suppliers': Suppliers,
  'placeholder-services': PlaceholderServices,
  '99a-services': Services99A
}
