<template>
  <v-app>
   <Header></Header>
    <v-main>
      <AppBody></AppBody>
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/frame/Header.vue";
import AppBody from "@/components/frame/Body.vue";

export default {
  name: 'App',

  components: {
    Header,
    AppBody
  },

};
</script>
