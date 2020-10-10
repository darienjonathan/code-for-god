<template>
  <content-item :id="id" :item="item" />
</template>
<script>
import { mapGetters } from "vuex";
import ContentItem from "@/components/ContentItem";
import { getPost } from "@/api/index";
export default {
  name: "KeluargaItem",
  components: {
    ContentItem
  },
  data() {
    return {
      id: undefined,
      item: undefined
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.prepareItem();
  },
  computed: {
    ...mapGetters("keluarga", ["getItem"])
  },
  methods: {
    async prepareItem() {
      if (!this.id) {
        return;
      }
      const item = this.getItem(this.id);
      if (!item) {
        return;
      }
      const postPromises = item.contents.map(
        ([uid, content]) => content.postId && getPost(content.postId)
      );
      const posts = await Promise.all(postPromises);
      posts.forEach((post, index) => {
        item.contents[index][1].post = post;
      });
      this.item = item;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@/assets/css/main.scss";
</style>
