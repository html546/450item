import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: JSON.parse(localStorage.getItem('message')) || ''
  },
  mutations: {
    SET_MESSAGE(state, message) {
      state.message = { ...message };
      localStorage.setItem('message', JSON.stringify(message));
    },
    REMOVE_MESSAGE(state) {
      state.message.userid = '';
      state.message.sessionid = '';
      localStorage.removeItem('message');
    }
  },
  actions: {

  }
})
