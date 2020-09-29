<template>
  <div class="data-list">
    <div class="top-part">
      <h1>{{services99a.title}}</h1>
    </div>
    <TableView :viewType="services99a" />
  </div>
</template>

<script>
import TableView from '../TableView'
import { Services99A } from '../../store/AGA'

export default {
  data () {
    return {
      services99a: Services99A.data
    }
  },
  mounted () {
    Services99A.fetchData()
  },
  components: {
    TableView
  }
}
</script>
