<template>
  <div class="new-quotaion">
    <div class="details">
      <h1>Basic Details</h1>
      <h3>You Are From</h3>
      <div class="place-container">
        <InputContainer :inputData="{title: 'Country', selector: true, rows: [], type: 'text'}"/>
        <InputContainer :inputData="{title: 'City', selector: true, rows: [], type: 'text'}"/>
      </div>
      <h3>Where To</h3>
      <div class="place-container">
        <InputContainer :inputData="{title: 'Country', selector: true, rows: [], type: 'text'}"/>
        <InputContainer :inputData="{title: 'City', selector: true, rows: [], type: 'text'}"/>
      </div>
      <h1>Tour Details</h1>
      <div class="place-container">
        <InputContainer :inputData="{title: 'Group Type', selector: true, rows: [], type: 'text'}"/>
        <InputContainer :inputData="{title: 'Pattern 1', selector: true, rows: [], type: 'text'}"/>
        <InputContainer :inputData="{title: 'Pattern 2', selector: true, rows: [], type: 'text'}"/>
        <InputContainer :inputData="{title: 'Same day Arrival', selector: true, rows: [], type: 'text'}"/>
        <InputContainer :inputData="{title: 'Sales Manager', selector: true, rows: [], type: 'text'}"/>
        <InputContainer :inputData="{title: 'Quoter', selector: true, rows: [], type: 'text'}"/>
      </div>
      <h1>Agent Details</h1>
      <div class="place-container">
        <InputContainer :inputData="{title: 'Agent Company', selector: true, rows: [], type: 'text'}"/>
        <InputContainer :inputData="{title: 'Agent Code', selector: false, rows: [], type: 'text'}"/>
        <InputContainer :inputData="{title: 'Agent Pic', selector: true, rows: [], type: 'text'}"/>
      </div>
      <h1>When</h1>
      <div class="date-container">
        <div class="date-input-container">
          <label>From</label>
          <input type="date" />
          <label>To</label>
          <input type="date" />
          <div class="date-button">
            <div class="proceed-icon"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="details">
      <h1>Service Details</h1>
      <div class="day-of">
        <div class="day-no">
          <section>
            <h3>Day 1</h3>
            <div class="add-icon"></div>
          </section>
        </div>
        <div class="rows">
          <div class="table-row">
            <div class="cancel"></div>
            <div class="calculated-data">
              <div class="price">
                <label>Price</label>
                <div class="display"></div>
              </div>
              <div class="days">
                <label>Days</label>
                <div class="display"></div>
              </div>
            </div>
            <div class="place-container">
              <InputContainer :inputData="{title: 'Country', selector: true, rows: [], type: 'text'}"/>
              <InputContainer :inputData="{title: 'City', selector: true, rows: [], type: 'text'}"/>
            </div>
            <div class="place-container">
              <InputContainer :inputData="{title: 'Service Type', selector: true, rows: [], type: 'text'}"/>
              <InputContainer :inputData="{title: 'Service', selector: true, rows: [], type: 'text'}"/>
            </div>
          </div>
          <div class="table-row">
            <div class="cancel"></div>
            <div class="calculated-data">
              <div class="price">
                <label>Price</label>
                <div class="display"></div>
              </div>
              <div class="days">
                <label>Days</label>
                <div class="display"></div>
              </div>
            </div>
            <div class="place-container">
              <InputContainer :inputData="{title: 'Country', selector: true, rows: [], type: 'text'}"/>
              <InputContainer :inputData="{title: 'City', selector: true, rows: [], type: 'text'}"/>
            </div>
            <div class="place-container">
              <InputContainer :inputData="{title: 'Service Type', selector: true, rows: [], type: 'text'}"/>
              <InputContainer :inputData="{title: 'Service', selector: true, rows: [], type: 'text'}"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="details">
      <h1>Pricing Details</h1>
      <div class="place-container">
        <button>Preview</button>
        <button>Download</button>
      </div>
    </div>
  </div>
</template>

<script>
import InputContainer from '../InputContainer'

export default {
  name: 'NewQuotation',
  components: {
    InputContainer
  }
}
</script>

<style scoped>
.new-quotation{
  display: grid;
  place-items: center;
  position: relative;
  width: 100%;
  height: calc(100vh - 64px);
}
.date-container{
  width: 100%;
  display: grid;
  place-items: center;
  padding: 10px;
}
.date-button{
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: var(--green-color);
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(25px, -50%);
  box-shadow: 0 0 0 5px white;
  cursor: pointer;
}
.proceed-icon{
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 15px 0 15px 25px;
  border-color: transparent white;
  top: 50%;
  left: 55%;
  transform: translate(-50%, -50%);
}
.date-input-container{
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 10px;
  place-items: center;
  position: relative;
}
.date-input-container > input {
  width: 250px;
  height: 50px;
  border-style: solid;
  border-color: #777;
  border-width: 2px;
  padding-right: 30px;
  padding-left: 10px;
  outline: none;
}
.date-input-container > input:nth-child(2) {
  border-radius: 8px 8px 0 0;
  border-bottom-width: 0;
}
.date-input-container > input:nth-child(4) {
  border-top-width: 0;
  border-radius: 0 0 8px 8px;
}
.day-of{
  display: flex;
  position: relative;
}
.day-no{
  background-color: var(--blue-color);
  border-radius: 8px;
  padding: 10px 20px;
  color: white;
  text-align: center;
}
.day-no > section{
  position: sticky;
  top: 50%;
}
.rows{
  display: grid;
}
.table-row{
  margin: 10px;
  border: 2px solid #777;
  border-radius: 8px;
  padding: 20px;
  display: grid;
  place-items: center;
  position: relative;
}
.calculated-data{
  display: flex;
  justify-content: center;
  gap: 20px;
}
.display{
  width: 20px;
  height: 30px;
  background-color: tomato;
}
.price, .days{
  display: grid;
  place-items: center;
}
.cancel{
  width: 20px;
  height: 20px;
  background-color: #777;
  border-radius: 100%;
  position: absolute;
  top: 0;
  right: 0;
  margin: 5px;
  transform: rotateZ(45deg);
}
.cancel::before,
.cancel::after{
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #eee;
}
.cancel::before{
  width: 2px;
  height: 10px;
}
.cancel::after{
  width: 10px;
  height: 2px;
}
</style>
