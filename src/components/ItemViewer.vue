<template>
  <div class="add-item-container">
    <form class="floating-add-component" @submit.prevent="submitData">
      <div class="close-component" @click="$emit('close')"></div>
      <h2 class="title">{{viewData.title}}</h2>
      <div class="main-container">
        <InputContainer
          v-for="input in viewData.addItem"
          :key="input.key"
          :inputData="input"
          :valid="valid"
          :dep="input.dep ? viewData.addItem[input.dep].value : null"
        />
      </div>
      <div class="button">
        <button type="submit">Done</button>
        <button type="reset">Clear</button>
      </div>
    </form>
    <ErrorMsg v-if="isError.has" :error="isError"/>
  </div>
</template>

<script>
import InputContainer from './InputContainer'
import ErrorMsg from './ErrorMsg'

export default {
  name: 'ItemViewer',
  props: ['viewData'],
  data () {
    return {
      isError: {has: false, msg: '', color: ''},
      valid: true
    }
  },
  methods: {
    submitData: function () {
      this.valid = true
      this.viewData.addItem.forEach(input => {
        if (input.required && input.value === '') {
          this.valid = false
        }
      })
      if (this.valid) {
        this.$emit('done')
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
.add-item-container{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #99999999;
  z-index: 100;
  display: grid;
  place-items: center;
  pointer-events: all;
}
.floating-add-component{
  max-width: 65vw;
  padding: 40px;
  background-color: #eee;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 0 #00000020;
  display: grid;
  grid-template-rows: 50px auto 30px;
  gap: 20px;
  place-items: center;
  animation: view-page .4s ease-out;
}
.close-component{
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: var(--blue-color);
  border-radius: 100%;
  transform: rotateZ(45deg);
  right: 5px;
  top: 5px;
}
.close-component::before,
.close-component::after{
  content: '';
  position: absolute;
  background-color: #eee;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform .2s ease-out;
}
.close-component::before{
  width: 20px;
  height: 2px;
}
.close-component::after{
  width: 2px;
  height: 20px;
}
.close-component:active{
  transform: rotateZ(45deg) scale(1.1);
}
.title{
  padding: 5px 20px;
  background-color: var(--blue-color);
  border-radius: 8px;
  color: #eee;
  width: fit-content;
}
.main-container{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.button{
  justify-self: end;
}
.scroller{
  overflow: auto;
}
.scroller::-webkit-scrollbar{
  width: 10px;
}
.scroller::-webkit-scrollbar-thumb{
  border-radius: 8px;
  background-color: #999;
}

@keyframes view-page {
  from {
    transform: translateY(-100%);
  }
  to{
    transform: translateY(0);
  }
}
</style>
