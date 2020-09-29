<template>
  <div class="data-list">
    <div class="top-part">
      <h1>{{subAgent.title}}</h1>
      <button class="tag-click" @click="viewItem=true">Add {{subAgent.title}}</button>
    </div>
    <TableView
      :viewType="subAgent"
      @delete="deleteItem"
      @edit="initEdit"
    />
    <ItemViewer
      v-if="viewItem"
      :viewData="subAgent"
      @close="viewItem=false;editID=-1"
      @done="editID === -1 ? addItem() : editItem()"
    />
    <ErrorMsg v-if="isError.has" :error="isError"/>
  </div>
</template>

<script>
import { SubAgents } from '../../store/BGA'
import TableView from '../TableView'
import ErrorMsg from '../ErrorMsg'
import ItemViewer from '../ItemViewer'

export default {
  data () {
    return {
      editID: -1,
      isError: {has: false, msg: '', color: ''},
      subAgent: SubAgents.data,
      viewItem: false
    }
  },
  mounted () {
    SubAgents.fetchData()
  },
  methods: {
    initAdd: function () {
      this.subAgent.addItem.forEach((input) => {
        input.setVal('')
      })
      this.viewItem = true
    },
    initEdit: function (id) {
    },
    editItem: async function () {
    },
    addItem: async function () {
      this.viewItem = false
      if (await SubAgents.postData()) {
        this.isError = {has: true, msg: 'Successfully Added!', color: 'green'}
      } else {
        this.isError = {has: true, msg: 'Couldn\'t Add data. Please, Try again!', color: 'red'}
      }
      setTimeout(() => {
        this.isError = {has: false, msg: '', color: ''}
      }, 3000)
    },
    deleteItem: async function (id) {
    }
  },
  components: {
    TableView,
    ItemViewer,
    ErrorMsg
  }
}
</script>
