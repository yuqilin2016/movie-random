<template>
	<div v-if="tag">
		<ul v-for="(movie,index) in movies" :key="movie.id">
      <li>
        <div>
          <el-row :gutter="2" >
            <el-col :lg="6" :xs="11" >
              <div>
                <img :src="imgUrl[index]" alt="" class="poster">
              </div>
            </el-col>
            <el-col :lg="4" :xs="8" class="desc">
              <p><span class="hidden-sm-and-down">名称：</span>{{ movie.title }}</p>
              <p>
                <span class="hidden-sm-and-down">评分：</span>
                {{ movie.rating.average ? movie.rating.average : '暂无评分' }}
                <el-rate v-show="movie.rating.average>0" :value="movie.rating.average/2" 
                  disabled text-color="#ff9900">
                </el-rate>
              </p>
              <p>
                <span class="hidden-sm-and-down">类型：</span>
                <span v-for="genres in movie.genres" :key="genres">
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
                    {{ movie.directors[0].name }}
                </span>
              </p>
            </el-col>
            <el-col :lg="10" class="hidden-sm-and-down summary">
              <p style="line-height: 1.5;letter-spacing: 1px; text-align: justify;text-justify:inter-word;">{{ summary[index] }}</p>
            </el-col>
            <el-col :lg="2" :xs="2" class="collect">
              <p>
                <el-button @click="toCollect(movie,index)" type="primary"
                v-show="!isCollected[index]" >
                收藏</el-button>
                <el-button v-show="isCollected[index]" icon="el-icon-check"
                type="success" style="margin-left:0">
                <span class="hidden-sm-and-down">已收藏</span></el-button>
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
        </div>
      </li>
    </ul>
    <el-button type="primary" icon="el-icon-refresh" @click="random" :disabled="isDisabled">换一组</el-button>
	</div>
</template>

<script>
import request from 'superagent'
import jsonp from 'superagent-jsonp'

export default {
	name: 'movielist',
	props: ['num','tag'],
	data () {
		return {
			movies: [],
			isDisabled:false,
			isCollected:[],
			summary:[],
			baseUrl_pc:'https://movie.douban.com/subject/',
      baseUrl_phone:'https://m.douban.com/movie/subject/'
		}
	},
	mounted () {
    if (this.tag) {
    	this.random()
    }
  },
  computed : {
    imgUrl () {
      let imgUrl = []
      this.movies.forEach((movie) => {
        imgUrl.push('https://images.weserv.nl/?url=' + movie.images.small)
      })
      return imgUrl
    }
  },
  methods: {
    toCollect (movie,index) {
    	this.$set(this.isCollected, index, true);
    	let id = movie.id;
      let image = this.imgUrl[index];
      let title = movie.title;
      let rating = movie.rating.average;
      let genres = movie.genres;
      let year = movie.year;
      let directors = movie.directors[0].name;
      let summary = this.summary[index];
      let info = {id, image, title, rating, genres, year, directors, summary}
      this.$store.commit('addStoreMovies', info)
      this.$message({
        message: `电影 ${title} 收藏成功！`,
        type: 'success'
      })
    },
    random () {
      document.querySelector('h1#title').scrollIntoView({
        behavior: 'smooth'
      })
      this.isDisabled = true;
      this.isCollected = [false,false,false,false,false]
      this.getRandomMovies()
      setTimeout(() => {
        this.isDisabled = false
      }, 1000)
    },
    getRandomMovies () {
      let num_random = Math.floor((Math.random()*this.num))
      request
      .get('https://api.douban.com/v2/movie/'+this.tag+'start='+num_random+'&count=5')
      .use(jsonp({timeout:10000}))
      .end((err,res) => {
        if (!err) {
          this.movies = res.body.subjects
          for (let i = 0; i < 5; i++) {
            setTimeout( () => {
              request
              .get('https://api.douban.com/v2/movie/subject/'+this.movies[i].id)
              .use(jsonp({timeout:10000}))
              .end((err,res) => {
                if (!err) {
                  this.$set(this.summary,i,res.body.summary)
                } else {
                  console.log(err)
                }
              })
            }, i*100)
          }
        } else {
          console.log(err)
        }
      });
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

/*li {
  margin: 40 20px;
}*/
a {
  color:#fff;
  text-decoration: none;
}
.summary {
  margin-right: 40px;
}

@media screen and (max-width: 767px) {
  img.poster {
    width: 88%;
  }
  ul {
    padding: 0;
  }
}
</style>