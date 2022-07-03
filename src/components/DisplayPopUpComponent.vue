<template>
    <v-dialog width="600px" v-model="dialog">
        <template v-slot:activator="{ on, attrs }">
        
        <v-btn @click="addToCart" class="mx-2 mt-2" fab dark small color="orange" v-bind="attrs" v-on="on">
            <v-icon color="white" dark>preview</v-icon>
          </v-btn>
      </template>
      
      <v-card class="px-3 py-4" >
    
          <center>
              <v-zoomer style="width: 200px; height: 200px; border: solid 0.3px silver;">
              <v-img :src="product.imageURL" style="object-fit: contain; width: 100%; height: 100%;">
                
              </v-img>
          </v-zoomer>
          <v-row fixed>
                  <v-col>
                    <v-icon>zoom_in</v-icon>
                  </v-col>
                  <v-col>
                    <v-icon>zoom_out</v-icon>
                  </v-col>
                </v-row>
          </center>
    

    <v-card-title>{{product.productName}}</v-card-title>

    <v-card-text>
      
      <div>{{product.description}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Price</v-card-title>

    <v-card-text>
      <v-chip-group column >
        
        <v-chip class="orange accent-4 white--text text-weight-bold">Rs. {{product.price}}</v-chip>

      </v-chip-group>
    </v-card-text>

    
  </v-card>
        
    </v-dialog>
</template>
<script>

export default {
    data(){
        return{
            dialog: false,
            
        }
    },
    components: {
        
    },
    props: ['product'],
    methods: {
        addToCart() {
            
        }
    }
    
}
</script>