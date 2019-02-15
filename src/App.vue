<template>
  <div id="app">
    <div class="pos"><i class="el-icon-location"></i>{{ pos }}</div>
    <div class="flex-container">
      <img src="./assets/logo.jpg" class="logo">
      <div class="hidden-sm-and-down" style="width: 100px;"></div>
      <h1 id="title">看什么电影</h1>
    </div>
    
    <HelloWorld v-if="pos" :city="pos"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data () {
    return {
      pos: ''
    }
  },
  created () {
    fetch('https://restapi.amap.com/v3/ip?key=710dbc0fed8aaf9065d12c4e35f2a9dd')
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
    }, (e) => {
      console.error(e)
    })
    .then((res) => {
      this.pos = res.city.slice(0, -1)
    })
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
.pos {
  position: absolute;
  left: 10px;
  top: 10px;
}
.flex-container {
  height: 80px;
  display: flex;
  justify-content: center;
}

.logo {
  width: 100px;
}


</style>
