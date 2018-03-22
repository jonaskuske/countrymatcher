import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userSelection: {},
    result: "",
    otherResults: [],
    overlayOpen: false
  },
  mutations: {
    updateUserSelectionOptions: (state, value) => (state.userSelection = value),
    acceptSelection: (state, value) => (state.userSelection[value].selection = 1),
    dismissSelection: (state, value) => (state.userSelection[value].selection = 0),
    resetSelection: (state, value) => (state.userSelection[value].selection = undefined),
    setResult: (state, result) => (state.result = result),
    setOtherResults: (state, results) => (state.otherResults = results),
    toggleOverlay: state => (state.overlayOpen = !state.overlayOpen)
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
        .map(([key, val]) => `${val.title}=${val.selection}`)
        .join("&");

      const response = await fetch('http://countrymatcher.jonaskuske.com/getter.php', {
        method: 'post',
        body: body,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
      const raw = await response.json();
      const [result, ...otherResults] = raw.Country
        ? [raw.Country]
        : raw;
      commit("setResult", result);
      commit("setOtherResults", otherResults);
    }
  },
  getters: {
    unselectedCategories(state) {
      return Object
        .entries(state.userSelection)
        .filter(([key, val]) => val.selection === undefined)
        .map(([key]) => key);
    }
  }
});