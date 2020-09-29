<template>
  <div>
    <template v-if="inputData.type === 'checkbox'">
      <div class="checkbox-container">
        <label>{{inputData.title}}</label>
        <div
          v-for="i in [0,1]"
          :key="i"
          class="checkbox tag-click"
          :class="{'checkbox-checked': dVal[i]}"
          @click="checkThisBox(i)"
        >
          <div>{{inputData.selector[i]}}</div>
          <i></i>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="input-container" :class="{'selector': inputData.selector}">
        <label>{{inputData.title.toUpperCase()}}</label>
        <input
          :type="inputData.type"
          :placeholder="inputData.ph || `${inputData.selector ? 'Select' : 'Enter'} ${inputData.title}`"
          class="input-tag"
          :class="{'fill-input': fill | (inputData.required & inputData.value === '' & valid === false)}"
          :value="dVal"
          @change="inputData.selector || inputData.setVal($event.target.value)"
          @blur="seeIfFilled"
        />
        <ul v-if="inputData.selector" class="selector-list scroller" tabindex="-1">
          <template v-for="(row, i) in rows.data">
            <li
              v-if="isDep(row)"
              :key="i"
              @click="changeVal(row)"
              :id="row[rows.v]"
              :ref="row[rows.v]"
              tabindex="0"
              class="tag-click"
            >{{row[rows.t]}}</li>
          </template>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
import SelectorOptions from '../store/SelectorOptions'

export default {
  props: ['inputData', 'valid', 'dep'],
  data () {
    return {
      dVal: this.inputData.value,
      fill: false,
      rows: {t: '', v: '', data: []}
    }
  },
  mounted () {
    if (this.inputData.selector === true) {
      this.setRows()
    } else {
      this.dVal = this.inputData.value
    }
  },
  updated () {
    if (this.inputData.selector === true) {
      this.dVal = this.$refs[this.inputData.value + ''] ? this.$refs[this.inputData.value + ''][0].innerText : this.dVal
    } else {
      this.dVal = this.inputData.value
    }
  },
  methods: {
    checkThisBox: function (i) {
      this.inputData.setVal(!this.dVal[i], i)
      this.dVal = i ? [this.dVal[0], !this.dVal[1]] : [!this.dVal[0], this.dVal[1]]
    },
    setRows: function () {
      SelectorOptions[this.inputData.key].getData()
        .then((data) => {
          this.rows = data
        })
    },
    seeIfFilled: function (event) {
      this.fill = this.inputData.required && event.target.value === ''
    },
    changeVal: function (row) {
      this.dVal = row[this.rows.t]
      this.inputData.setVal(row[this.rows.v])
      this.fill = false
    },
    isDep: function (row) {
      if (this.rows.d) {
        return this.dep == null || row[this.rows.d] === this.dep
      }
      return true
    }
  }
}
</script>

<style scoped>
.checkbox-container{
  display: flex;
  align-items: center;
  gap: 10px;
  width: 350px;
}
.checkbox-container > label{
  flex: 1;
}
.checkbox{
  color: red;
  height: 60px;
  display: grid;
  grid-template-rows: 25px 25px;
  place-items: center;
  padding: 5px;
  outline: none;
  cursor: default;
  border-radius: 4px;
  transition: all .2s;
}
.checkbox:hover{
  box-shadow: 0 1px 2px #00000080;
}
i{
  position: relative;
  transform: translateX(-10px);
}
i::before{
  content: '';
  position: absolute;
  display: block;
  width: 20px;
  height: 5px;
  background-color: currentColor;
  transform: rotateZ(45deg);
  top: 0;
  transition: all .5s;
}
i::after{
  content: '';
  position: absolute;
  display: block;
  width: 20px;
  height: 5px;
  background-color: currentColor;
  transform: rotateZ(-45deg);
  transition: all .5s;
}
.checkbox-checked{
  color: green;
}
.checkbox-checked > i::before{
  width: 10px;
  top: 3px;
  left: -3px;
}
.input-container {
  display: grid;
  color: #aaa;
  width: 230px;
  align-self: flex-end;
}
.input-container label {
  color: #333;
}
.input-tag {
  height: 30px;
  border: 2px solid #aaa;
  border-radius: 4px;
  font-size: 18px;
  padding: 0 5px;
  font-family: 'Open Sans', sans-serif;
  width: 230px;
  outline: none;
}
.input-tag::placeholder {
  color: #aaa;
}
.input-tag:focus{
  border-color: var(--blue-color);
}
.fill-input {
  border-color: red;
}
.selector{
  position: relative;
}
.selector::after{
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  border-left: 2px solid currentColor;
  border-top: 2px solid currentColor;
  right: 5px;
  top: 50%;
  transform: rotateZ(225deg) translateY(-50%);
  transition: transform .25s linear;
}
.selector-list{
  position: absolute;
  top: 100%;
  width: 100%;
  overflow: hidden;
  max-height: 0;
  background-color: #fff;
  border-width: 1px;
  border-radius: 4px;
  border-color: transparent #555 #555 #555;
  transition: all .25s linear;
  z-index: -1;
}
.selector-list > li {
  line-height: 25px;
  cursor: pointer;
  padding: 0 10px;
  color: #555;
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
}
.input-tag:focus ~ .selector-list{
  max-height: 100px;
  overflow: auto;
  pointer-events: all;
  z-index: 20;
  box-shadow: 0 1px 8px #00000070;
  padding: 5px 0;
}
</style>
