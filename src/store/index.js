import Vue from "vue";
import Vuex from "vuex";

import works from "./works.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    works: works,
    openModal: false,
    modalContents: {}
  },
  getters: {
    works(state) {
      return state.works;
    },
    openModal(state) {
      return state.openModal;
    },
    modalContents(state) {
      return state.modalContents;
    }
  },
  mutations: {
    openModalMutation(state) {
      state.openModal = true;
    },
    closeModalMutation(state) {
      state.openModal = false;
    },
    changeModalContentsMutation(state, work) {
      state.modalContents = work;
    }
  },
  actions: {
    openModalAction({ commit }) {
      commit("openModalMutation");
    },
    closeModalAction({ commit }) {
      commit("closeModalMutation");
    },
    changeModalContentsAction({ commit }, work) {
      commit("changeModalContentsMutation", work);
    }
  },
  modules: {}
});
