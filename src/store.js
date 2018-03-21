import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userSelection: {
      housing: undefined,
      income: undefined,
      jobs: undefined,
      education: undefined,
      safety: undefined,
      worklifebalance: undefined
    },
    result: "",
    otherResults: []
  },
  mutations: {
    acceptSelection: (state, value) => (state.userSelection[value] = 1),
    dismissSelection: (state, value) => (state.userSelection[value] = 0),
    resetSelection: (state, value) => (state.userSelection[value] = undefined),
    setResult: (state, result) => (state.result = result),
    setOtherResults: (state, results) => (state.otherResults = results)
  },
  actions: {
    resetUserSelection({ state, commit }) {
      Object.keys(state.userSelection).forEach(key => commit("resetSelection", key));
    },
    selectCategory({ state, commit }, { type, category }) {
      type === 'dismiss'
        ? commit("dismissSelection", category)
        : commit("acceptSelection", category);
    },
    async sendData({ state, commit }) {

      const body = Object
        .entries(state.userSelection)
        .map(([key, val]) => `${key}=${val}`)
        .join("&");

      const response = await fetch('http://countrymatcher.jonaskuske.com/getter.php', {
        body,
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });

      const [result, ...otherResults] = await response.json();
      commit("setResult", result);
      commit("setOtherResults", otherResults);
    }
  },
  getters: {
    unselectedCategories(state) {
      return Object
        .entries(state.userSelection)
        .filter(([key, val]) => val === undefined)
        .map(([val]) => val);
    }
  }
});