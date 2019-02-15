<template>
  <div class="hello">
    
    <el-tabs type="border-card" class="tabs">
      <el-tab-pane label="热映">
        <movielist :num="num[0]" :tag="movietag[0]"></movielist>
      </el-tab-pane>
      <el-tab-pane label="TOP" lazy>
        <movielist :num="num[1]" :tag="movietag[1]"></movielist>
      </el-tab-pane>
      <el-tab-pane label="喜剧" lazy>
        <movielist :num="num[2]" :tag="movietag[2]"></movielist>
      </el-tab-pane>
      <el-tab-pane label="动作" lazy>
        <movielist :num="num[3]" :tag="movietag[3]"></movielist>
      </el-tab-pane>
      <el-tab-pane label="我的">
        <collection></collection>
      </el-tab-pane>
    </el-tabs>
        
  </div>
</template>

<script>

import movielist from './movielist.vue'
import collection from './collection.vue'

export default {
  name: 'HelloWorld',
  props: ['city'],
  components: {
    movielist: movielist,
    collection:collection
  },
  data () {
    return {
      movietag:[],
      num:[10,245,100,100]
    }
  },
  created () {
    if (this.city) {
      this.movietag = [`in_theaters?city=${this.city}&`, 'top250?','search?tag=喜剧&','search?tag=动作&']
    }
  }
}
</script>

<style scoped>
.tabs {
  width: 100%;
}

@media screen and (min-width: 1441px) {
  .tabs {
    margin: 10px auto;
    width:80%;
  }
}
</style>

