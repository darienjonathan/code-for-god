<template>
  <iframe v-if="!isYoutube" style="width: 100%; height: 100%;" :src="url" />
  <youtube-i-frame v-else :url="url" />
</template>
<script>
import YoutubeIFrame from "@/components/IFrame/Youtube";
export default {
  name: "IFrame",
  components: {
    YoutubeIFrame
  },
  props: ["url"],
  computed: {
    isYoutube() {
      return /youtube/.test(this.url);
    }
  }
};
</script>
<style lang="scss" scoped></style>
