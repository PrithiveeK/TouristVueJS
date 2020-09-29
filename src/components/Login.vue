<template>
  <div class="container">
    <div class="login-container">
      <div class="title">
        <span>TOUR</span>
        <span>WITH</span>
        <span>ME</span>
        <img src="../assets/airplane-take-off.png" />
      </div>
      <div class="divider"></div>
      <form class="login-form" @submit.prevent="login">
        <input type="text" placeholder="Email" v-model="email" />
        <input type="password" placeholder="Password" v-model="password" />
        <button type="submit">
          <span v-if="loginBtn" class="loading">
            <i></i>
            <i></i>
            <i></i>
          </span>
          <span v-else>Login</span>
        </button>
      </form>
    </div>
    <ErrorMsg v-if="isError.has" :error="isError"/>
  </div>
</template>

<script>
import ErrorMsg from './ErrorMsg'
import { RAILS } from '../store/apiProxy'

export default {
  name: 'Login',
  data () {
    return {
      loginBtn: false,
      isError: {has: false, msg: '', color: ''},
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      this.loginBtn = true
      fetch(RAILS + '/api/users/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({authentication: {email: this.email, password: this.password}})
      }).then(res => res.json())
        .then(data => {
          if (data.code === 200) {
            this.isError = {has: false, msg: '', color: ''}
            localStorage.setItem('liu', data.data.token)
            this.$router.push({name: 'Dashboard'})
          } else {
            this.isError = {has: true, msg: data.msg, color: 'red'}
            console.log(data.msg)
          }
        })
        .catch(err => {
          this.isError = {has: true, msg: 'Something went wrong. Please, Try again!', color: 'red'}
          console.log(err)
        })
        .finally(() => {
          setTimeout(() => {
            this.loginBtn = false
            this.isError = {has: false, msg: '', color: ''}
          }, 3000)
        })
    }
  },
  components: {
    ErrorMsg
  }
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(../assets/pexels-mihis-alex-21014.jpg);
  background-size: cover;
}
.login-container{
  width: 800px;
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(5px);
  border-radius: 8px;
  font-family: 'Mirza', cursive;
}
.title{
  width: 48%;
  height: 100%;
  color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  position: relative;
  /* font-family: 'Monoton', cursive; */
}
.title > span:nth-child(2){
  font-size: 20px;
}
.divider{
  width: 2px;
  height: 90%;
  background-color: #eee;
}
.login-form{
  width: 48%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
input, button{
  width: 90%;
  height: 40px;
  font-size: 22px;
  border-radius: 4px;
  border: 1px solid #aaa;
  outline: none;
  padding: 10px;
}
button{
  background-color: var(--green-color);
  color: #fff;
  border: 1px;
  font-size: 30px;
  padding: 0;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title > img{
  position: absolute;
  width: 80px;
  height: 55px;
  top: 150px;
  left: 100px;
}
.loading{
  height: 100%;
  margin: 5px;
  display: flex;
  align-items: flex-end;
}
.loading > i{
  display: block;
  margin: 5px 2px;
  width: 5px;
  height: 5px;
  background-color: tomato;
  animation: jump .3s ease-out alternate infinite;
}
.loading > i:nth-child(2){
  animation-delay: .1s;
}
.loading > i:nth-child(3){
  animation-delay: .2s;
}
@keyframes jump {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-20px);
  }
}
</style>
