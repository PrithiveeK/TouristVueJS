<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mirza:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
:root{
  --blue-color: #1089ff;
  --green-color: lime;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
a{
  text-decoration: none;
}
a:any-link{
  color: black;
}
ul{
  list-style: none;
}
button {
  border: none;
  background-color: var(--blue-color);
  color: #eee;
  border-radius: 4px;
  font-size: 18px;
}
.data-list  h1{
  padding: 10px 0;
}
.top-part{
  display: flex;
}
.top-part > h1{
  flex: 1;
}
.top-part > button{
  padding: 0 20px;
  margin: 10px 0;
}
.filter-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 20px 0;
}
button {
  padding: 0 20px;
  height: 30px;
  align-self: flex-end;
  outline: none;
}

.add-icon{
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 100%;
  position: relative;
  margin: 5px;
}
.add-icon::before,
.add-icon::after{
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--blue-color);
}
.add-icon::before{
  width: 10px;
  height: 30px;
}
.add-icon::after{
  width: 30px;
  height: 10px;
}
.tag-click{
  position: relative;
  overflow: hidden;
  outline: none;
}
.tag-click::after{
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: #aaaaaa70;
  transform: scale(0);
}
.tag-click:active::after{
  animation: clicked 1s ease-out;
}

@keyframes clicked {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  1% {
    opacity: 1;
  }
  70% {
    transform: scale(50);
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
