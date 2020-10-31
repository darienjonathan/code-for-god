<template>
  <div class="pt-10">
    <page-title content-name="liturgi" />
    <breadcrumbs />
    <contents :items="items" contentUrl="liturgi" />
  </div>
</template>
<script>
import Contents from "@/components/SingleContent/Contents";
import PageTitle from "@/components/PageTitle";
import Breadcrumbs from "@/components/Breadcrumbs";
import { mapState } from "vuex";
export default {
  name: "Liturgi",
  components: {
    Contents,
    PageTitle,
    Breadcrumbs
  },
  computed: {
    ...mapState("liturgi", ["items"])
  }
};
</script>
<style lang="scss" scoped></style>
