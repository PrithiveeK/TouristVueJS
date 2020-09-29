<template>
  <div class="type-selector">
    <div class="selector" tabindex="0">
      <p>{{types[TSelected].title}}</p>
      <i class="selector-arrow"></i>
    </div>
    <ul class="selector-list scroller">
      <li
        v-for="(type, i) in types"
        @click="changeType(i, $event)"
        :key="i"
        tabindex="0"
        class="tag-click"
      >
        {{type.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import Types from '../store/MasterList'

export default {
  data () {
    return {
      TSelected: this.$route.query.id || 0,
      types: Types[this.$route.params.dataContent].data.types
    }
  },
  methods: {
    changeType: function (id, event) {
      this.$router.replace({name: 'MasterData', query: {type: this.types[id].title, id}})
      event.target.blur()
    }
  },
  watch: {
    $route (to, from) {
      this.types = Types[to.params.dataContent].data.types
      this.TSelected = to.query.id || 0
    }
  }
}
</script>

<style scoped>
.type-selector{
  position: relative;
  font-size: 18px;
  width: 250px;
}
.selector{
  width: 100%;
  height: 100%;
  border: 2px solid;
  border-radius: 8px;
  display: flex;
  place-items: center;
  padding: 5px 10px;
  cursor: pointer;
}
.selector:focus > .selector-arrow{
  transform: rotateZ(45deg);
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
  top: -2px;
  width: 100%;
  overflow: hidden;
  max-height: 0;
  background-color: #fff;
  transition: max-height .25s linear;
  z-index: 20;
  border-radius: 4px;
  box-shadow: 0 0 10px #00000050;
}
.selector:focus ~ .selector-list,
.selector-list:focus-within {
  max-height: 120px;
  overflow: auto;
  pointer-events: all;
}
.selector-list > li {
  line-height: 25px;
  cursor: pointer;
  padding: 0 10px;
}
.selector-list > li:hover{
  background: #58835850;
}
.scroller {
  scrollbar-color: #999 #00000040;
  scrollbar-width: thin;
}
.scroller::-webkit-scrollbar{
  width: 5px;
}
.scroller::-webkit-scrollbar-thumb{
  background-color: #999;
  border-radius: 4px;
}
</style>
