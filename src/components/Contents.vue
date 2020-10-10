<template>
  <div v-if="items.length">
    <v-container fluid>
      <v-row>
        <v-col d-flex class="col-12 col-md-4 col-lg-3" v-for="[uid, item] in items" :key="uid">
          <router-link class="router-link" :to="`/${contentUrl}/${uid}`">
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
export default {
  name: "Contents",
  props: ["items", "contentUrl"]
};
</script>
<style lang="scss" scoped>
.router-link {
  text-decoration: none;
}
</style>
