<template>
  <div class="data-list">
    <div class="top-part">
      <h1>Connected Services</h1>
    </div>
    <TableView :viewType="csData"/>
  </div>
</template>

<script>
import { ConnectedServices } from '../../store/SuperCompany'
import TableView from '../TableView'
export default {
  data () {
    return {
      csData: ConnectedServices.data
    }
  },
  components: {
    TableView
  }
}
</script>
