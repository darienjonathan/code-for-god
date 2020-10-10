<template>
  <div class="pt-10">
    <page-title content-name="keluarga" />
    <breadcrumbs />
    <contents :items="items" contentUrl="keluarga" />
  </div>
</template>
<script>
import Contents from "@/components/Contents";
import PageTitle from "@/components/PageTitle";
import Breadcrumbs from "@/components/Breadcrumbs";
import { mapState } from "vuex";
export default {
  name: "Keluarga",
  components: {
    Contents,
    PageTitle,
    Breadcrumbs
  },
  computed: {
    ...mapState("keluarga", ["items"])
  }
};
</script>
<style lang="scss" scoped></style>
