<template>
  <div class="data-list">
    <div class="top-part">
      <h1>Staff</h1>
      <button class="tag-click" @click="initAdd">Add {{staffData.title}}</button>
    </div>
    <TableView
      :viewType="staffData"
      @delete="deleteItem"
      @edit="initEdit"
    />
    <ItemViewer
      v-if="viewItem"
      :viewData="{title: staffData.title, addItem: staffData.addItem[['basic', 'advanced', 'permissions'][which]]}"
      @close="viewItem=false;editID=-1"
      @done="editID === -1 ? addItem() : editItem()"
    />
    <ErrorMsg v-if="isError.has" :error="isError"/>
  </div>
</template>

<script>
import { Staff } from '../../store/SuperCompany'
import TableView from '../TableView'
import ItemViewer from '../ItemViewer'
import ErrorMsg from '../ErrorMsg'

export default {
  data () {
    return {
      which: 0,
      isError: {has: false, msg: '', color: ''},
      editID: -1,
      viewItem: false,
      staffData: Staff.data
    }
  },
  mounted () {
    Staff.fetchData()
  },
  methods: {
    initAdd: function () {
      this.staffData.addItem.basic.forEach((input) => {
        input.setVal('')
      })
      this.viewItem = true
    },
    initEdit: function (id) {
      this.staffData.addItem.basic.forEach((input) => {
        input.setVal(this.staffData.rows[id][input.key])
      })
      this.viewItem = true
    },
    editItem: async function () {
      this.viewItem = false
      if (await Staff.updateData(this.editID)) {
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
      if (this.which !== 2) {
        this.which += 1
        this.viewItem = true
        return
      }
      if (await Staff.postData()) {
        this.isError = {has: true, msg: 'Successfully Added!', color: 'green'}
      } else {
        this.isError = {has: true, msg: 'Couldn\'t add data. Please, Try again!', color: 'red'}
      }
      this.which = 0
      setTimeout(() => {
        this.isError = {has: false, msg: '', color: ''}
      }, 3000)
    },
    deleteItem: async function (id) {
      if (await Staff.deleteData(id)) {
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
