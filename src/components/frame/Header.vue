<template>
  <div class="header">
    <b-navbar fixed="top" toggleable="lg" type="dark" variant="dark">
      <!-- <a class="navbar-brand" href="Home"><strong>CMH</strong></a> -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item @click="redirect('/Home')">About Me</b-nav-item>
          <b-nav-item @click="redirect('/Resume')">Resume</b-nav-item>
          <b-nav-item @click="redirect('/Projects')">Projects</b-nav-item>
          <b-nav-item @click="redirect('/Contact')">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped lang="scss">
.header {
  top: 0;
  left: 0;
  right: 0;
  height: 50px; 
}
</style>
<script>
export default {
    data(){
      return{
      }
    },
    methods: {
        redirect(router){
            this.$router.push(router)
        }
    }
}
</script>
