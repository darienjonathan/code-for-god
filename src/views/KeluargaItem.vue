<template>
  <div>
    <!-- <div v-if="paths.length > 0">
      <v-breadcrumbs :items="paths" divider="/">
        <template v-slot:item="{ path }">
          {{ path.to }}
        </template>
      </v-breadcrumbs>
    </div> -->
    <div v-if="item">
      <div class="my-10">
        <h1 class="d.flex text-center">{{ item.ts.dateNum }}</h1>
        <h2 class="d.flex text-center">{{ item.ts.str }}</h2>
      </div>
      <v-expansion-panels>
        <v-expansion-panel v-for="[uid, content] in item.contents" :key="uid">
          <v-expansion-panel-header>{{ content.title }}</v-expansion-panel-header>
          <v-expansion-panel-content class="text-wrap">{{ content.url }}</v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "KeluargaItem",
  data() {
    return {
      item: undefined,
      paths: []
    };
  },
  mounted() {
    const id = this.$route.params.id;
    this.item = this.getItem(id);
    // const splittedPath = this.$route.path.split("/").filter(path => path.length > 0);
    // this.paths = splittedPath.map((path, index) => ({
    //   to: `/${splittedPath.slice(0, index + 1).join("/")}`,
    //   text: path
    // }));
  },
  computed: {
    ...mapGetters("keluarga", ["getItem", "getContent"])
  }
};
</script>
<style lang="scss" scoped>
@import "~@/assets/css/main.css";
</style>
