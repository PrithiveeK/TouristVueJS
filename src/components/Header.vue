<template>
  <header>
    <div class="title">
      <span>TOUR</span>
      <span>WITH</span>
      <span>ME</span>
      <img src="../assets/airplane-take-off.png" />
    </div>
    <div class="option-list-container">
      <template v-for="[i, link] of navBar">
        <router-link
          :key="i"
          class="option-item tag-click"
          :class="{'option-selected': link.isSelected($route.path)}"
          :to="link.route"
          v-if="link.show"
        >
          <div class="icon">
            <div :class="link.icon"></div>
          </div>
          <div class="label">{{link.title}}</div>
        </router-link>
      </template>
      <div style="flex:1;"></div>
      <router-link
        class="option-item tag-click"
        :to="{name: 'Login'}"
      >
        <div class="icon">
          <div class="logout"></div>
        </div>
        <div class="label">Logout</div>
      </router-link>
    </div>
  </header>
</template>

<script>
import NavBar from '../store/NavBar'

export default {
  name: 'Header',
  data () {
    return {
      navBar: Object.entries(NavBar.data),
      access: NavBar.access
    }
  },
  mounted () {
    NavBar.getAccess()
  }
}
</script>

<style scoped>
header{
  height: 100vh;
  width: 200px;
  background-color: #ccc;
  display: grid;
  grid-template-rows: 100px auto;
}
.icon{
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 2px solid currentColor;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  cursor: pointer;
  position: relative;
}
.icon::after{
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: center;
  background-color: currentColor;
  border-radius: 100%;
  transform: scale(0);
}
.icon:active::after{
  animation: click .2s ease-in-out;
}
.option-list-container{
  display: flex;
  flex-direction: column;
}
.option-item{
  display: flex;
  gap: 10px;
  padding: 0 5px;
  align-items: center;
  color: #555;
}
.option-selected{
  color: var(--blue-color);
  background-color: #fff;
  border-left: 5px solid;
}
.option-item:hover{
  background-color: #ddd;
}
.title{
  height: 64px;
  display: grid;
  grid-auto-flow: column;
  place-self: center;
  width: 100%;
}
.title > span:nth-child(1){
  grid-column: 1/2;
  font-size: 20px;
  justify-self: self-end;
  align-self: flex-end;
}
.title > span:nth-child(2){
  grid-column: 1/2;
  justify-self: self-end;
  font-size: 10px;
}
.title > span:nth-child(3){
  grid-row: 1/3;
  font-size: 50px;
  width: 55px;
}
img{
  grid-row: 1/3;
  width: 50px;
  height: 40px;
  margin-top: 10px;
}
.logout{
  width: 15px;
  height: 20px;
  border: 2px solid currentColor;
  border-radius: 2px;
  position: relative;
}
.logout::before{
  content: "";
  position: absolute;
  width: 6px;
  height: 6px;
  border-top: 2px solid currentColor;
  border-left: 2px solid currentColor;
  transform: rotateZ(-45deg);
  top: 4px;
  left: -4px;
}
.logout::after{
  content: "";
  position: absolute;
  width: 8px;
  height: 2px;
  background-color: currentColor;
  top: 7px;
  left: -3px;
}
.dashboard-icon{
  position: relative;
}
.dashboard-icon::before{
  content: '';
  position: absolute;
  width: 8px;
  height: 12px;
  top: -8px;
  left: -8px;
  background-color: currentColor;
  box-shadow: 9px 6px;
}
.dashboard-icon::after{
  content: '';
  position: absolute;
  width: 8px;
  height: 5px;
  top: -8px;
  left: 1px;
  background-color: currentColor;
  box-shadow: -9px 13px;
}
.master-data-icon{
  position: relative;
  width: 15px;
  height: 20px;
  border-radius: 2px;
  border: 2px solid currentColor;
}
.master-data-icon::after{
  content: '';
  position: absolute;
  width: 7px;
  height: 2px;
  top: 3px;
  left: 2px;
  background-color: currentColor;
  box-shadow: 0 4px, 0 8px;
}
.business-icon{
  position: relative;
  width: 10px;
  height: 18px;
  background-color: currentColor;
  left: -5px;
}
.business-icon::after{
  content: '';
  position: absolute;
  width: 2px;
  height: 2px;
  background-color: white;
  left: 2px;
  top: 2px;
  box-shadow: 4px 0 white,
              0 4px white, 4px 4px white,
              0 8px white, 4px 8px white,
              0 12px white, 4px 12px white,
              10px 6px currentColor, 14px 6px currentColor,
              10px 10px currentColor, 14px 10px currentColor;
}
.business-icon::before{
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  border: 2px solid currentColor;
  left: 8px;
  bottom: 0;
  background-color: white;
}
</style>
