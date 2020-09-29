<template>
  <div style="margin: 10px 0;">
    <div class="detail-container">
      <h1>Price Details</h1>
      <div class="place-container">
        <InputContainer
          :inputData="newPrice.currency"
          :valid="valid"
        />
        <InputContainer
          v-for="(input, i) in newPrice.priceDetails.addItem"
          :key="i"
          :inputData="input"
          :ref="input.key"
          :valid="valid"
        />
        <button @click="addPrice">Add</button>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="(item, j) in newPrice.priceDetails.addItem" :key="j">
            {{item.title}}
          </th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr class="nodata" v-if="newPrice.priceDetails.rows.length === 0">
          <td colspan="100%">None</td>
        </tr>
        <tr v-for="(row, i) in newPrice.priceDetails.rows" :key="i">
          <td v-for="(item, j) in newPrice.priceDetails.addItem" :key="j">
            {{row[item.key][0]}}
          </td>
          <td>
            <div class="icon" @click="deletePricing(i)">
              <div class="delete-icon"></div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <button class="proceed tag-click" @click="postData">Save & Continue</button>
    <Warning
      v-if="warn[0]"
      :msg="warn[1]"
      @confirm="warn[2](warn[3])"
      @cancel="warn=[false, '', null, null]"
    />
    <ErrorMsg v-if="isError.has" :error="isError" />
  </div>
</template>

<script>
import InputContainer from '../InputContainer'
import Warning from '../Warning'
import ErrorMsg from '../ErrorMsg'
import { AGAServices } from '../../store/AGA'

export default {
  data () {
    return {
      valid: true,
      warn: [false, '', null, null],
      newPrice: AGAServices.data.addItem,
      isError: {has: false, msg: '', color: ''}
    }
  },
  methods: {
    addPrice: function () {
      let newPriceDetail = {}
      this.valid = true
      this.newPrice.priceDetails.addItem.forEach(input => {
        if (input.required && input.value === '') {
          this.valid = false
        }
        newPriceDetail[input.key] = [this.$refs[input.key][0].$el.children[1].value, input.value]
      })
      if (this.valid) {
        this.newPrice.priceDetails.rows.push(newPriceDetail)
        this.valid = true
      }
    },
    initDelete: function (id) {
      this.warn = [true, 'Are you Sure?', this.deletePricing, id]
    },
    deletePricing: function (id) {
      this.newPrice.priceDetails.rows.splice(id, 1)
      this.warn = [false, '', null, null]
    },
    postData: function () {
      if (this.newPrice.priceDetails.rows.length === 0) {
        this.isError = {has: true, msg: 'Invalid Data', color: 'red'}
        setTimeout(() => {
          this.isError = {has: false, msg: '', color: ''}
        }, 2500)
      } else {
        this.isError = {has: false, msg: '', color: ''}
        AGAServices.postPriceData()
        this.$router.push({name: 'AddServices', query: {type: 'supplier_details'}})
      }
    }
  },
  components: {
    InputContainer,
    Warning,
    ErrorMsg
  }
}
</script>

<style scoped>
table{
  width: 100%;
  border-collapse: collapse;
}
thead{
  background-color: #ccc;
}
tr{
  width: 100%;
  height: 40px;
  cursor: default;
}
th, td{
  height: 40px;
  border-left: 2px solid #fff;
  padding: 0 5px;
}
tr > th:first-child,
tr > td:first-child{
  border: none;
}
tbody > tr:nth-child(odd){
  background-color: #bdf;
}
td:last-child{
  text-align: -webkit-center;
}
.nodata{
  height: 50px;
  text-align: center;
  font-size: 24px;
  color: #000;
}
.detail-container{
  display: grid;
  grid-template-columns: 30% 1fr;
}
.detail-container h1{
  padding: 10px 20px;
  border-radius: 8px;
  color: #eee;
  background-color: var(--blue-color);
  text-align: center;
  height: fit-content;
  position: sticky;
  top: 10px;
}
.place-container{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 10px;
}
.icon{
  width: 30px;
  height: 100%;
  display: flex;
  color: #888;
  border-radius: 4px;
}
.delete-icon{
  margin: auto;
  position: relative;
  width: 14px;
  height: 16px;
  background-color: currentColor;
  border-radius: 2px;
}
.delete-icon::before{
  content: '';
  position: absolute;
  width: 5px;
  height: 2px;
  background-color: currentColor;
  top: -1px;
  left: 50%;
  transform: translateX(-50%);
}
.delete-icon::after{
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #fff;
  top: 2px;
  left: 0;
}
.icon:hover > .delete-icon {
  color: red;
}
.proceed{
  float: right;
  margin: 10px 0;
}
</style>
