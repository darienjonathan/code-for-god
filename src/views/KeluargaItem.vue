<template>
  <div>
    <div v-if="item">
      <div class="my-10">
        <h1 class="d.flex text-center">{{ item.ts.dateNum }}</h1>
        <h2 class="d.flex text-center">{{ item.ts.str }}</h2>
      </div>
      <v-breadcrumbs :items="paths">
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item>
            <router-link :to="item.to">
              {{ item.url }}
            </router-link>
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
      <v-expansion-panels>
        <v-expansion-panel v-for="[uid, content] in item.contents" :key="uid">
          <v-expansion-panel-header>{{ content.title }}</v-expansion-panel-header>
          <v-expansion-panel-content class="text-wrap" v-if="content.post"
            ><wordpress :post="content.post"
          /></v-expansion-panel-content>
          <v-expansion-panel-content class="text-wrap" v-else-if="content.url"
            ><a :href="content.url">{{ content.url }}</a></v-expansion-panel-content
          >
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Wordpress from "@/components/Wordpress";
import { getPost } from "@/api/index";
import upperCaseFirstLetter from "@/lib/upperCaseFirstLetter.js";
export default {
  name: "KeluargaItem",
  components: {
    Wordpress
  },
  data() {
    return {
      id: undefined,
      item: undefined,
      paths: []
    };
  },
  async mounted() {
    this.id = this.$route.params.id;
    await this.prepareItem();
    this.preparePath();
  },
  computed: {
    ...mapGetters("keluarga", ["getItem"])
  },
  methods: {
    preparePath() {
      if (!this.item || !this.id) {
        return;
      }
      const splittedPaths = this.$route.path.split("/").filter(path => path.length);
      const paths = splittedPaths.map((path, index) => ({
        to: "/" + splittedPaths.slice(0, index + 1).join("/"),
        url: path === this.id ? this.item.ts.dateNum : upperCaseFirstLetter(path)
      }));
      this.paths = paths;
    },
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
@import "~@/assets/css/main.css";
</style>
