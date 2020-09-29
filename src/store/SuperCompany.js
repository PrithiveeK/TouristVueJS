import { RAILS } from './apiProxy'

export const Branch = {
  data: {
    title: 'Branch',
    route: 'branch',
    tHead: ['Branch ID', 'Branch Name', 'City', 'Country', 'Status'],
    td: ['code', 'name', 'city_name', 'country_name', 'status'],
    rows: [],
    input: [
      {title: 'Country', required: false, key: 'country_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'City', required: false, key: 'city_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }}
    ],
    addItem: [
      {title: 'Branch ID', required: true, key: 'code', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Branch Name', required: true, key: 'name', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Date of Creation', required: false, key: 'date_of_establishment', selector: false, type: 'date', value: '', setVal: function (val) { this.value = val }},
      {title: 'Company Status', required: false, key: 'status', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Company Type', required: true, key: 'company_type_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Country', required: true, key: 'country_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'City', required: true, key: 'city_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Street', required: false, key: 'street', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Postal Code', required: true, key: 'zipcode', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Website', required: false, key: 'website', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Mobile', required: false, key: 'phone_no', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Telephone', required: false, key: 'telephone_no', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Fax', required: false, key: 'fax', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Email', required: true, key: 'email', selector: false, type: 'email', value: '', setVal: function (val) { this.value = val }},
      {title: 'Skype ID', required: false, key: 'skype_id', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }}
    ]
  },
  fetchData: async function () {
    this.data.rows = await fetchCompanyData(this.data.route)
  },
  postData: async function () {
    let body = {}
    this.data.addItem.forEach(input => {
      body[input.key] = input.value
    })
    const result = await postCompanyData(this.data.route, body)
    if (result[0]) {
      this.data.rows.push(result[1])
    }
    return result[0]
  },
  updateData: async function (id) {
    let body = {}
    this.data.addItem.forEach(input => {
      body[input.key] = input.value
    })
    const result = await updateCompanyData(this.data.route, this.data.rows[id].id, body)
    if (result[0]) {
      this.data.rows[id] = result[1]
    }
    return result[0]
  },
  deleteData: async function (id) {
    const result = await deleteCompanyData(this.data.route, this.data.rows[id].id)
    if (result) {
      this.data.rows.splice(id, 1)
    }
    return result
  }
}

export const ConnectedServices = {
  data: {
    title: 'Connected Services',
    tHead: ['Service Name', 'City', 'Country', 'Actions'],
    rows: [],
    input: [
      {title: 'Name', required: false, key: 'service_type_name', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }}
    ]
  },
  fetchData: async function () {
    this.data.rows = await fetchCompanyData(this.data.route)
  }
  // postData: async function () {
  //   let body = {}
  //   this.data.addItem.forEach(input => {
  //     body[input.key] = input.value
  //   })
  //   const result = await postCompanyData(this.data.route, body)
  //   if (result[0]) {
  //     this.data.rows.push(result[1])
  //   }
  //   return result[0]
  // },
  // updateData: async function (id) {
  //   let body = {}
  //   this.data.addItem.forEach(input => {
  //     body[input.key] = input.value
  //   })
  //   const result = await updateCompanyData(this.data.route, this.data.rows[id].id, body)
  //   if (result[0]) {
  //     this.data.rows[id] = result[1]
  //   }
  //   return result[0]
  // },
  // deleteData: async function (id) {
  //   const result = await deleteCompanyData(this.data.route, this.data.rows[id].id)
  //   if (result) {
  //     this.data.rows.splice(id, 1)
  //   }
  //   return result
  // }
}

export const Staff = {
  data: {
    title: 'Staff',
    route: 'staff',
    tHead: ['Staff ID', 'First Name', 'Last Name', 'Local Name', 'Company Name', 'Status'],
    td: ['code', 'first_name', 'last_name', 'local_name', 'company_name', 'status'],
    rows: [],
    input: [
      {title: 'Staff Name', required: false, key: 'name', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }}
    ],
    addItem: {
      basic: [
        {title: 'Title', required: true, key: 'title_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
        {title: 'First Name', required: true, key: 'first_name', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
        {title: 'Middle Name', required: false, key: 'middle_name', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
        {title: 'Last Name', required: true, key: 'last_name', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
        {title: 'Local Name', required: false, key: 'local_name', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
        {title: 'Company', required: true, key: 'company_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
        {title: 'Department', required: true, key: 'department_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
        {title: 'Position', required: false, key: 'designation', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
        {title: 'Role', required: false, key: 'role_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
        {title: 'Date of Birth', required: false, key: 'date_of_birth', selector: false, type: 'date', value: '', setVal: function (val) { this.value = val }}
      ],
      advanced: [
        {title: 'Mobile', required: false, key: 'phone_no', selector: false, type: 'text', value: '', ph: '9876543210', setVal: function (val) { this.value = val }},
        {title: 'Telephone', required: false, key: 'telephone_no', selector: false, type: 'text', value: '', ph: '(444)-444-4444', setVal: function (val) { this.value = val }},
        {title: 'Pincode', required: false, key: 'zipcode', selector: false, type: 'text', value: '', ph: '9876543210', setVal: function (val) { this.value = val }},
        {title: 'Fax', required: false, key: 'fax', selector: false, type: 'text', value: '', ph: '4444-4444', setVal: function (val) { this.value = val }},
        {title: 'Email', required: true, key: 'email', selector: false, type: 'text', value: '', ph: 'mailto@company.com', setVal: function (val) { this.value = val }},
        {title: 'Skype ID', required: false, key: 'skype_id', selector: false, type: 'text', value: '', ph: '12345678', setVal: function (val) { this.value = val }},
        {title: 'Countries', required: true, key: 'country_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
        {title: 'Cities', required: true, key: 'city_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }, dep: 6}
      ],
      permissions: [
        {title: 'SERVICES-BGA', required: false, key: 'SERVICES-BGA', selector: ['SEARCH/VIEW', 'ADD/EDIT'], type: 'checkbox', value: [false, false], setVal: function (val, i) { this.value[i] = val }},
        {title: 'AGENT', required: false, key: 'AGENT', selector: ['SEARCH/VIEW', 'ADD/EDIT'], type: 'checkbox', value: [false, false], setVal: function (val, i) { this.value[i] = val }},
        {title: 'PROMOTIONS', required: false, key: 'PROMOTIONS', selector: ['SEARCH/VIEW', 'ADD/EDIT'], type: 'checkbox', value: [false, false], setVal: function (val, i) { this.value[i] = val }},
        {title: 'QUOTATIONS', required: false, key: 'QUOTATIONS', selector: ['SEARCH/VIEW', 'ADD/EDIT'], type: 'checkbox', value: [false, false], setVal: function (val, i) { this.value[i] = val }},
        {title: 'SUPER COMPANY', required: false, key: 'SUPER COMPANY', selector: ['SEARCH/VIEW', 'ADD/EDIT'], type: 'checkbox', value: [false, false], setVal: function (val, i) { this.value[i] = val }},
        {title: 'SERVICES-AGA', required: false, key: 'SERVICES-AGA', selector: ['SEARCH/VIEW', 'ADD/EDIT'], type: 'checkbox', value: [false, false], setVal: function (val, i) { this.value[i] = val }},
        {title: 'SUPPLIERS', required: false, key: 'SUPPLIERS', selector: ['SEARCH/VIEW', 'ADD/EDIT'], type: 'checkbox', value: [false, false], setVal: function (val, i) { this.value[i] = val }},
        {title: 'MASTER LIST', required: false, key: 'MASTER LIST', selector: ['SEARCH/VIEW', 'ADD/EDIT'], type: 'checkbox', value: [false, false], setVal: function (val, i) { this.value[i] = val }}
      ]
    }
  },
  fetchData: async function () {
    this.data.rows = await fetchCompanyData(this.data.route)
  },
  postData: async function () {
    let body = {basic: {}, advanced: {}, permissions: {}}
    this.data.addItem.basic.forEach(input => {
      body.basic[input.key] = input.value
    })
    this.data.addItem.advanced.forEach(input => {
      body.advanced[input.key] = input.value
    })
    this.data.addItem.permissions.forEach(input => {
      body.permissions[input.key] = input.value
    })
    const result = await postCompanyData(this.data.route, body)
    if (result[0]) {
      this.data.rows.push(result[1])
    }
    return result[0]
  },
  updateData: async function (id) {
    return false
    // let body = {}
    // this.data.addItem.forEach(input => {
    //   body[input.key] = input.value
    // })
    // const result = await updateCompanyData(this.data.route, this.data.rows[id].id, body)
    // if (result[0]) {
    //   this.data.rows[id] = result[1]
    // }
    // return result[0]
  },
  deleteData: async function (id) {
    return false
    // const result = await deleteCompanyData(this.data.route, this.data.rows[id].id)
    // if (result) {
    //   this.data.rows.splice(id, 1)
    // }
    // return result
  }
}

export const TC = {
  data: {
    title: 'Terms & Conditions',
    route: 'tc',
    tHead: ['Order No', 'Subject', 'Description'],
    td: ['order_id', 'subject', 'terms'],
    rows: [],
    input: [
      {title: 'Subject', required: false, key: 'subject', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }}
    ],
    addItem: [
      {title: 'Order No', required: true, key: 'order_id', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Document Type', required: true, key: 'document_type_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Subject', required: true, key: 'subject', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Terms', required: true, key: 'tc_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }}
    ]
  },
  fetchData: async function () {
    this.data.rows = await fetchCompanyData(this.data.route)
  },
  postData: async function () {
    let body = {}
    this.data.addItem.forEach(input => {
      body[input.key] = input.value
    })
    const result = await postCompanyData(this.data.route, body)
    if (result[0]) {
      this.data.rows.push(result[1])
    }
    return result[0]
  },
  updateData: async function (id) {
    let body = {}
    this.data.addItem.forEach(input => {
      body[input.key] = input.value
    })
    const result = await updateCompanyData(this.data.route, this.data.rows[id].id, body)
    if (result[0]) {
      this.data.rows[id] = result[1]
    }
    return result[0]
  },
  deleteData: async function (id) {
    const result = await deleteCompanyData(this.data.route, this.data.rows[id].id)
    if (result) {
      this.data.rows.splice(id, 1)
    }
    return result
  }
}

export const Details = {
  data: {
    id: 1,
    row: {},
    input: [
      {title: 'Company Name', required: true, key: 'name', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Date of Creation', required: false, key: 'date_of_establishment', selector: false, type: 'date', value: '', setVal: function (val) { this.value = val }},
      {title: 'Company Status', required: false, key: 'status', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Country', required: true, key: 'country_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'City', required: true, key: 'city_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Street', required: false, key: 'street', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Postal Code', required: true, key: 'zipcode', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Website', required: false, key: 'website', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Mobile', required: false, key: 'phone_no', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Telephone', required: false, key: 'telephone_no', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Fax', required: false, key: 'fax', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Email', required: true, key: 'email', selector: false, type: 'email', value: '', setVal: function (val) { this.value = val }},
      {title: 'Skype ID', required: false, key: 'skype_id', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }}
    ]
  },
  setID: function (id) { this.data.id = id },
  setData: function (data) {
    this.data.row = data
    this.data.input.forEach(input => {
      input.setVal(data[input.key])
    })
  },
  fetchData: async function () {
    const res = await fetch(`${RAILS}/api/company/${this.data.id}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'token': localStorage.getItem('liu')
      }
    })
    const data = await res.json()
    if (data.code === 200) {
      this.setData(data.data)
    } else {
      console.log(data.msg)
    }
  },
  updateData: async function () {
    let body = {}
    this.data.input.forEach(input => {
      body[input.key] = input.value
    })
    const res = await fetch(`${RAILS}/api/company/${this.data.id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'token': localStorage.getItem('liu')
      },
      body: JSON.stringify({company: body})
    })
    const data = await res.json()
    if (data.code === 200) {
      this.setData(data.data)
    } else {
      console.log(data.msg)
    }
  }
}

async function fetchCompanyData (route) {
  const res = await fetch(`${RAILS}/api/company/${Details.data.id}/${route}`, {
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

async function postCompanyData (route, body) {
  const res = await fetch(`${RAILS}/api/company/${Details.data.id}/${route}`, {
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
    return [false, {}]
  }
}

async function updateCompanyData (route, id, body) {
  const res = await fetch(`${RAILS}/api/company/${Details.data.id}/${route}/${id}`, {
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
    return [false, {}]
  }
}

async function deleteCompanyData (route, id) {
  const res = await fetch(`${RAILS}/api/company/${Details.data.id}/${route}/${id}`, {
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
