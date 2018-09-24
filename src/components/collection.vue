<template>
	<div>
    
    <div v-if="length>0">
      <ul v-for="(movie,index) in movies" >
        <li>
          <el-row :gutter="2" >
            <el-col :lg="6" :xs="11" >
              <div>
                <img :src="movie.image" alt="" class="poster">
              </div>
            </el-col>

            <el-col :lg="4" :xs="8" class="desc">
              <p><span class="hidden-sm-and-down">名称：</span>{{ movie.title }}</p>
              <p><span class="hidden-sm-and-down">评分：</span>
                {{ movie.rating ? movie.rating : '暂无评分' }}
                <el-rate v-show="movie.rating>0" v-model="movie.rating/2" disabled text-color="#ff9900" >
                </el-rate>
              </p>
              <p>
                <span class="hidden-sm-and-down">类型：</span>
                <span v-for="genres in movie.genres" >
                    {{ genres }}
                </span>
              </p>
              <p>
                <span class="hidden-sm-and-down">年份：</span>
                    {{ movie.year }}
              </p>
              <p class="hidden-sm-and-down">
                <span >导演：</span>
                <span >
                    {{ movie.directors }}
                </span>
              </p>
              
            </el-col>

            <el-col :lg="10" class="hidden-sm-and-down summary">
              <p style="line-height: 1.5;letter-spacing: 1px; text-align: justify;text-justify:inter-word;">{{ movie.summary }}</p>
            </el-col>

            <el-col :lg="2" :xs="2">
              <p>
                <el-button @click="toRemove(index)" type="danger">移除</el-button>
              </p>
              <p>
                <el-button type="primary" class="hidden-sm-and-down">
                  <a :href="baseUrl_pc+movie.id" target="_blank">详细</a>
                </el-button>
                <el-button type="primary" class="hidden-md-and-up" style="margin-left: 0;">
                  <a :href="baseUrl_phone+movie.id" target="_blank">详细</a>
                </el-button>
              </p>
            </el-col>
          </el-row>
        </li>
      </ul>
      <el-button @click="dialogVisible = true" type="danger">全部移除</el-button>
      <el-dialog
        title="警告"
        :visible.sync="dialogVisible"
         class="warn">
        <span><h3>删除全部收藏</h3></span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="danger" @click="toRemoveAll">确 定</el-button>
        </span>
      </el-dialog>
    </div>
		
    <div v-else>
      没有收藏！
    </div>
	</div>
</template>

<script>
export default {
  name:'collection',
  data () {
    return {
      baseUrl_pc:'https://movie.douban.com/subject/',
      baseUrl_phone:'https://m.movie.douban.com/subject/',
      dialogVisible: false
    }
  },
  computed: {
    movies () {
      return this.$store.state.storeMovies
    },
    length () {
      return this.$store.state.storeMovies.length
    }
  },
  methods: {
    toRemove (index) {
      this.$store.commit('removeStoreMovies', index)
    },
    toRemoveAll () {
      this.dialogVisible = false
      this.$store.commit('removeAllStoreMovies')
    }
  }
}
</script>

<style scoped>

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  text-align: left;
}

li {
  margin: 40 20px;
}
a {
  color:#fff;
  text-decoration: none;
}

/*.desc {
  margin: 0 10px;
}*/

.summary {
  margin-right: 40px;
}

@media screen and (max-width: 767px) {
  img.poster {
    width: 150px;
  }
  ul {
    padding: 0;
  }
}
</style>