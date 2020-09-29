<template>
  <div class="dialog-box-container">
    <div class="dialog-box">
      {{msg || 'Are You Sure?'}}
      <div class="button-container">
        <div class="button" @click="$emit('cancel')">Cancel</div>
        <div class="button" @click="$emit('confirm')">Confirm</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['msg']
}
</script>

<style scoped>
.dialog-box-container{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #00000090;
  pointer-events: all;
  z-index: 100;
}
.dialog-box{
  position: fixed;
  top: calc(50% - 60px);
  left: calc(50% - 150px);
  width: 300px;
  height: 120px;
  background-color: #eee;
  border-radius: 4px;
  box-shadow: 0 0 12px 3px #00000060;
  display: grid;
  padding: 20px;
  align-items: center;
  cursor: default;
  animation: view .3s ease;
}
.button-container{
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
.button{
  height: fit-content;
  padding: 4px 6px;
  border-radius: 2px;
  transition: all .2s;
}
.button:hover{
  box-shadow: 0 1px 2px #00000060;
}

@keyframes view {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
</style>
