<template>
  <div class="pt-10">
    <page-title content-name="bioskop" />
    <breadcrumbs />
    <contents :items="items" contentUrl="bioskop" />
  </div>
</template>
<script>
import Contents from "@/components/SingleContent/Contents";
import PageTitle from "@/components/PageTitle";
import Breadcrumbs from "@/components/Breadcrumbs";
import { mapState } from "vuex";
export default {
  name: "Bioskop",
  components: {
    Contents,
    PageTitle,
    Breadcrumbs
  },
  computed: {
    ...mapState("bioskop", ["items"])
  }
};
</script>
<style lang="scss" scoped></style>
