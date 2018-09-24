<template>
  <div id="app">
    <div class="flex-container">
      <img src="./assets/logo.jpg" class="logo">
      <div class="hidden-sm-and-down" style="width: 100px;"></div>
      <h1>看什么电影</h1>
    </div>
    
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style >

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.flex-container {
  height: 80px;
  display: flex;
  justify-content: center;
}

.logo {
  width: 100px;
  /*float: left;*/
}


</style>
