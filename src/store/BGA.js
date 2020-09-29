export const BGAServices = {
  data: {
    title: 'Services',
    route: 'services',
    tHead: ['Service ID', 'Service Name', 'City', 'Country'],
    td: ['id', 'name', 'city_id', 'country_id'],
    rows: [],
    input: [
      {title: 'Service Type', key: 'service_type_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Service Name', key: 'name', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Country', key: 'country_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'City', key: 'city_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }}
    ]
  },
  fetchData: async function () {
    this.data.rows = await fetchBGAData(this.data.route)
  }
}

export const Agents = {
  data: {
    title: 'Agent',
    route: 'agents',
    tHead: ['Agent ID', 'Agent Name', 'City', 'Country'],
    td: ['code', 'name', 'city_name', 'country_name'],
    rows: [],
    input: [
      {title: 'Country', key: 'country_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'City', key: 'city_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Agent Name', key: 'name', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }}
    ],
    addItem: [
      {title: 'Agent Code', required: true, key: 'code', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Agent Name', required: true, key: 'name', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Local Name', required: false, key: 'local_name', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Agent Status', required: true, key: 'status', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Date of Creation', required: false, key: 'date_of_establishment', selector: false, type: 'date', value: '', setVal: function (val) { this.value = val }},
      {title: 'Country', required: true, key: 'country_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'City', required: true, key: 'city_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Street', required: false, key: 'street', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Postal Code', required: false, key: 'zipcode', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Website', required: false, key: 'website', selector: false, type: 'text', value: '', ph: 'www.example.com', setVal: function (val) { this.value = val }},
      {title: 'Mobile', required: false, key: 'phone_no', selector: false, type: 'text', value: '', ph: '9876543210', setVal: function (val) { this.value = val }},
      {title: 'Telephone', required: false, key: 'telephone_no', selector: false, type: 'text', value: '', ph: '(444)-444-4444', setVal: function (val) { this.value = val }},
      {title: 'Fax', required: false, key: 'fax', selector: false, type: 'text', value: '', ph: '4444-4444', setVal: function (val) { this.value = val }},
      {title: 'Email', required: true, key: 'email', selector: false, type: 'email', value: '', ph: 'mailto@company.com', setVal: function (val) { this.value = val }},
      {title: 'Skype ID', required: false, key: 'skype_id', selector: false, type: 'text', value: '', ph: '12345678', setVal: function (val) { this.value = val }}
    ]
  },
  fetchData: async function () {
    this.data.rows = await fetchBGAData(this.data.route)
  },
  postData: async function () {
    let body = {agent: {}, contact: {}}
    this.data.addItem.forEach((item, i) => {
      if (i <= 4) {
        body.agent[item.key] = item.value
      } else {
        body.contact[item.key] = item.value
      }
    })
    const insertedData = await postBGAData(this.data.route, body)
    if (insertedData[0]) {
      this.data.rows.push(insertedData[1])
      return true
    } else {
      return false
    }
  }
}

export const SubAgents = {
  data: {
    title: 'Sub Agents',
    route: 'sub_agents',
    tHead: ['Sub Agent ID', 'Sub Agent Name', 'City', 'Country'],
    td: ['code', 'name', 'city_name', 'country_name'],
    rows: [],
    input: [
      {title: 'Country', key: 'country_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'City', key: 'city_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Sub Agent Name', key: 'name', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }}
    ],
    addItem: [ ...Agents.data.addItem ]
  },
  fetchData: async function () {
    this.data.rows = await fetchBGAData(this.data.route)
  },
  postData: async function () {
    let body = {}
    this.data.addItem.forEach(item => {
      body[item.key] = item.value
    })
    const insertedData = await postBGAData(this.data.route, body)
    if (insertedData[0]) {
      this.data.rows.push(insertedData[1])
      return true
    } else {
      return false
    }
  }
}

export const Quotations = {
  data: {
    title: 'Quotations',
    tHead: ['Quotation No', 'Agent Company Name', 'Dept Date', 'Creation Date', 'City in', 'City out', 'Pattern 1', 'Pattern 2', 'Group Type', 'Parent Quotation', 'Quotation Value', 'Status', 'Actions'],
    rows: [],
    input: [
      {title: 'Quotation No', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Agent Name', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Pattern 1', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Pattern 2', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Sales Manager', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Quoter', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Valid From', selector: false, type: 'date', value: '', setVal: function (val) { this.value = val }},
      {title: 'Valid To', selector: false, type: 'date', value: '', setVal: function (val) { this.value = val }},
      {title: 'Departure', selector: false, type: 'date', value: '', setVal: function (val) { this.value = val }},
      {title: 'Same Day Arrival', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Duration', selector: false, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Status', key: 'status', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'From City', key: 'city_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'To City', key: 'city_id', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }},
      {title: 'Group Type', selector: true, type: 'text', value: '', setVal: function (val) { this.value = val }}
    ]
  },
  methods: {
  }
}

async function fetchBGAData (route) {
  const res = await fetch(`/go/api/BGA/${route}`)
  const data = await res.json()
  if (data.code === 200) {
    return data.data
  } else {
    console.log(data.msg)
    return []
  }
}

async function postBGAData (route, body) {
  const res = await fetch(`/go/api/BGA/${route}`, {
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
  'services': BGAServices,
  'agent': Agents,
  'sub-agent': SubAgents,
  'quotations': Quotations
}
