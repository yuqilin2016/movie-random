import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		storeMovies:localStorage.getItem("storeMovies") ?
		JSON.parse(localStorage.getItem("storeMovies")) : []
	},
	mutations: {
		addStoreMovies (state, movie) {
			// if (state.storeMovies)
			let notInclude = state.storeMovies.every(function(value,index,array){
				return array[index].id != movie.id
			})
			if (notInclude) {
				state.storeMovies.unshift(movie)
				localStorage.setItem("storeMovies", JSON.stringify(state.storeMovies))
				
			} else {
				return false
			}
		},
		removeStoreMovies (state, index) {
			state.storeMovies.splice(index, 1)
			localStorage.setItem("storeMovies", JSON.stringify(state.storeMovies))
		},
		removeAllStoreMovies (state) {
			// localStorage.clear()
			state.storeMovies.splice(0)
			localStorage.setItem("storeMovies", [])
		}
	},
	// actions: {
	// 	addStoreMovies ({commit}, movie) {

	// 	}
	// }
})