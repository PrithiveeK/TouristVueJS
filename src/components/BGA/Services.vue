<template>
  <div class="data-list">
    <div class="top-part">
      <h1>{{services.title}}</h1>
    </div>
    <TableView :viewType="services" />
  </div>
</template>

<script>
import { BGAServices } from '../../store/BGA'
import TableView from '../TableView'

export default {
  data () {
    return {
      services: BGAServices.data
    }
  },
  mounted () {
    BGAServices.fetchData()
  },
  components: {
    TableView
  }
}
</script>
