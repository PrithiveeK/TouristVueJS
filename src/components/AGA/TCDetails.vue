<template>
  <div>
    <h3>Choose Terms And Conditions</h3>
    <TableView
      :viewType="newTC"
      @view="selectTC"
    />
    <button class="proceed tag-click" @click="proceed">Finish</button>
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
import { TC } from '../../store/SuperCompany'
import { AGAServices } from '../../store/AGA'

export default {
  data () {
    return {
      warn: [false, '', null],
      newTC: TC.data,
      tcId: -1
    }
  },
  mounted () {
    TC.fetchData()
  },
  methods: {
    selectTC: function (event) {
      AGAServices.data.addItem.tcId = this.newTC.rows[event].id
      const sTC = this.newTC.rows[event].subject
      this.warn = [true, sTC, this.mapTC]
    },
    mapTC: function () {
      AGAServices.postTCData()
      this.proceed()
    },
    proceed: function () {
      this.$router.push({name: 'AGA', params: {dataContent: 'services'}})
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
