<template>
  <div class="data-list">
    <div class="top-part">
      <h1>Details of {{details.row.name}}</h1>
      <button class="tag-click" @click="editDetails">{{edit ? 'Done' : 'Edit'}}</button>
    </div>
    <div class="spinner-container" v-if="loading">
      <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
      </div>
    </div>
    <form class="filter-container" v-else>
      <InputContainer
        v-for="(input, i) in details.input"
        :key="i"
        :inputData="input"
        :class="{'editable': !edit}"
      />
    </form>
  </div>
</template>

<script>
import InputContainer from '../InputContainer'
import { Details } from '../../store/SuperCompany'

export default {
  data () {
    return {
      loading: false,
      edit: false,
      details: Details.data
    }
  },
  mounted () {
    this.loading = true
    Details.setID(this.$route.query.id || 1)
    Details.fetchData().then(() => {
      this.loading = false
    })
  },
  methods: {
    editDetails: function () {
      if (this.edit) {
        this.loading = true
        Details.updateData().then(() => {
          this.loading = false
        })
      }
      this.edit = !this.edit
    }
  },
  components: {
    InputContainer
  }
}
</script>

<style scoped>
form{
  gap: 30px;
}
.editable{
  pointer-events: none;
}
.spinner-container{
  display: grid;
  place-items: center;
}
.spinner {
  margin: auto;
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 10px;
}
.spinner > div {
  background-color: #777;
  height: 100%;
  width: 6px;
  display: inline-block;
  animation: sk-stretchdelay 1.2s infinite ease-in-out;
}
.spinner .rect2 {
  animation-delay: -1.1s;
}
.spinner .rect3 {
  animation-delay: -1.0s;
}
.spinner .rect4 {
  animation-delay: -0.9s;
}
.spinner .rect5 {
  animation-delay: -0.8s;
}
@keyframes sk-stretchdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4);
  }  20% {
    transform: scaleY(1.0);
  }
}
</style>
