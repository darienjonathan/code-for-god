<template>
  <div class="pt-10">
    <page-title content-name="diyChristmas" />
    <breadcrumbs />
    <div style="height: 100vh">
      <i-frame v-if="item" :url="item.url" />
    </div>
  </div>
</template>
<script>
import PageTitle from "@/components/PageTitle";
import Breadcrumbs from "@/components/Breadcrumbs";
import { mapState } from "vuex";
import IFrame from "@/components/IFrame/Index";
export default {
  name: "DiyChristmas",
  components: {
    PageTitle,
    Breadcrumbs,
    IFrame
  },
  computed: {
    ...mapState("diyChristmas", ["item"])
  }
};
</script>
<style lang="scss" scoped></style>
