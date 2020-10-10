<template>
  <v-app>
    <v-app-bar app class="app">
      <div class="d-flex align-center">
        <router-link class="mr-4" to="/keluarga">
          Keluarga
        </router-link>
        <router-link class="mr-4" to="/umum">
          Umum
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
import {
  keluargaCollection,
  keluargaContentCollection,
  umumCollection,
  umumContentCollection
} from "@/lib/firestore/collections";
import dayjs from "@/lib/dayjs";
import { mapMutations } from "vuex";

export default {
  name: "App",
  data: () => ({
    //
  }),
  async mounted() {
    this.prepareKeluarga();
    this.prepareUmum();
  },
  methods: {
    ...mapMutations("keluarga", {
      setKeluargaItems: "setItems"
    }),
    ...mapMutations("umum", {
      setUmumItems: "setItems"
    }),
    async prepareKeluarga() {
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
      this.setKeluargaItems(keluargaDocs);
    },
    async prepareUmum() {
      const umumDocs = await umumCollection.loadCollection({
        orderBy: ["ts", "asc"]
      });
      const contentDocs = await Promise.all(
        umumDocs.map(([uid, doc]) =>
          umumContentCollection(uid).loadCollection({
            orderBy: ["order", "asc"]
          })
        )
      );
      umumDocs.map(([uid, doc], index) => {
        const time = dayjs.unix(doc.ts.seconds);
        doc.ts.str = time.format("dddd, D MMMM YYYY");
        doc.ts.dateNum = `Hari ${index + 1}`;
        doc.contents = contentDocs[index];
      });
      this.setUmumItems(umumDocs);
    }
  }
};
</script>

<style lang="scss">
.app {
  display: block;
  background: red;
}
</style>
