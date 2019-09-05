import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	taskIterator: 0,
  	todos: {}
  },
  mutations: {
  	increment: state => state.taskIterator++
  }
})
