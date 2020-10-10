<template>
  <div class="pt-10">
    <h1 class="d.flex text-center">Umum</h1>
    <contents :items="items" contentUrl="umum" />
  </div>
</template>
<script>
import Contents from "@/components/Contents";
import { mapState } from "vuex";
export default {
  name: "Umum",
  components: {
    Contents
  },
  computed: {
    ...mapState("umum", ["items"])
  }
};
</script>
<style lang="scss" scoped></style>
