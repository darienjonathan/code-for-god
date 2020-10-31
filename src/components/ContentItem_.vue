<template>
  <div>
    <div v-if="item">
      <div class="my-10">
        <h1 class="d.flex text-center">{{ item.title }}</h1>
        <h2 class="d.flex text-center">{{ item.subtitle }}</h2>
      </div>
      <breadcrumbs :urlFn="breadcrumbsUrlFn" />
      <v-expansion-panels multiple>
        <v-expansion-panel v-for="[uid, content] in item.contents" :key="uid">
          <v-expansion-panel-header>{{ content.title }}</v-expansion-panel-header>
          <v-expansion-panel-content class="text-wrap" v-if="content.post"
            ><wordpress :post="content.post"
          /></v-expansion-panel-content>
          <v-expansion-panel-content class="text-wrap full-height" v-else-if="content.url">
            <i-frame :url="content.url" />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>
<script>
import Wordpress from "@/components/Wordpress";
import Breadcrumbs from "@/components/Breadcrumbs";
import upperCaseFirstLetter from "@/lib/upperCaseFirstLetter.js";
import IFrame from "@/components/IFrame/Index";
export default {
  name: "ContentItem",
  components: {
    Wordpress,
    Breadcrumbs,
    IFrame
  },
  props: ["id", "item"],
  data() {
    return {
      breadcrumbsUrlFn: undefined
    };
  },
  mounted() {
    this.preparePath();
  },
  methods: {
    preparePath() {
      this.breadcrumbsUrlFn = path =>
        path === this.id ? this.item.title : upperCaseFirstLetter(path);
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
@import "~@/assets/css/main.scss";
</style>
