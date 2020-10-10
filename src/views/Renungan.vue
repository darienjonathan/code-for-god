<template>
  <div class="pt-10">
    <page-title content-name="renungan" />
    <breadcrumbs />
    <contents :items="items" contentUrl="renungan" />
  </div>
</template>
<script>
import Contents from "@/components/SingleContent/Contents";
import PageTitle from "@/components/PageTitle";
import Breadcrumbs from "@/components/Breadcrumbs";
import { mapState } from "vuex";
export default {
  name: "Renungan",
  components: {
    Contents,
    PageTitle,
    Breadcrumbs
  },
  computed: {
    ...mapState("renungan", ["items"])
  }
};
</script>
<style lang="scss" scoped></style>
