<template>
  <div>
    <div class="type-selector">
      <InputContainer
        :inputData="newAGA.type"
      />
    </div>
    <div class="details">
      <div class="detail-container">
        <h1>Basic Details</h1>
        <div class="place-container">
          <template v-for="(input, i) in newAGA.basic">
            <InputContainer
              v-if="input.for.includes(newAGA.type.value)"
              :key="i"
              :inputData="input"
              :dep="input.dep ? newAGA.basic[input.dep].value : null"
              :valid="valid"
            />
          </template>
        </div>
      </div>
      <div class="detail-container">
        <h1>Description Details</h1>
        <div class="place-container">
          <template v-for="(input, i) in newAGA.description">
            <InputContainer
              v-if="input.for.includes(newAGA.type.value)"
              :key="i"
              :inputData="input"
            />
          </template>
          <div class="info">
            <label>Info</label>
            <textarea rows="10" cols="20" :ref="'info'"></textarea>
          </div>
        </div>
      </div>
      <div class="detail-container" v-if="newAGA.type.value === 1">
        <h1>Room Types</h1>
        <div class="place-container">
          <InputContainer
            v-for="(input, i) in newAGA.roomTypes.addItem"
            :key="i"
            :inputData="input"
            :valid="valid"
          />
        </div>
      </div>
      <div class="detail-container" v-if="newAGA.type.value <= 2">
        <h1>Categories / Amenities</h1>
        <div class="place-container">
          <div class="selected-items">
            <h3>Selected Categories</h3>
            <div class="selected-item-list" v-if="newAGA.categories.rows.length === 0">None Selected</div>
            <div class="selected-item-list" v-for="(row, i) in newAGA.categories.rows" :key="i">
              <div class="selected-item-title">{{row.title}}</div>
              <div class="icon" @click="deleteCategory(i)">
                <div class="delete-icon"></div>
              </div>
            </div>
          </div>
          <InputContainer
            :inputData="newAGA.categories.addItem"
            :ref="'Category'"
          />
          <button @click="addCategory">Add</button>
          <div class="selected-items">
            <h3>Selected Amenities</h3>
            <div class="selected-item-list" v-if="newAGA.amenities.rows.length === 0">None Selected</div>
            <div class="selected-item-list" v-for="(row, i) in newAGA.amenities.rows" :key="i">
              <div class="selected-item-title">{{row.title}}</div>
              <div class="icon">
                <div class="delete-icon"></div>
              </div>
            </div>
          </div>
          <InputContainer
            :inputData="newAGA.amenities.addItem"
            :ref="'Amenity'"
          />
          <button @click="addAmenity">Add</button>
        </div>
      </div>
      <div class="detail-container">
        <h1>Linked Services</h1>
        <div class="place-container">
          <div class="selected-items" v-if="newAGA.linkServices.rows.length !== 0">
            <div class="selected-item-list" v-for="(row, i) in newAGA.linkServices.rows" :key="i">
              <div class="selected-item-title">{{row.title}}</div>
              <div class="icon" @click="deleteLinkedServices">
                <div class="delete-icon"></div>
              </div>
            </div>
          </div>
          <div class="add-icon" @click="viewItem=true"></div>
        </div>
      </div>
      <button class="proceed tag-click" @click="proceed">Save & Continue</button>
    </div>
    <ItemViewer
      v-if="viewItem"
      :viewData="newAGA.linkServices"
      :ref="'LinkedService'"
      @done="addLinkedServices"
      @close="viewItem=false"
    />
    <ErrorMsg
      v-if="isError.has"
      :error="isError"
    />
  </div>
</template>

<script>
import { AGAServices } from '../../store/AGA'
import InputContainer from '../InputContainer'
import ItemViewer from '../ItemViewer'
import ErrorMsg from '../ErrorMsg'

export default {
  data () {
    return {
      isError: {has: false, msg: '', color: ''},
      viewItem: false,
      newAGA: AGAServices.data.addItem,
      valid: false
    }
  },
  methods: {
    addCategory: function () {
      const newCategory = {
        title: this.$refs['Category'].$el.children[1].value,
        value: +this.newAGA.categories.addItem.value
      }
      this.newAGA.categories.rows.push(newCategory)
    },
    deleteCategory: function (id) {
      this.newAGA.categories.rows.splice(id, 1)
    },
    addAmenity: function () {
      const newAmenity = {
        title: this.$refs['Amenity'].$el.children[1].value,
        value: +this.newAGA.amenities.addItem.value
      }
      this.newAGA.amenities.rows.push(newAmenity)
    },
    deleteAmenity: function (id) {
      this.newAGA.amenities.rows.splice(id, 1)
    },
    addLinkedServices: function () {
      const t = this.$refs['LinkedService'].$el.children[0][2].value
      let newLinkedService = {title: t, value: {}}
      this.newAGA.linkServices.addItem.forEach(input => {
        newLinkedService.value[input.key] = +input.value
      })
      this.newAGA.linkServices.rows.push(newLinkedService)
      this.viewItem = false
    },
    deleteLinkedServices: function (id) {
      this.newAGA.linkServices.rows.splice(id, 1)
    },
    proceed: function () {
      this.valid = true
      this.newAGA.basic.forEach(input => {
        if (input.required && input.value === '') {
          this.valid = false
        }
      })
      if (this.valid) {
        this.isError = {has: false, msg: '', color: ''}
        this.newAGA.info.setVal(this.$refs['info'].value)
        AGAServices.postData()
        this.$router.push({name: 'AddServices', query: {type: 'price_details'}})
      } else {
        this.isError = {has: true, msg: 'Invalid Data', color: 'red'}
        setTimeout(() => {
          this.isError = {has: false, msg: '', color: ''}
        }, 2500)
      }
    }
  },
  components: {
    InputContainer,
    ItemViewer,
    ErrorMsg
  }
}
</script>

<style scoped>
.type-selector{
  width: 230px;
  margin: 10px;
}
.info{
  display: grid;
  width: 100%;
  margin: 10px 0;
}
.details{
  display: grid;
  gap: 10px;
}
.detail-container{
  display: grid;
  grid-template-columns: 30% 1fr;
}
.detail-container h1{
  padding: 10px 20px;
  border-radius: 8px;
  color: #eee;
  background-color: var(--blue-color);
  text-align: center;
  height: fit-content;
  position: sticky;
  top: 10px;
}
.place-container{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 10px;
}
.selected-items{
  flex-basis: 50%;
}
.selected-item-list{
  display: flex;
  height: 30px;
  align-items: center;
}
.selected-item-title{
  flex: 1;
}
.icon{
  width: 30px;
  height: 100%;
  display: flex;
  color: #888;
  border-radius: 4px;
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
.icon:hover > .delete-icon {
  color: red;
}
.proceed{
  justify-self: flex-end;
}
</style>
