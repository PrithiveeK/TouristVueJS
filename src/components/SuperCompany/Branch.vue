<template>
  <div class="data-list">
    <div class="top-part">
      <h1>Terms and Conditions</h1>
      <button class="tag-click" @click="initAdd">Add {{branchData.title}}</button>
    </div>
    <TableView
      :viewType="branchData"
      @view="changeCompany"
      @delete="deleteItem"
      @edit="initEdit"
    />
    <ItemViewer
      v-if="viewItem"
      :viewData="branchData"
      @close="viewItem=false;editID=-1"
      @done="editID === -1 ? addItem() : editItem()"
    />
    <ErrorMsg v-if="isError.has" :error="isError"/>
  </div>
</template>

<script>
import { Branch } from '../../store/SuperCompany'
import TableView from '../TableView'
import ItemViewer from '../ItemViewer'
import ErrorMsg from '../ErrorMsg'

export default {
  data () {
    return {
      isError: {has: false, msg: '', color: ''},
      editID: -1,
      viewItem: false,
      branchData: Branch.data
    }
  },
  mounted () {
    Branch.fetchData()
  },
  methods: {
    changeCompany: function (event) {
      this.$router.push({name: 'SuperCompany', params: {dataContent: 'details'}, query: {id: this.branchData.rows[event].id}})
    },
    initAdd: function () {
      this.branchData.addItem.forEach((input) => {
        input.setVal('')
      })
      this.viewItem = true
    },
    initEdit: function (id) {
      this.branchData.addItem.forEach((input) => {
        input.setVal(this.branchData.rows[id][input.key])
      })
      this.viewItem = true
    },
    editItem: async function () {
      this.viewItem = false
      if (await Branch.updateData(this.editID)) {
        this.isError = {has: true, msg: 'Successfully Updated!', color: 'green'}
      } else {
        this.isError = {has: true, msg: 'Couldn\'t update data. Please, Try again!', color: 'red'}
      }
      this.editID = -1
      setTimeout(() => {
        this.isError = {has: false, msg: '', color: ''}
      }, 3000)
    },
    addItem: async function () {
      this.viewItem = false
      if (await Branch.postData()) {
        this.isError = {has: true, msg: 'Successfully Added!', color: 'green'}
      } else {
        this.isError = {has: true, msg: 'Couldn\'t add data. Please, Try again!', color: 'red'}
      }
      setTimeout(() => {
        this.isError = {has: false, msg: '', color: ''}
      }, 3000)
    },
    deleteItem: async function (id) {
      if (await Branch.deleteData(id)) {
        this.isError = {has: true, msg: 'Successfully Deleted!', color: 'green'}
      } else {
        this.isError = {has: true, msg: 'Couldn\'t delete data. Please, Try again!', color: 'red'}
      }
      setTimeout(() => {
        this.isError = {has: false, msg: '', color: ''}
      }, 3000)
    }
  },
  components: {
    TableView,
    ItemViewer,
    ErrorMsg
  }
}
</script>
