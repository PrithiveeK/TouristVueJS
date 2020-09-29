<template>
  <div class="error-container">
    <div class="error-msg" :style="{'background-color': error.color}">
      {{error.msg}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style scoped>
.error-container{
  position: fixed;
  bottom: 10px;
  left: 0;
  width: 100vw;
  height: 60px;
  display: grid;
  place-items: center;
}
.error-msg{
  height: 90%;
  color: #fff;
  padding: 0 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: viewError .2s ease-in-out;
}
@keyframes viewError {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
