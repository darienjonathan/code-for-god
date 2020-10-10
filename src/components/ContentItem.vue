<template>
  <div>
    <div v-if="item">
      <div class="my-10">
        <h1 class="d.flex text-center">{{ item.ts.dateNum }}</h1>
        <h2 class="d.flex text-center">{{ item.ts.str }}</h2>
      </div>
      <v-breadcrumbs :items="paths">
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item>
            <router-link :to="item.to">
              {{ item.url }}
            </router-link>
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
      <v-expansion-panels>
        <v-expansion-panel v-for="[uid, content] in item.contents" :key="uid">
          <v-expansion-panel-header>{{ content.title }}</v-expansion-panel-header>
          <v-expansion-panel-content class="text-wrap" v-if="content.post"
            ><wordpress :post="content.post"
          /></v-expansion-panel-content>
          <v-expansion-panel-content class="text-wrap full-height" v-else-if="content.url">
            <iframe style="width: 100%; height: 100%;" :src="content.url"
          /></v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>
<script>
import Wordpress from "@/components/Wordpress";
import upperCaseFirstLetter from "@/lib/upperCaseFirstLetter.js";
export default {
  name: "ContentItem",
  components: {
    Wordpress
  },
  props: ["id", "item"],
  async mounted() {
    this.preparePath();
  },
  methods: {
    preparePath() {
      if (!this.item || !this.id) {
        return;
      }
      const splittedPaths = this.$route.path.split("/").filter(path => path.length);
      const paths = splittedPaths.map((path, index) => ({
        to: "/" + splittedPaths.slice(0, index + 1).join("/"),
        url: path === this.id ? this.item.ts.dateNum : upperCaseFirstLetter(path)
      }));
      this.paths = paths;
    }
  },
  watch: {
    item() {
      this.preparePath();
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@/assets/css/main.css";
</style>
