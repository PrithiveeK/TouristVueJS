<template>
  <div>
    <h3>Choose Suppliers</h3>
    <TableView
      :viewType="{tHead: newSupplier.preferred.tHead,
        td: newSupplier.preferred.td,
        rows: allSuppliers
      }"
      @view="selectSupplier"
    />
    <button class="proceed tag-click" @click="proceed">Continue</button>
    <Warning
      v-if="warn[0]"
      :msg="warn[1]"
      @confirm="warn[2]"
      @cancel="warn=[false, '', null]"
    />
  </div>
</template>

<script>
import TableView from '../TableView'
import Warning from '../Warning'
import { AGAServices, Suppliers } from '../../store/AGA'

export default {
  data () {
    return {
      warn: [false, '', null],
      newSupplier: Suppliers.data,
      supplierId: -1
    }
  },
  mounted () {
    Suppliers.fetchData()
  },
  methods: {
    selectSupplier: function (event) {
      AGAServices.data.addItem.supplierId = this.allSuppliers[event].id
      const ss = this.allSuppliers[event].name
      this.warn = [true, ss, this.mapSupplier]
    },
    mapSupplier: function () {
      AGAServices.postSupplierData()
      this.proceed()
    },
    proceed: function () {
      this.$router.push({name: 'AddServices', query: {type: 'tc_details'}})
    }
  },
  computed: {
    allSuppliers () {
      return this.newSupplier.preferred.rows.concat(this.newSupplier.other.rows)
    }
  },
  components: {
    TableView,
    Warning
  }
}
</script>

<style scoped>
h3{
  margin: 10px 0;
}
.proceed{
  float: right;
  margin: 10px 0;
}
</style>
