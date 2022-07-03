<template>
    <v-flex>
        <v-hover v-slot="{ hover }">
          <!-- display items with full details -->
        <v-card :class="{ 'on-hover': hover }" :elevation="hover ? 12 : 2" class="mx-auto my-3 lighten-3 pa-2" height="210">
        <v-img height="60%" :src="category.imageURL">
          <v-btn class="mx-2" fab dark small color="orange" @click="addToCart" v-if="['homeproducts'].indexOf($route.name) === -1" >
            <v-icon color="white" dark>add_shopping_cart</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          
          <DisplayPopUpComponent :product="category"/>
        </v-img>
        
        <h4 class="font-weight-black mt-3 text-caption mb-3" v-if="category.productName.length < 18">{{category.productName}}</h4>
        <h4 class="font-weight-black mt-3 text-caption mb-3" v-else>{{category.productName.substring(0,18) + ".."}}</h4>
        <!-- <v-card-text>
          
          <div class="font-weight-bold black--text" v-if="['displaycate'].indexOf($route.name) === -1">Product ID {{category.id}}</div>
        </v-card-text> -->

    <v-divider class="mx-4"></v-divider>

    
    <v-row>
      <v-col>
        <v-flex>
          <h3 class="orange--text text-caption text-weight-bold">Rs. {{category.price}}</h3>
        </v-flex>
      </v-col>
      <v-col>
        <v-flex :right="true">
          <EditPopupComponent :product="category"/>
        </v-flex>
      </v-col>
    </v-row>
  </v-card>
        </v-hover>
        
    </v-flex>
</template>
<script>
import EditPopupComponent from './EditPopupComponent.vue'
import DisplayPopUpComponent from './DisplayPopUpComponent.vue'
import axios from 'axios';
import URL from '../store/index.js';

export default {
  data(){
    return{
      baseURL: URL.url,
      id: 0,
      username: sessionStorage.getItem('id'),
      productName: '',
      price: '',
      description: '',
      imageURL: ''
      
    }
  },
  // computed: {

  // },
  
  components: {
    EditPopupComponent,
    DisplayPopUpComponent
  },
    name: 'CategoryBox',
    props: ["category"],

    
    methods:{
        edititem(){
          // this.editProductObj.name = category.name;
          // this.editProductObj.description = category.description;
          // this.editProductObj.imageURL = category.imageURL;
          // this.editProductObj.price = category.price;
          // alert(this.category.id);
          this.$router.push(`/edit/${this.category.id}`);

        },
        async addToCart(){
          const addCartTo = {
            id: 0,
            username: this.username,
            productName: this.category.productName,
            price: this.category.price,
            description: this.category.description,
            imageURL: this.category.imageURL
          }

          axios.post(`${this.baseURL}/cart/add`, addCartTo)
          .then((result) => {
                this.$emit('cartIncrease', 1);
                console.log(result);
            }).catch((err) => {
                console.log(err);
            });
          
          
        },
        displayItem() {
          alert("view");
        }
    }
}
</script>

<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>