<template>
  <content-item :id="id" :item="item" />
</template>
<script>
import { mapGetters } from "vuex";
import ContentItem from "@/components/SingleContent/ContentItem";
import { getPost } from "@/api/index";
export default {
  name: "GamesItem",
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
    ...mapGetters("games", ["getItem"])
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
      if (item.postId) {
        item.post = await getPost(item.postId);
      }

      this.item = item;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@/assets/css/main.scss";
</style>
