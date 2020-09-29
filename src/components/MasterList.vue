<template>
  <div>
    <ViewList />
    <FilterML />
    <div class="data-list">
      <div class="top-part">
        <h1>{{dataViewType.data.types[TSelected].title}} Data List</h1>
        <button class="tag-click" @click="initAdd">
          Add {{dataViewType.data.types[TSelected].title}}
        </button>
      </div>
      <TableView
        :viewType="{...dataViewType.data.types[TSelected], input: filterList}"
        @delete="deleteItem"
        @edit="initEdit"
        @filter="filterData"
        @clear="clearFilter"
      />
    </div>
    <ItemViewer
      v-if="viewItem"
      :viewData="dataViewType.data.types[TSelected]"
      @close="viewItem=false;editID=-1"
      @done="editID === -1 ? addItem() : editItem()"
    />
    <ErrorMsg v-if="isError.has" :error="isError"/>
  </div>
</template>

<script>
import ViewList from './ViewList'
import ItemViewer from './ItemViewer'
import MasterStore from '../store/MasterList'
import FilterML from './FilterML'
import TableView from './TableView'
import ErrorMsg from './ErrorMsg'

export default {
  data () {
    return {
      loading: false,
      editID: -1,
      isError: {has: false, msg: '', color: ''},
      dataViewType: MasterStore[this.$route.params.dataContent],
      TSelected: this.$route.query.id || 0,
      viewItem: false,
      filterList: [
        {title: 'ID', selector: false, key: 'id', type: 'text', value: null, setVal: function (val) { this.value = val }},
        {title: 'Name', selector: false, key: 'name', type: 'text', value: null, setVal: function (val) { this.value = val }}
      ],
      filter: ''
    }
  },
  watch: {
    $route (to, from) {
      this.dataViewType = MasterStore[to.params.dataContent]
      this.TSelected = to.query.id || 0
      this.fetchItem()
    }
  },
  mounted () {
    this.fetchItem()
  },
  updated () {
    // console.log(this.dataViewType.data.types[this.TSelected].addItem[0].value)
  },
  methods: {
    fetchItem: function () {
      this.loading = true
      this.dataViewType.fetchData(this.TSelected, this.filter).then(() => {
        this.loading = false
      })
    },
    initAdd: function () {
      const item = this.dataViewType.data.types[this.TSelected]
      item.addItem.forEach(inputEle => {
        inputEle.setVal('')
      })
      this.viewItem = true
    },
    addItem: async function () {
      this.viewItem = false
      if (await this.dataViewType.postData(this.TSelected)) {
        this.isError = {has: true, msg: 'Successfully Added!', color: 'green'}
      } else {
        this.isError = {has: true, msg: 'Couldn\'t Add data. Please, Try again!', color: 'red'}
      }
      setTimeout(() => {
        this.isError = {has: false, msg: '', color: ''}
      }, 3000)
    },
    deleteItem: async function (id) {
      if (await this.dataViewType.deleteData(this.TSelected, id)) {
        this.isError = {has: true, msg: 'Successfully Deleted!', color: 'green'}
      } else {
        this.isError = {has: true, msg: 'Couldn\'t Delete data. Please, Try again!', color: 'red'}
      }
      setTimeout(() => {
        this.isError = {has: false, msg: '', color: ''}
      }, 3000)
    },
    initEdit: function (id) {
      this.editID = id
      const item = this.dataViewType.data.types[this.TSelected]
      item.addItem.forEach(inputEle => {
        inputEle.setVal(item.rows[id][inputEle.key])
      })
      this.viewItem = true
    },
    editItem: async function () {
      this.viewItem = false
      if (await this.dataViewType.editData(this.TSelected, this.editID)) {
        this.isError = {has: true, msg: 'Successfully Updated!', color: 'green'}
      } else {
        this.isError = {has: true, msg: 'Couldn\'t Update data. Please, Try again!', color: 'red'}
      }
      this.editID = -1
      setTimeout(() => {
        this.isError = {has: false, msg: '', color: ''}
      }, 3000)
    },
    filterData: function () {
      this.filter = ''
      this.filterList.forEach(input => {
        if (input.value) {
          this.filter += input.value.replaceAll(' ', '%')
        }
      })
      this.fetchItem()
    },
    clearFilter: function () {
      if (this.filter) {
        this.filter = ''
        this.fetchItem()
      }
    }
  },
  components: {
    FilterML,
    TableView,
    ItemViewer,
    ViewList,
    ErrorMsg
  }
}
</script>
