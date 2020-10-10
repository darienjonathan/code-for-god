<template>
  <v-container>
    <h1 class="flex text-center">{{ content.title }}</h1>
    <h3 class="flex text-center">{{ content.text }}</h3>
  </v-container>
</template>
<script>
import contents from "@/config/contents";
export default {
  name: "Keluarga",
  props: ["content-name"],
  data() {
    const content = contents.find(content => content.name === this.contentName);
    return {
      content
    };
  }
};
</script>
<style lang="scss" scoped></style>
