import Vue from "vue";
import Vuex from "vuex";
import keluarga from "@/store/keluarga";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    keluarga: {
      namespaced: true,
      ...keluarga
    }
  }
});
