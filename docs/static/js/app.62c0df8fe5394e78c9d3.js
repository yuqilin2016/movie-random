webpackJsonp([1],{"0qpZ":function(t,e){},"1nSg":function(t,e){},"1qub":function(t,e){},"4Uwr":function(t,e,s){t.exports=s.p+"static/img/logo.303ff6a.jpg"},"6h89":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("IvJb"),n=s("xH4k"),i=s.n(n),o=s("Blwo"),r=s.n(o),l={name:"movielist",props:["num","tag"],data:function(){return{movies:[],isDisabled:!1,isCollected:[],summary:[],baseUrl_pc:"https://movie.douban.com/subject/",baseUrl_phone:"https://m.douban.com/movie/subject/"}},created:function(){this.tag&&this.random()},methods:{toCollect:function(t,e){this.$set(this.isCollected,e,!0);var s={id:t.id,image:t.images.small,title:t.title,rating:t.rating.average,genres:t.genres,year:t.year,directors:t.directors[0].name,summary:this.summary[e]};this.$store.commit("addStoreMovies",s)},random:function(){var t=this;document.body.scrollTop=0,document.documentElement.scrollTop=0,this.isDisabled=!0,this.isCollected=[!1,!1,!1,!1,!1],this.getRandomMovies(),setTimeout(function(){t.isDisabled=!1},1e3)},getRandomMovies:function(){var t=this,e=Math.floor(Math.random()*this.num);i.a.get("https://api.douban.com/v2/movie/"+this.tag+"start="+e+"&count=5").use(r()({timeout:1e4})).end(function(e,s){if(e)console.log(e);else{t.movies=s.body.subjects;for(var a=function(e){i.a.get("https://api.douban.com/v2/movie/subject/"+t.movies[e].id).use(r()({timeout:1e4})).end(function(s,a){s?console.log(s):t.$set(t.summary,e,a.body.summary)})},n=0;n<5;n++)a(n)}})}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.tag?s("div",[t._l(t.movies,function(e,a){return s("ul",[s("li",[s("div",[s("el-row",{attrs:{gutter:2}},[s("el-col",{attrs:{lg:6,xs:11}},[s("div",[s("img",{staticClass:"poster",attrs:{src:e.images.small,alt:""}})])]),t._v(" "),s("el-col",{staticClass:"desc",attrs:{lg:4,xs:8}},[s("p",[s("span",{staticClass:"hidden-sm-and-down"},[t._v("名称：")]),t._v(t._s(e.title))]),t._v(" "),s("p",[s("span",{staticClass:"hidden-sm-and-down"},[t._v("评分：")]),t._v("\n                  \t"+t._s(e.rating.average?e.rating.average:"暂无评分")+"\n                  \t"),s("el-rate",{directives:[{name:"show",rawName:"v-show",value:e.rating.average>0,expression:"movie.rating.average>0"}],attrs:{disabled:"","text-color":"#ff9900"},model:{value:e.rating.average/2,callback:function(s){t.$set(e.rating,"average/2",s)},expression:"movie.rating.average/2"}})],1),t._v(" "),s("p",[s("span",{staticClass:"hidden-sm-and-down"},[t._v("类型：")]),t._v(" "),t._l(e.genres,function(e){return s("span",[t._v("\n                        "+t._s(e)+"\n                    ")])})],2),t._v(" "),s("p",[s("span",{staticClass:"hidden-sm-and-down"},[t._v("年份：")]),t._v("\n                        "+t._s(e.year)+"\n                  ")]),t._v(" "),s("p",{staticClass:"hidden-sm-and-down"},[s("span",[t._v("导演：")]),t._v(" "),s("span",[t._v("\n                        "+t._s(e.directors[0].name)+"\n                    ")])])]),t._v(" "),s("el-col",{staticClass:"hidden-sm-and-down summary",attrs:{lg:10}},[s("p",{staticStyle:{"line-height":"1.5","letter-spacing":"1px","text-align":"justify","text-justify":"inter-word"}},[t._v(t._s(t.summary[a]))])]),t._v(" "),s("el-col",{staticClass:"collect",attrs:{lg:2,xs:2}},[s("p",[s("el-button",{directives:[{name:"show",rawName:"v-show",value:!t.isCollected[a],expression:"!isCollected[index]"}],attrs:{type:"primary"},on:{click:function(s){t.toCollect(e,a)}}},[t._v("\n                \t\t收藏")]),t._v(" "),s("el-button",{directives:[{name:"show",rawName:"v-show",value:t.isCollected[a],expression:"isCollected[index]"}],attrs:{icon:"el-icon-check",type:"primary"}},[s("span",{staticClass:"hidden-sm-and-down"},[t._v("已收藏")])])],1),t._v(" "),s("p",[s("el-button",{staticClass:"hidden-sm-and-down",attrs:{type:"primary"}},[s("a",{attrs:{href:t.baseUrl_pc+e.id,target:"_blank"}},[t._v("详细")])]),t._v(" "),s("el-button",{staticClass:"hidden-md-and-up",staticStyle:{"margin-left":"0"},attrs:{type:"primary"}},[s("a",{attrs:{href:t.baseUrl_phone+e.id,target:"_blank"}},[t._v("详细")])])],1)])],1)],1)])])}),t._v(" "),s("el-button",{attrs:{type:"primary",icon:"el-icon-refresh",disabled:t.isDisabled},on:{click:t.random}},[t._v("换一组")])],2):t._e()},staticRenderFns:[]};var d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.length>0?s("div",[t._l(t.movies,function(e,a){return s("ul",[s("li",[s("el-row",{attrs:{gutter:2}},[s("el-col",{attrs:{lg:6,xs:11}},[s("div",[s("img",{staticClass:"poster",attrs:{src:e.image,alt:""}})])]),t._v(" "),s("el-col",{staticClass:"desc",attrs:{lg:4,xs:8}},[s("p",[s("span",{staticClass:"hidden-sm-and-down"},[t._v("名称：")]),t._v(t._s(e.title))]),t._v(" "),s("p",[s("span",{staticClass:"hidden-sm-and-down"},[t._v("评分：")]),t._v("\n                "+t._s(e.rating?e.rating:"暂无评分")+"\n                "),s("el-rate",{directives:[{name:"show",rawName:"v-show",value:e.rating>0,expression:"movie.rating>0"}],attrs:{disabled:"","text-color":"#ff9900"},model:{value:e.rating/2,callback:function(s){t.$set(e,"rating/2",s)},expression:"movie.rating/2"}})],1),t._v(" "),s("p",[s("span",{staticClass:"hidden-sm-and-down"},[t._v("类型：")]),t._v(" "),t._l(e.genres,function(e){return s("span",[t._v("\n                    "+t._s(e)+"\n                ")])})],2),t._v(" "),s("p",[s("span",{staticClass:"hidden-sm-and-down"},[t._v("年份：")]),t._v("\n                    "+t._s(e.year)+"\n              ")]),t._v(" "),s("p",{staticClass:"hidden-sm-and-down"},[s("span",[t._v("导演：")]),t._v(" "),s("span",[t._v("\n                    "+t._s(e.directors)+"\n                ")])])]),t._v(" "),s("el-col",{staticClass:"hidden-sm-and-down summary",attrs:{lg:10}},[s("p",{staticStyle:{"line-height":"1.5","letter-spacing":"1px","text-align":"justify","text-justify":"inter-word"}},[t._v(t._s(e.summary))])]),t._v(" "),s("el-col",{attrs:{lg:2,xs:2}},[s("p",[s("el-button",{attrs:{type:"danger"},on:{click:function(e){t.toRemove(a)}}},[t._v("移除")])],1),t._v(" "),s("p",[s("el-button",{staticClass:"hidden-sm-and-down",attrs:{type:"primary"}},[s("a",{attrs:{href:t.baseUrl_pc+e.id,target:"_blank"}},[t._v("详细")])]),t._v(" "),s("el-button",{staticClass:"hidden-md-and-up",staticStyle:{"margin-left":"0"},attrs:{type:"primary"}},[s("a",{attrs:{href:t.baseUrl_phone+e.id,target:"_blank"}},[t._v("详细")])])],1)])],1)],1)])}),t._v(" "),s("el-button",{attrs:{type:"danger"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("全部移除")]),t._v(" "),s("el-dialog",{staticClass:"warn",attrs:{title:"警告",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[s("span",[s("h3",[t._v("删除全部收藏")])]),t._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),s("el-button",{attrs:{type:"danger"},on:{click:t.toRemoveAll}},[t._v("确 定")])],1)])],2):s("div",[t._v("\n      没有收藏！\n    ")])])},staticRenderFns:[]};var v={name:"HelloWorld",components:{movielist:s("C7Lr")(l,c,!1,function(t){s("i6+h")},"data-v-13b828e3",null).exports,collection:s("C7Lr")({name:"collection",data:function(){return{baseUrl_pc:"https://movie.douban.com/subject/",baseUrl_phone:"https://m.movie.douban.com/subject/",dialogVisible:!1}},computed:{movies:function(){return this.$store.state.storeMovies},length:function(){return this.$store.state.storeMovies.length}},methods:{toRemove:function(t){this.$store.commit("removeStoreMovies",t)},toRemoveAll:function(){this.dialogVisible=!1,this.$store.commit("removeAllStoreMovies")}}},d,!1,function(t){s("6h89")},"data-v-660f874d",null).exports},data:function(){return{movietag:["in_theaters?","top250?","search?tag=喜剧&","search?tag=动作&","search?tag=科幻&"],num:[10,245,100,100,100]}}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("el-tabs",{staticClass:"tabs",attrs:{type:"border-card"}},[s("el-tab-pane",{attrs:{label:"热映"}},[s("movielist",{attrs:{num:t.num[0],tag:t.movietag[0]}})],1),t._v(" "),s("el-tab-pane",{attrs:{label:"TOP",lazy:""}},[s("movielist",{attrs:{num:t.num[1],tag:t.movietag[1]}})],1),t._v(" "),s("el-tab-pane",{attrs:{label:"喜剧",lazy:""}},[s("movielist",{attrs:{num:t.num[2],tag:t.movietag[2]}})],1),t._v(" "),s("el-tab-pane",{attrs:{label:"动作",lazy:""}},[s("movielist",{attrs:{num:t.num[3],tag:t.movietag[3]}})],1),t._v(" "),s("el-tab-pane",{attrs:{label:"我的"}},[s("collection")],1)],1)],1)},staticRenderFns:[]};var u=s("C7Lr")(v,m,!1,function(t){s("0qpZ")},"data-v-d21c4538",null).exports,p={name:"app",components:{HelloWorld:u}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[this._m(0),this._v(" "),e("HelloWorld")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex-container"},[e("img",{staticClass:"logo",attrs:{src:s("4Uwr")}}),this._v(" "),e("div",{staticClass:"hidden-sm-and-down",staticStyle:{width:"100px"}}),this._v(" "),e("h1",[this._v("看什么电影")])])}]};var g=s("C7Lr")(p,_,!1,function(t){s("1qub")},null,null).exports,h=s("zO6J");a.default.use(h.a);var f=new h.a({routes:[{path:"/",name:"HelloWorld",component:u}]}),b=s("srH3"),y=s.n(b),C=s("3cXf"),w=s.n(C),x=s("9rMa");a.default.use(x.a);var M=new x.a.Store({state:{storeMovies:localStorage.getItem("storeMovies")?JSON.parse(localStorage.getItem("storeMovies")):[]},mutations:{addStoreMovies:function(t,e){if(!t.storeMovies.every(function(t,s,a){return a[s].id!=e.id}))return!1;t.storeMovies.unshift(e),localStorage.setItem("storeMovies",w()(t.storeMovies))},removeStoreMovies:function(t,e){t.storeMovies.splice(e,1),localStorage.setItem("storeMovies",w()(t.storeMovies))},removeAllStoreMovies:function(t){t.storeMovies.splice(0),localStorage.setItem("storeMovies",[])}}});s("OIlf"),s("1nSg");a.default.use(y.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:f,store:M,components:{App:g},template:"<App/>"})},OIlf:function(t,e){},"i6+h":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.62c0df8fe5394e78c9d3.js.map