<template>
  <div class="pt-10">
    <page-title content-name="karaoke" />
    <breadcrumbs />
    <contents :items="items" contentUrl="karaoke" />
  </div>
</template>
<script>
import Contents from "@/components/Contents";
import PageTitle from "@/components/PageTitle";
import Breadcrumbs from "@/components/Breadcrumbs";
import { mapState } from "vuex";
export default {
  name: "Karaoke",
  components: {
    Contents,
    PageTitle,
    Breadcrumbs
  },
  computed: {
    ...mapState("karaoke", ["items"])
  }
};
</script>
<style lang="scss" scoped></style>
