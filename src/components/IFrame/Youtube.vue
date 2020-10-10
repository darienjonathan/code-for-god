<template>
  <v-container>
    <youtube v-if="videoId" :video-id="videoId" ref="youtube" class="iframe" />
  </v-container>
</template>
<script>
export default {
  name: "YoutubeIFrame",
  props: ["url"],
  computed: {
    videoId() {
      if (!this.url) {
        return undefined;
      }
      const urlObj = new URL(this.url);
      const useQs = /watch/.test(urlObj.pathname);
      return useQs ? urlObj.searchParams.get("v") : urlObj.pathname.replace("/", "");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@/assets/css/main.scss";
.iframe {
  @include xs {
    width: 100%;
  }
}
</style>
