import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: {
      userid: JSON.parse(localStorage.getItem('message')).userid || '',
      sessionid: JSON.parse(localStorage.getItem('message')).sessionid || ''
    }
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
