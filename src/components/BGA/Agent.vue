<template>
  <div class="data-list">
    <div class="top-part">
      <h1>{{agent.title}}</h1>
      <button class="tag-click" @click="initAdd">Add {{agent.title}}</button>
    </div>
    <TableView
      :viewType="agent"
      @delete="deleteItem"
      @edit="initEdit"
    />
    <ItemViewer
      v-if="viewItem"
      :viewData="agent"
      @close="viewItem=false;editID=-1"
      @done="editID === -1 ? addItem() : editItem()"
    />
    <ErrorMsg v-if="isError.has" :error="isError"/>
  </div>
</template>

<script>
import { Agents } from '../../store/BGA'
import TableView from '../TableView'
import ItemViewer from '../ItemViewer'
import ErrorMsg from '../ErrorMsg'

export default {
  data () {
    return {
      editID: -1,
      isError: {has: false, msg: '', color: ''},
      agent: Agents.data,
      viewItem: false
    }
  },
  mounted () {
    Agents.fetchData()
  },
  methods: {
    initAdd: function () {
      this.agent.addItem.forEach((input) => {
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
      if (await Agents.postData()) {
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
