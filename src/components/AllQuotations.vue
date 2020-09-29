<template>
  <div>
    <ViewList />
    <TableView :viewType="dataView"/>
  </div>
</template>

<script>
import ViewList from './ViewList'
import TableView from './TableView'
import QuotationsData from '../store/Quotations'

export default {
  data () {
    return {
      dataView: QuotationsData.data
    }
  },
  components: {
    TableView,
    ViewList
  }
}
</script>
