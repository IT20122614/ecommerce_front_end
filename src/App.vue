<template>
  <v-app>
    <NavBar/>
    <v-main>
      <router-view/>
    </v-main>
    <FooterComponent />
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    FooterComponent
  }

  
};
</script>
<style>

.container{
  margin-left: 20px;
  margin-right: 20px;
}

</style>
