<template>
  <div class="data-list">
    <div class="top-part">
      <h1>{{phs.title}}</h1>
      <button class="tag-click" @click="$router.push({name: 'AGANew'})">Add {{phs.title}}</button>
    </div>
    <TableView :viewType="phs" />
  </div>
</template>

<script>
import TableView from '../TableView'
import { PlaceholderServices } from '../../store/AGA'

export default {
  data () {
    return {
      phs: PlaceholderServices.data
    }
  },
  mounted () {
    PlaceholderServices.fetchData()
  },
  components: {
    TableView
  }
}
</script>
