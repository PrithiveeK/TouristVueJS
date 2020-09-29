<template>
  <div style="padding: 10px;">
    <button style="margin: 10px 0;" @click="$router.go(-1)">Back</button>
    <div class="process-bar">
      <h3 :class="{'done' : which > 1, 'current': which === 1}">Service Details</h3>
      <div class="progress-gap"></div>
      <h3 :class="{'done' : which > 2, 'current': which === 2}">Price Details</h3>
      <div class="progress-gap"></div>
      <h3 :class="{'done' : which > 3, 'current': which === 3}">Supplier Details</h3>
      <div class="progress-gap"></div>
      <h3 :class="{'done' : which > 4, 'current': which === 4}">Terms and Conditions</h3>
    </div>
    <template v-if="which === 1">
      <ServiceDetails />
    </template>
    <template v-else-if="which === 2">
      <PriceDetails />
    </template>
    <template v-else-if="which === 3">
      <SupplierDetails />
    </template>
    <template v-else-if="which === 4">
      <TCDetails />
    </template>
  </div>
</template>

<script>
import ServiceDetails from './ServiceDetails'
import PriceDetails from './PriceDetails'
import SupplierDetails from './SupplierDetails'
import TCDetails from './TCDetails'

export default {
  data () {
    return {
      which: 1
    }
  },
  mounted () {
    this.matchRoute(this.$route.query.type)
  },
  methods: {
    matchRoute: function (type) {
      switch (type) {
        case 'price_details': this.which = 2; break
        case 'supplier_details': this.which = 3; break
        case 'tc_details': this.which = 4; break
        default: this.which = 1
      }
    }
  },
  watch: {
    $route (to, from) {
      this.matchRoute(to.query.type)
    }
  },
  components: {
    ServiceDetails,
    PriceDetails,
    SupplierDetails,
    TCDetails
  }
}
</script>

<style scoped>
.process-bar{
  display: flex;
  height: 40px;
  align-items: center;
  background-color: #20202033;
}
.process-bar > h3{
  height: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  flex: 1;
}
.progress-gap{
  position: relative;
  color: lightseagreen
}
.progress-gap::before{
  content: '';
  position: absolute;
  width: 5px;
  height: 21px;
  bottom: -1px;
  background-color: currentColor;
  transform: rotateZ(-20deg);
  box-shadow: -5px -2px black;
}
.progress-gap::after{
  content: '';
  position: absolute;
  width: 5px;
  height: 21px;
  top: -1px;
  background-color: currentColor;
  transform: rotateZ(20deg);
  box-shadow: -5px 2px black;
}
.done{
  background-color: lightseagreen;
}
.current{
  background-color: dimgray;
  color: white;
}
</style>
