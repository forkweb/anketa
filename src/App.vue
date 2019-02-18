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
#app {
  font-family: 'PT Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(0, 0, 0);
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>
