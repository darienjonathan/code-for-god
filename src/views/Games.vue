<template>
  <div class="pt-10">
    <page-title content-name="games" />
    <breadcrumbs />
    <contents :items="items" contentUrl="games" />
  </div>
</template>
<script>
import Contents from "@/components/SingleContent/Contents";
import PageTitle from "@/components/PageTitle";
import Breadcrumbs from "@/components/Breadcrumbs";
import { mapState } from "vuex";
export default {
  name: "Games",
  components: {
    Contents,
    PageTitle,
    Breadcrumbs
  },
  computed: {
    ...mapState("games", ["items"])
  }
};
</script>
<style lang="scss" scoped></style>
