<template>
  <div class="wrapper">
    <div class="hero flex justify-center">
      <div class="text-h3 text-md-h2 text-lg-h1 flex text-center title font-weight-black">
        PAKET NATAL
      </div>
      <div class="text-h6 text-lg-h5 flex text-center subtitle mt-4 px-8">
        Cara baru bagi gereja dan orang percaya untuk merayakan masa Advent dan Natal tahun 2020
        dengan berbagai pengalaman yang menarik dan menyenangkan
      </div>
    </div>
    <v-container fluid>
      <v-row>
        <v-col d-flex class="col-12 col-md-4" v-for="(content, index) in contentArr" :key="index">
          <router-link class="router-link" :to="`${content.to || ''}`">
            <v-card elevation="8" height="100%">
              <v-card-title>{{ content.title }}</v-card-title>
              <v-card-text>{{ content.text }} </v-card-text>
            </v-card>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import contents from "@/config/contents";
export default {
  name: "Top",
  data() {
    return {
      contentArr: contents
    };
  }
};
</script>
<style lang="scss" scoped>
@import "~@/assets/css/main.scss";

.wrapper {
  height: 100%;
}

.hero {
  width: 100vw;
  height: 70%;
  background: #00ffff;
  @include md {
    height: 100%;
  }
}

.title {
  padding-top: 25vh;
  font-size: 60px;
  @include md {
    padding-top: 35vh;
  }
}

.router-link {
  text-decoration: none;
}
</style>
