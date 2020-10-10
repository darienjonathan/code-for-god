<template>
  <div class="pt-10">
    <h1 class="d.flex text-center">Keluarga</h1>
    <contents :items="items" contentUrl="keluarga" />
  </div>
</template>
<script>
import Contents from "@/components/Contents";
import { mapState } from "vuex";
export default {
  name: "Keluarga",
  components: {
    Contents
  },
  computed: {
    ...mapState("keluarga", ["items"])
  }
};
</script>
<style lang="scss" scoped></style>
