<template>
  <v-app>
    <v-app-bar app class="app">
      <div class="d-flex align-center">
        <router-link class="mr-4" to="/keluarga">
          Keluarga
        </router-link>
        <router-link to="/about">
          Second Content
        </router-link>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { keluargaCollection, keluargaContentCollection } from "@/lib/firestore/collections";
import dayjs from "@/lib/dayjs";
import { mapMutations } from "vuex";

export default {
  name: "App",
  data: () => ({
    //
  }),
  async mounted() {
    const keluargaDocs = await keluargaCollection.loadCollection({
      orderBy: ["ts", "asc"]
    });
    const contentDocs = await Promise.all(
      keluargaDocs.map(([uid, doc]) =>
        keluargaContentCollection(uid).loadCollection({
          orderBy: ["order", "asc"]
        })
      )
    );
    keluargaDocs.map(([uid, doc], index) => {
      const time = dayjs.unix(doc.ts.seconds);
      doc.ts.str = time.format("dddd, D MMMM YYYY");
      doc.ts.dateNum = `Hari ${index + 1}`;
      doc.contents = contentDocs[index];
    });
    this.setItems(keluargaDocs);
  },
  methods: {
    ...mapMutations("keluarga", ["setItems"])
  }
};
</script>

<style lang="scss">
.app {
  display: block;
  background: red;
}
</style>
