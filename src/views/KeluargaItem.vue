<template>
  <div>
    <div v-if="item">
      <div class="my-10">
        <h1 class="d.flex text-center">{{ item.ts.dateNum }}</h1>
        <h2 class="d.flex text-center">{{ item.ts.str }}</h2>
      </div>
      <v-expansion-panels>
        <v-expansion-panel v-for="[uid, content] in item.contents" :key="uid">
          <v-expansion-panel-header>{{ content.title }}</v-expansion-panel-header>
          <v-expansion-panel-content class="text-wrap" v-if="content.post"
            ><wordpress :post="content.post"
          /></v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Wordpress from "@/components/Wordpress";
import { getPost } from "@/api/index";
export default {
  name: "KeluargaItem",
  components: {
    Wordpress
  },
  data() {
    return {
      item: undefined,
      paths: []
    };
  },
  async mounted() {
    const id = this.$route.params.id;
    const item = this.getItem(id);
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
    console.log({ item, posts });
    this.item = item;
  },
  computed: {
    ...mapGetters("keluarga", ["getItem"])
  }
};
</script>
<style lang="scss" scoped>
@import "~@/assets/css/main.css";
</style>
