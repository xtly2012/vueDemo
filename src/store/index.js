import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    searchParam: {
      name: 'test',
      key: '2'
    }
  },
  mutations: {
    setSearchParam(state, searchParam) {
      alert('bbb')
      state.searchParam = searchParam
    }
  }
})

export default store