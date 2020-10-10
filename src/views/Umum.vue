<template>
  <div class="pt-10">
    <page-title content-name="umum" />
    <breadcrumbs />
    <contents :items="items" contentUrl="umum" />
  </div>
</template>
<script>
import Contents from "@/components/Contents";
import PageTitle from "@/components/PageTitle";
import Breadcrumbs from "@/components/Breadcrumbs";
import { mapState } from "vuex";
export default {
  name: "Umum",
  components: {
    Contents,
    PageTitle,
    Breadcrumbs
  },
  computed: {
    ...mapState("umum", ["items"])
  }
};
</script>
<style lang="scss" scoped></style>
