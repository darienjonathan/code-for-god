<template>
  <v-app>
    <v-app-bar app class="app">
      <div class="flex align-center">
        <div class="d-none d-lg-flex">
          <div v-for="(content, id) in contentArr" :key="id">
            <router-link v-if="content.to" :to="content.to" class="mr-4">
              {{ content.title }}</router-link
            >
          </div>
        </div>
        <div class="d-lg-none d-flex align-center">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <span class="text-h6">Menu</span>
        </div>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-navigation-drawer absolute temporary v-model="drawer">
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
            v-for="(content, id) in contentArr"
            :key="id"
          >
            <v-list-item v-if="content.to">
              <router-link :to="content.to">{{ content.title }}</router-link>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import {
  keluargaCollection,
  keluargaContentCollection,
  umumCollection,
  umumContentCollection,
  khotbahCollection,
  renunganCollection,
  diyChristmasCollection,
  kingstoneCollection,
  sabdaMediaKitCollection
} from "@/lib/firestore/collections";
import dayjs from "@/lib/dayjs";
import { mapMutations } from "vuex";
import contents, { topContent } from "@/config/contents";

export default {
  name: "App",
  data: () => ({
    drawer: false,
    group: null,
    contentArr: []
  }),
  mounted() {
    this.prepareKeluarga();
    this.prepareUmum();
    this.prepareKhotbah();
    this.prepareRenungan();
    this.prepareDiyChristmas();
    this.prepareSabdaMediaKit();
    this.prepareKingstone();
    this.prepareContentArr();
  },
  watch: {
    group() {
      this.drawer = false;
    },
    $route() {
      this.prepareContentArr();
    }
  },
  methods: {
    ...mapMutations("keluarga", {
      setKeluargaItems: "setItems"
    }),
    ...mapMutations("umum", {
      setUmumItems: "setItems"
    }),
    ...mapMutations("khotbah", {
      setKhotbahItems: "setItems"
    }),
    ...mapMutations("renungan", {
      setRenunganItems: "setItems"
    }),
    ...mapMutations("kingstone", {
      setKingstoneItem: "setItem"
    }),
    ...mapMutations("sabdaMediaKit", {
      setSabdaMediaKitItem: "setItem"
    }),
    ...mapMutations("diyChristmas", {
      setDiyChristmasItem: "setItem"
    }),
    prepareContentArr() {
      this.contentArr = this.$route.name === "Top" ? contents : [topContent, ...contents];
    },
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
        doc.title = `Hari ${index + 1}`;
        doc.subtitle = time.format("dddd, D MMMM YYYY");
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
        doc.title = `Hari ${index + 1}`;
        doc.subtitle = time.format("dddd, D MMMM YYYY");
        doc.contents = contentDocs[index];
      });
      this.setUmumItems(umumDocs);
    },
    async prepareKhotbah() {
      const khotbahDocs = await khotbahCollection.loadCollection({
        orderBy: ["ts", "asc"]
      });
      khotbahDocs.map(([uid, doc], index) => {
        const time = dayjs.unix(doc.ts.seconds);
        doc.title = `Hari ${index + 1} ${doc.title ? "- " + doc.title : ""}`;
        doc.subtitle = time.format("dddd, D MMMM YYYY");
      });
      this.setKhotbahItems(khotbahDocs);
    },
    async prepareRenungan() {
      const renunganDocs = await renunganCollection.loadCollection({
        orderBy: ["ts", "asc"]
      });
      renunganDocs.map(([uid, doc], index) => {
        const time = dayjs.unix(doc.ts.seconds);
        doc.title = `Hari ${index + 1} ${doc.title ? "- " + doc.title : ""}`;
        doc.subtitle = time.format("dddd, D MMMM YYYY");
      });
      this.setRenunganItems(renunganDocs);
    },
    async prepareKingstone() {
      const kingstoneDoc = await kingstoneCollection.loadDocument();
      this.setKingstoneItem(kingstoneDoc);
    },
    async prepareDiyChristmas() {
      const diyChristmasDoc = await diyChristmasCollection.loadDocument();
      this.setDiyChristmasItem(diyChristmasDoc);
    },
    async prepareSabdaMediaKit() {
      const sabdaMediaKitDoc = await sabdaMediaKitCollection.loadDocument();
      this.setSabdaMediaKitItem(sabdaMediaKitDoc);
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
