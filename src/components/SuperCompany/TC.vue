<template>
  <div class="data-list">
    <div class="top-part">
      <h1>Terms and Conditions</h1>
      <button class="tag-click" @click="initAdd">Add {{tcData.title}}</button>
    </div>
    <TableView
      :viewType="tcData"
      @delete="deleteItem"
      @edit="initEdit"
    />
    <ItemViewer
      v-if="viewItem"
      :viewData="tcData"
      @close="viewItem=false;editID=-1"
      @done="editID === -1 ? addItem() : editItem()"
    />
    <ErrorMsg v-if="isError.has" :error="isError"/>
  </div>
</template>

<script>
import { TC } from '../../store/SuperCompany'
import TableView from '../TableView'
import ItemViewer from '../ItemViewer'
import ErrorMsg from '../ErrorMsg'

export default {
  data () {
    return {
      isError: {has: false, msg: '', color: ''},
      editID: -1,
      viewItem: false,
      tcData: TC.data
    }
  },
  mounted () {
    TC.fetchData()
  },
  methods: {
    initAdd: function () {
      this.tcData.addItem.forEach((input) => {
        input.setVal('')
      })
      this.viewItem = true
    },
    initEdit: function (id) {
      this.tcData.addItem.forEach((input) => {
        input.setVal(this.tcData.rows[id][input.key])
      })
      this.viewItem = true
    },
    editItem: async function () {
      this.viewItem = false
      if (await TC.updateData(this.editID)) {
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
      if (await TC.postData()) {
        this.isError = {has: true, msg: 'Successfully Added!', color: 'green'}
      } else {
        this.isError = {has: true, msg: 'Couldn\'t add data. Please, Try again!', color: 'red'}
      }
      setTimeout(() => {
        this.isError = {has: false, msg: '', color: ''}
      }, 3000)
    },
    deleteItem: async function (id) {
      if (await TC.deleteData(id)) {
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
