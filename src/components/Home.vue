<template>
  <div class="body">
    <Header />
    <router-view class="main"/>
  </div>
</template>

<script>
import Header from './Header'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>

<style>
.body{
  display: grid;
  grid-template-columns: 200px auto;
}
.main{
  padding: 0 10px 10px;
  overflow: auto;
  height: 100vh;
  scrollbar-color: #999 #00000040;
  scrollbar-width: auto;
}
.main::-webkit-scrollbar{
  width: 8px;
}
.main::-webkit-scrollbar-thumb{
  background-color: #999;
  border-radius: 8px;
}
</style>
