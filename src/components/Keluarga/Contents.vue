<template>
  <div v-if="items.length">
    <v-container fluid>
      <v-row>
        <v-col d-flex class="col-12 col-md-4 col-lg-3" v-for="[uid, item] in items" :key="uid">
          <router-link class="router-link" :to="`/keluarga/${uid}`">
            <v-card elevation="8" height="100%">
              <v-card-title>{{ item.ts.dateNum }}</v-card-title>
              <v-card-subtitle>{{ item.ts.str }}</v-card-subtitle>
              <v-timeline dense>
                <v-timeline-item
                  small
                  v-for="[contentUid, content] in item.contents"
                  :key="contentUid"
                >
                  {{ content.title }}
                </v-timeline-item>
              </v-timeline>
            </v-card>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Contents",
  computed: {
    ...mapState("keluarga", ["items"])
  }
};
</script>
<style lang="scss" scoped>
.router-link {
  text-decoration: none;
}
</style>
