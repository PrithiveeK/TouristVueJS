<template>
  <div>
    <div class="top-part">
      <h1>Suppliers</h1>
      <button class="tag-click" @click="$router.push({name: 'AGANew'})">Add Suppliers</button>
    </div>
    <div class="data-list">
      <div class="top-part">
        <h3>{{suppliers.preferred.title}}</h3>
      </div>
      <TableView :viewType="{...suppliers.preferred,input: suppliers.input}" />
    </div>
    <div class="data-list">
      <div class="top-part">
        <h3>{{suppliers.other.title}}</h3>
      </div>
      <TableView :viewType="{...suppliers.other, input: suppliers.input}" />
    </div>
  </div>
</template>

<script>
import TableView from '../TableView'
import { Suppliers } from '../../store/AGA'

export default {
  data () {
    return {
      suppliers: Suppliers.data
    }
  },
  mounted () {
    Suppliers.fetchData()
  },
  components: {
    TableView
  }
}
</script>
