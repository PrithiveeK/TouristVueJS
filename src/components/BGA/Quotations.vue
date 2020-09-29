<template>
  <div class="data-list">
    <div class="top-part">
      <h1>{{quotation.title}}</h1>
      <button class="tag-click" @click="$router.push({name: 'BGANew'})">Create {{quotation.title}}</button>
    </div>
    <TableView :viewType="quotation" />
  </div>
</template>

<script>
import { Quotations } from '../../store/BGA'
import TableView from '../TableView'
import InputContainer from '../InputContainer'

export default {
  data () {
    return {
      quotation: Quotations.data
    }
  },
  components: {
    TableView,
    InputContainer
  }
}
</script>
