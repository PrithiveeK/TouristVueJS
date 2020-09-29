<template>
  <table>
    <thead>
      <tr>
        <td colspan="100%">
          <div class="table-filter">
            <div class="filter-tag tag-click" @click="viewItem=false" tabindex="0">
              Filter Results<i class="filter-icon"></i>
            </div>
            <div class="pop-filter" tabindex="0">
              <div class="filter-inputs" tabindex="0">
                <InputContainer
                  v-for="(input, i) in viewType.input"
                  :key="i"
                  :inputData="input"
                />
              </div>
              <div class="filter-button">
                <button @click="$emit('filter')">Filter</button>
                <button @click="$emit('clear')">Clear</button>
              </div>
            </div>
            <div class="search">
              <div class="icon"><i class="search-icon"></i></div>
              <input type="text" placeholder="Search" v-model="searchQuery"/>
            </div>
            <div class="page-options">
              <div>Results: {{viewType.rows.length}}</div>
              <div class="show-pages">Show
                <span class="pages-result" tabindex="0">
                  {{resultsPerPage}}
                  <ul class="pages-list noscroll">
                    <li @click="resultsPerPage=10" tabindex="0">10</li>
                    <li @click="resultsPerPage=15" tabindex="0">15</li>
                    <li @click="resultsPerPage=20" tabindex="0">20</li>
                    <li @click="resultsPerPage=25" tabindex="0">25</li>
                    <li @click="resultsPerPage=30" tabindex="0">30</li>
                    <li @click="resultsPerPage=50" tabindex="0">50</li>
                    <li @click="resultsPerPage=100" tabindex="0">100</li>
                  </ul>
                </span>
              </div>
              <div class="show-pages">Page:
                <span class="pages-result" tabindex="0">
                  {{page + 1}}
                  <ul class="pages-list noscroll">
                    <li
                      v-for="(val, i) in Array.from({length: noOfPages})"
                      :key="i"
                      @click="page=i"
                      tabindex="0"
                    >{{i+1}}</li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <th v-for="(td,i) in viewType.tHead" :key="i">{{td}}</th>
      </tr>
    </thead>
    <tbody>
      <tr class="nodata" v-if="loading">
        <td colspan="100%">
          <div class="spinner">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
          </div>
        </td>
      </tr>
      <template v-for="(row, i) in displayRows">
        <tr v-if="filterRow(row)" :key="i" @click="$emit('view', start + i)">
          <td v-for="(td, j) in viewType.td" :key="j">{{row[td]}}</td>
          <td style="display: contents;">
            <div class="tr-last-child">
              <div class="row-filter">
                <div class="icon tag-click" @click="$emit('edit', start + i)">
                  <i class="edit-icon"></i>
                </div>
                <div class="icon tag-click" @click="$emit('delete', start + i)">
                  <i class="delete-icon"></i>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </template>
      <template v-if="!viewType.rows.length">
        <tr class="nodata">
          <td colspan="100%">No Data</td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
import InputContainer from './InputContainer'

export default {
  props: ['viewType', 'loading'],
  data () {
    return {
      searchQuery: '',
      page: 0,
      resultsPerPage: 15
    }
  },
  methods: {
    filterRow: function (row) {
      return !this.searchQuery || Object.values(row).join(' ').toLowerCase().includes(this.searchQuery.toLowerCase())
    }
  },
  computed: {
    noOfPages () {
      return Math.ceil(this.viewType.rows.length / this.resultsPerPage)
    },
    start () {
      return this.resultsPerPage * this.page
    },
    displayRows () {
      return this.viewType.rows.slice(this.start, this.start + this.resultsPerPage)
    }
  },
  components: {
    InputContainer
  }
}
</script>

<style scoped>
table{
  width: 100%;
  border-collapse: collapse;
}
.pop-filter{
  position: absolute;
  top: 100%;
  max-width: 70%;
  max-height: 0;
  outline: none;
  display: grid;
  gap: 10px;
  border-radius: 4px;
  transition: all .3s ease-out;
  background-color: #eee;
  z-index: -1;
  visibility: hidden;
}
.pop-filter * {
  outline: none;
}
.filter-tag:focus ~ .pop-filter,
.pop-filter:focus-within{
  box-shadow: 0 0 8px 2px #00000050;
  padding: 20px;
  max-height: 400px;
  z-index: 2;
  visibility: visible;
}
.filter-inputs{
  display: grid;
  grid-template-columns: 230px auto auto;
  gap: 20px;
  max-height: 300px;
}
.filter-button{
  justify-self: end;
}
thead{
  background-color: #ccc;
}
tr{
  width: 100%;
  height: 40px;
  cursor: default;
}
th, td{
  height: 40px;
  border-left: 2px solid #fff;
  padding: 0 5px;
}
tr > th:first-child,
tr > td:first-child{
  border: none;
}
tbody > tr:nth-child(odd){
  background-color: #bdf;
}
.tr-last-child {
  position: relative;
  opacity: 0;
  transition: opacity .2s ease-out;
}
tbody > tr:hover .tr-last-child {
  opacity: 1;
}
.row-filter{
  position: absolute;
  right: 0;
  top: 0;
  background-color: #fff;
  box-shadow: 0 0 8px #00000070;
  padding: 5px;
  border-radius: 4px;
  display: flex;
  height: 30px;
}
.nodata{
  height: 50px;
  text-align: center;
  font-size: 24px;
  color: #000;
}
.table-filter{
  display: grid;
  grid-template-columns: 200px 320px auto;
  width: 100%;
  align-items: center;
  gap: 10px;
  position: relative;
}
.filter-tag{
  height: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--blue-color);
  transition: transform .5s ease-out;
  outline: none;
}
.filter-tag:active{
  transform: scale(1.1);
}
.filter-icon{
  display: block;
  position: relative;
  width: 20px;
  height: 1px;
  background-color: currentColor;
  box-shadow: 0 5px, 0 -5px;
  margin: 0 10px;
}
.filter-icon::after{
  content: '';
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background-color: currentColor;
  right: 2px;
  top: -2px;
  box-shadow: -10px 5px, -10px -5px;
}
.search {
  border: 2px solid #ccc;
  padding: 0 10px;
  height: 35px;
  width: fit-content;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
}
.search:focus-within{
  border-color: var(--blue-color);
}
.search:focus-within .icon{
  color: var(--blue-color);
}
.search > input {
  border: none;
  outline: none;
  height: 100%;
  font-size: 18px;
}
.page-options{
  display: grid;
  grid-auto-flow: column;
  justify-content: end;
  gap: 10px;
  padding: 0 20px;
}
.icon{
  width: 30px;
  height: 100%;
  display: flex;
  color: #888;
  border-radius: 4px;
}
.search-icon{
  margin: auto;
  position: relative;
  width: 1px;
  height: 1px;
  display: block;
}
.search-icon::before{
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  border: 2px solid currentColor;
  bottom: -4px;
  right: -1px;
}
.search-icon::after{
  content: '';
  position: absolute;
  width: 10px;
  height: 2px;
  background-color: currentColor;
  transform-origin: left;
  transform: rotateZ(45deg);
  top: 1px;
  left: -1px;
}
.edit-icon{
  margin: auto;
  position: relative;
  width: 15px;
  height: 4px;
  background-color: currentColor;
  border-radius: 0 2px 2px 0;
  transform: rotateZ(-45deg);
}
.edit-icon::before {
  content: '';
  position: absolute;
  border-style: solid;
  border-width: 2px 5px 2px 0;
  border-color: transparent currentColor transparent transparent;
  top: 0;
  left: -6px;
}
.edit-icon::after {
  content: '';
  position: absolute;
  width: 1px;
  height: 100%;
  background-color: #fff;
  top: 0;
  right: 3px;
}
.delete-icon{
  margin: auto;
  position: relative;
  width: 14px;
  height: 16px;
  background-color: currentColor;
  border-radius: 2px;
}
.delete-icon::before{
  content: '';
  position: absolute;
  width: 5px;
  height: 2px;
  background-color: currentColor;
  top: -1px;
  left: 50%;
  transform: translateX(-50%);
}
.delete-icon::after{
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #fff;
  top: 2px;
  left: 0;
}
.icon:hover > .edit-icon {
  color: var(--blue-color);
}
.icon:hover > .delete-icon {
  color: red;
}
.show-pages{
  display: flex;
  gap: 5px;
}
.pages-result{
  background-color: #fff;
  display: block;
  padding: 0 5px;
  height: 90%;
  border-radius: 4px;
  position: relative;
  outline: none;
  cursor: pointer;
}
.pages-result:focus > .pages-list {
  opacity: 1;
  z-index: 2;
  box-shadow: 0 0 8px #00000070;
}
.pages-list{
  position: absolute;
  width: fit-content;
  padding: 2px;
  max-height: 70px;
  min-width: 20px;
  background-color: #fff;
  left: 0;
  top: 50%;
  border-radius: 4px;
  transform: translateY(-50%);
  opacity: 0;
  z-index: -1;
  transition: all .3s ease-in-out;
}
.pages-list > li{
  text-align: center;
  cursor: default;
}
.pages-list > li:hover{
  background-color: #58835850;
}
.noscroll{
  scrollbar-width: none;
  overflow: auto;
}
.noscroll::-webkit-scrollbar{
  display: none;
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
