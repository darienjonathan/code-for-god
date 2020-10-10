<template>
  <div>
    <div v-if="item">
      <div class="my-10">
        <h1 class="d.flex text-center">{{ item.title }}</h1>
        <h2 class="d.flex text-center">{{ item.subtitle }}</h2>
      </div>
      <breadcrumbs :urlFn="breadcrumbsUrlFn" />
      <v-container>
        <wordpress v-if="item.post" :post="item.post" />
        <i-frame v-else-if="item.url" :url="item.url" />
      </v-container>
    </div>
  </div>
</template>
<script>
import Breadcrumbs from "@/components/Breadcrumbs";
import Wordpress from "@/components/Wordpress";
import upperCaseFirstLetter from "@/lib/upperCaseFirstLetter.js";
import IFrame from "@/components/IFrame/Index";
export default {
  name: "ContentItem",
  components: {
    Breadcrumbs,
    Wordpress,
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
