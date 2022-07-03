<template>
<!-- start home page -->
    <div class="homeBackground"> 
        <!-- create one row for displaying logo -->
        <v-row align="center" justify="center">
            <v-img src="../images/homelogo.png" max-height="150" max-width="150">
                
            </v-img>
        </v-row>
        <!-- create one row for displaying company name -->
        <v-row align="center" justify="center" >
      <v-col class="text-center mt-10" cols="12" >
        <span class="text-uppercase font-weight-light">ri</span>
        <span class="text-uppercase">ght</span>
        <h4 class="subheading">
          RIGHT give you focus
        </h4>
      </v-col>
    </v-row>
    <!-- create one row for GET started btn -->
    <v-row align="center" justify="center">
        <router-link to="/loginpage" style="textDecoration: none;">
            <v-btn color="success">
            <v-icon left>transfer_within_a_station</v-icon>Get Started
        </v-btn>
        </router-link>
    </v-row>
 
    </div>
</template>
<script>
export default {
    
}
</script>
// home page style to add img
<style>
.homeBackground{
    background: url('../images/homepage.png');
    background-size: cover;
    height: 90vh;
}
</style>