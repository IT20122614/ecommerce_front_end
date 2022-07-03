<template>
    <v-container>
        <v-row justify="space-around">
      <v-card width="100%" flat>
        <v-img height="400" src="../images/logoVue.png" width="100%" >

          <v-row align="left" justify="left" class="my-10 mx-10">
        <router-link to="/loginpage" style="textDecoration: none;">
            <v-btn color="yellow" class="black--text" rounded>
            <v-icon left>shop</v-icon>Shop Now
        </v-btn>
        </router-link>
    </v-row>
        </v-img>
        <v-divider></v-divider>
        <div>
          <DisplayComponent/>
        </div>
      </v-card>
    </v-row>
    </v-container>
    
</template>
<script>
import DisplayComponent from '../components/DisplayComponent.vue'

export default {
    components: {
        DisplayComponent
    }
    
}
</script>