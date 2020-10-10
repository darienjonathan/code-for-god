import Vue from "vue";
import Vuex from "vuex";
import khotbah from "@/store/khotbah";
import keluarga from "@/store/keluarga";
import umum from "@/store/umum";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    keluarga: {
      namespaced: true,
      ...keluarga
    },
    umum: {
      namespaced: true,
      ...umum
    },
    khotbah: {
      namespaced: true,
      ...khotbah
    }
  }
});
