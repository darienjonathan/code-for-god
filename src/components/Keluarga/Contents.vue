<template>
  <div v-if="keluargaDocs.length">
    <v-container fluid>
      <v-row>
        <v-col
          d-flex
          class="col-12 col-lg-4"
          v-for="([uid, keluarga], index) in keluargaDocs"
          :key="uid"
        >
          <v-card elevation="8" height="100%">
            <v-card-title>Hari {{ index + 1 }}</v-card-title>
            <v-card-subtitle>{{ keluarga.ts.str }}</v-card-subtitle>
            <v-timeline dense>
              <v-timeline-item
                small
                v-for="[contentUid, content] in keluarga.contents"
                :key="contentUid"
              >
                {{ content.title }}
              </v-timeline-item>
            </v-timeline>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { keluargaCollection, keluargaContentCollection } from "@/lib/firestore/collections";
import dayjs from "@/lib/dayjs";

export default {
  name: "Contents",
  data() {
    return {
      keluargaDocs: []
    };
  },
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
      doc.contents = contentDocs[index];
    });
    this.keluargaDocs = keluargaDocs;
  }
};
</script>
<style lang="scss" scoped></style>
