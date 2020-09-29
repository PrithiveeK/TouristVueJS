<template>
  <div class="dashboard" @scroll="scrollSection">
    <section class="poster">
      <div class="poster-data">
        <div class="title">
          <span>TOUR</span>
          <span>WITH</span>
          <span>ME</span>
        </div>
      </div>
      <img class="poster-img" src="../assets/4012176.jpg" alt="" />
    </section>
    <section :class="{'fade-in': whichSection === 0}">
      <article class="overall-data">
        <h3>OVER</h3>
        <h3>{{overallData.services || "13,000+"}}</h3>
        <h1>SERVICES</h1>
      </article>
      <span class="btw-word">IN</span>
      <article class="overall-data">
        <h3>OVER</h3>
        <h3>{{overallData.countries || "400+"}}</h3>
        <h1>COUNTRIES</h1>
      </article>
      <span class="btw-word">AND</span>
      <article class="overall-data">
        <h3>OVER</h3>
        <h3>{{overallData.cities || "2,000+"}}</h3>
        <h1>CITIES</h1>
      </article>
    </section>
    <section :class="{'fade-in': whichSection === 1}">
      <div class="service-country">
        <h1>{{country_name}}</h1>
        <button @click="fetchRandomService">Change</button>
      </div>
      <div class="service-list noscrollbar" :ref="'services'" @scroll="popArticle">
        <article
          class="service-item"
          v-for="(service, i) in services"
          :key="service.id"
          :class="{'current-article': whichArticle === i}"
          :style="{'background-image': `url(${require(`@/assets/${service.service_type_id}.jpg`)})`}"
        >
          <div class="content">
            <h1>{{service.name}}</h1>
            <p>{{service.city_name}}</p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import { GO } from '../store/apiProxy'

export default {
  name: 'Dashboard',
  data () {
    return {
      whichArticle: 0,
      whichSection: 0,
      overallData: {},
      services: [],
      country_name: 'Country Name'
    }
  },
  mounted () {
    this.fetchOverallData()
    this.fetchRandomService()
  },
  methods: {
    scrollSection: function (event) {
      this.whichSection = Math.floor(event.target.scrollTop / 400)
    },
    popArticle: function (event) {
      this.whichArticle = Math.ceil(event.target.scrollLeft / 310)
    },
    fetchOverallData: function () {
      fetch(`${GO}/api/overall`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('liu')
        }
      }).then(res => res.json())
        .then(data => {
          if (data.code === 200) {
            this.overallData = data.data
          } else {
            console.log(data.msg)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchRandomService: function () {
      fetch(`${GO}/api/random`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('liu')
        }
      }).then(res => res.json())
        .then(data => {
          if (data.code === 200) {
            this.services = data.data
            this.country_name = data.data[0].country_name
          } else {
            console.log(data.msg)
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.dashboard{
  background-image: url("../assets/pexels-asad-photo-maldives-1266831.jpg");
  /* background-image: url("../assets/pexels-c-cagnin-2007401.jpg"); */
  background-size: cover;
}
section{
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: all 1s;
}
.fade-in{
  opacity: 0;
  transform: translateY(-30%);
  transition: all 1s;
}
.poster-img{
  height: inherit;
  mix-blend-mode: multiply;
  filter: saturate(20);
  visibility: hidden;
}
.poster-data{
  flex: 1;
  color: white;
  filter: drop-shadow(2px 4px 6px #00000070);
}
.overall-data{
  display: grid;
  place-items: center;
  font-size: 40px;
  background-color: var(--blue-color);
  filter: opacity(.8);
  color: white;
}
.btw-word{
  font-size: 26px;
  color: whitesmoke;
  filter: drop-shadow(2px 4px 6px #00000070);
}
.service-country{
  flex-basis: 50%;
  font-size: 50px;
  color: whitesmoke;
  filter: drop-shadow(2px 4px 6px #00000070);
}
.service-list{
  width: 100%;
  height: inherit;
  display: grid;
  grid-auto-flow: column;
  gap: 20px;
  overflow: auto;
  padding: 0 20px;
  align-items: center;
}
article{
  width: 300px;
  height: 400px;
  border-radius: 4px;
  transition: all .5s;
  box-shadow: 0 0 10px #00000038;
}
.service-item{
  background-size: cover;
  display: flex;
}
.content{
  width: inherit;
  height: fit-content;
  align-self: flex-end;
  padding: 20px;
  background-color: #00000030;
  color: var(--blue-color);
}
.current-article{
  transform: scale(1.2) translateX(20px);
}
.current-article ~ *{
  transform: translateX(55px);
}
.noscrollbar::-webkit-scrollbar{
  display: none;
}
.title{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 90px;
  font-family: 'Mirza', cursive;
}
.title > span:nth-child(2){
  font-size: 30px;
}
</style>
