<template>
  <v-breadcrumbs :items="paths">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item>
        <router-link :to="item.to" class="link" :data-disabled="item.isDisabled">
          {{ item.url }}
        </router-link>
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>
<script>
import upperCaseFirstLetter from "@/lib/upperCaseFirstLetter.js";
export default {
  Name: "Breadcrumbs",
  props: ["urlFn"],
  data() {
    return {
      paths: []
    };
  },
  mounted() {
    this.preparePath();
  },
  methods: {
    preparePath() {
      let urlFn = path => upperCaseFirstLetter(path);
      urlFn = this.urlFn || urlFn;
      const splittedPaths = this.$route.path.split("/");
      const paths = splittedPaths.map((path, index) => ({
        to: path.length ? splittedPaths.slice(0, index + 1).join("/") : "/",
        url: path.length ? urlFn(path) : "Top",
        isDisabled: index === splittedPaths.length - 1
      }));
      this.paths = paths;
    }
  }
};
</script>
<style lang="scss" scoped>
.link {
  &[data-disabled="true"] {
    pointer-events: none;
    color: grey;
    text-decoration: none;
  }
}
</style>
