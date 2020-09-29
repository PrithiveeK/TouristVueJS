<template>
  <div style="padding: 10px;">
    <div class="type-selector">
      <div class="select-tag" tabindex="0">
        <p>{{types[TSelected].title}}</p>
        <i class="selector-arrow"></i>
      </div>
      <ul class="selector-list scroller">
        <li
          v-for="(type, i) in types"
          @click="changeType(i)"
          :key="i"
        >
          {{type.title}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      TSelected: 0,
      types: []
    }
  },
  methods: {
    changeType: function (id) {
      // this.$router.replace({name: 'AGANew', query: {type: this.types[id].title, id}})
    }
  },
  watch: {
    $route (to, from) {
      // this.types = Types[to.params.dataContent].data.types
      // this.TSelected = to.query.id || 0
    }
  }
}
</script>

<style scoped>
.type-selector{
  position: relative;
  font-size: 18px;
  width: 200px;
}
.selector{
  width: 100%;
  height: 100%;
  border: 2px solid;
  border-radius: 4px;
  display: flex;
  place-items: center;
  padding: 0 10px;
  cursor: pointer;
}
.selector:focus > .selector-arrow{
  transform: rotateZ(45deg);
}
.selector:focus ~ .selector-list{
  height: 120px;
  overflow: auto;
  border-style: solid;
  pointer-events: all;
}
.selector > p{
  flex: 1;
}
.selector-arrow{
  display: block;
  width: 10px;
  height: 10px;
  border-left: 2px solid;
  border-top: 2px solid;
  border-top-left-radius: 2px;
  transform: rotateZ(225deg);
  transition: transform .25s linear;
}
.selector-list{
  position: absolute;
  top: 100%;
  width: 100%;
  overflow: hidden;
  height: 0;
  background-color: #fff;
  border-width: 2px;
  border-radius: 4px;
  border-color: transparent #555 #555 #555;
  transition: height .25s linear;
  z-index: 20;
}
.selector-list > li {
  line-height: 25px;
  cursor: pointer;
  padding: 0 10px;
}
.selector-list > li:hover{
  background: #58835850;
}
</style>
