<template>
  <div id="app">
    <anketa msg="test work"/>
  </div>
</template>

<script>
import anketa from './components/anketa.vue'



export default {
  name: 'app',
  components: {
    anketa
  }
}
</script>

<style>
@font-face {
  font-family: "couriernew";
  font-style: normal;
  src: local("O"), url("./assets/fonts/couriernew/cour.ttf") format("truetype");
}
body {
  background-color: #797979;
}
#app {
  font-family: 'PT Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(0, 0, 0);
  margin-top: 60px;
  margin-bottom: 60px;
}
.slide_custom span {
    font-size: 13px;
    font-weight: 600;
    width: 200px;
    transform: translate(0, 0) !important;
    text-align: left !important;
    white-space: normal !important;
    
}

.vue-slide-bar-separate-text {
  top: 20px !important;
}

.vue-slide-bar-range div:nth-child(4) span {
    margin-left: -41px;
    width: 100px;
}

.vue-slide-bar-range div:nth-child(1) {
    margin-left: 3px;
    height: 17px;
}
.vue-slide-bar-range div:nth-child(2) {
    margin-left: 0px;
    height: 12px;
}
.vue-slide-bar-range div:nth-child(3) {
    margin-right: 0px;
    height: 12px;
}
.vue-slide-bar-range div:nth-child(4) {
    margin-right: -5px;
    height: 17px;    
}

.vue-slide-bar-range div {
    height: 13px;
    margin-top: -3px;
}

.item_personal_data .el-input__inner {
    background-color: rgba(0, 0, 0, 0) !important;
    border: none;
    font-family: "couriernew";
    font-size: 30px;
    color :black;
}

.item_personal_data .el-input__inner::placeholder {
  color: rgb(132, 129, 121);
}

.item_personal_data .el-date-editor.el-input.el-input--prefix.el-input--suffix.el-date-editor--year::after {
  display: none !important;
}
.item_personal_data .el-input__prefix {
    display: none;
}

.el-year-table td .cell {
    font-size: 18px;
}

.el-input--prefix .el-input__inner {
    padding-left: 0 !important;
}

/* .el-picker-panel {
    color: rgb(96, 98, 102);
    border: 3px solid rgb(63, 36, 30);
    -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border-radius: 4px;
    line-height: 30px;
    margin: 5px 0;
    background-image: url("/assets/img/bg.jpg") !important;
    box-shadow: 0px 0px 8px 7px #00000030;
}

 */

</style>
