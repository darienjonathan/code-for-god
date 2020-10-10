<template>
  <div class="pt-10">
    <page-title content-name="khotbah" />
    <breadcrumbs />
    <contents :items="items" contentUrl="khotbah" />
  </div>
</template>
<script>
import Contents from "@/components/SingleContent/Contents";
import PageTitle from "@/components/PageTitle";
import Breadcrumbs from "@/components/Breadcrumbs";
import { mapState } from "vuex";
export default {
  name: "Khotbah",
  components: {
    Contents,
    PageTitle,
    Breadcrumbs
  },
  computed: {
    ...mapState("khotbah", ["items"])
  }
};
</script>
<style lang="scss" scoped></style>
