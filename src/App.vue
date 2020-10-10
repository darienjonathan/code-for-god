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
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>

<style lang="scss">
.app {
  display: block;
  background: red;
}
</style>
