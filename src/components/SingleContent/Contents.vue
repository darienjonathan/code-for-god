<template>
  <div v-if="items.length">
    <v-container fluid>
      <v-row>
        <v-col d-flex class="col-12 col-md-4 col-lg-3" v-for="[uid, item] in items" :key="uid">
          <router-link class="router-link" :to="`/${contentUrl}/${uid}`">
            <v-card elevation="8" height="100%">
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
            </v-card>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "SingleContent-Contents",
  props: ["items", "contentUrl"],
  mounted() {
    console.log(this.items);
  }
};
</script>
<style lang="scss" scoped>
.router-link {
  text-decoration: none;
}
</style>
