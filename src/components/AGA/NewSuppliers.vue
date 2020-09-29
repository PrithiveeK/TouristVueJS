<template>
  <div class="details">
    <h1>Basic Details</h1>
    <div class="place-container">
      <InputContainer
        v-for="(input, i) in newSuppliers.basic"
        :key="i"
        :inputData="input"
      />
    </div>
    <h1>Bank Details</h1>
    <div class="place-container">
      <InputContainer
        v-for="(input, i) in newSuppliers.bank"
        :key="i"
        :inputData="input"
      />
    </div>
    <button @click="addItem">Save</button>
    <ErrorMsg v-if="isError.has" :error="isError" />
  </div>
</template>

<script>
import { Suppliers } from '../../store/AGA'
import InputContainer from '../InputContainer'
import ErrorMsg from '../ErrorMsg'

export default {
  data () {
    return {
      isError: {has: false, msg: '', color: ''},
      newSuppliers: Suppliers.data.addItem
    }
  },
  mounted () {
    this.newSuppliers.basic.forEach(input => {
      input.setVal('')
    })
    this.newSuppliers.bank.forEach(input => {
      input.setVal('')
    })
  },
  methods: {
    addItem: async function () {
      let valid = true
      this.newSuppliers.basic.forEach(input => {
        if (input.required && input.value === '') {
          valid = false
        }
      })
      this.newSuppliers.bank.forEach(input => {
        if (input.required && input.value === '') {
          valid = false
        }
      })
      if (valid) {
        if (await Suppliers.postData()) {
          this.isError = {has: true, msg: 'Successfully Added!', color: 'green'}
          this.$router.go(-1)
        } else {
          this.isError = {has: true, msg: 'Couldn\'t Add data. Please, Try again!', color: 'red'}
        }
        setTimeout(() => {
          this.isError = {has: false, msg: '', color: ''}
        }, 3000)
      } else {
        this.isError = {has: true, msg: 'Invalid Data', color: 'red'}
        setTimeout(() => {
          this.isError = {has: false, msg: '', color: ''}
        }, 2000)
      }
    }
  },
  components: {
    InputContainer,
    ErrorMsg
  }
}
</script>

<style scoped>
button {
  justify-self: end;
  font-size: 24px;
}
</style>
