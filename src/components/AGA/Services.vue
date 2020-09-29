<template>
  <div class="data-list">
    <div class="top-part">
      <h1>{{services.title}}</h1>
      <button class="tag-click" @click="$router.push({name: 'AddServices'})">Add {{services.title}}</button>
    </div>
    <TableView :viewType="services" />
  </div>
</template>

<script>
import TableView from '../TableView'
import { AGAServices } from '../../store/AGA'

export default {
  data () {
    return {
      services: AGAServices.data
    }
  },
  mounted () {
    AGAServices.fetchData()
  },
  components: {
    TableView
  }
}
</script>
