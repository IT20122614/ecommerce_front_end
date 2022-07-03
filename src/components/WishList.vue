<template>
    <v-dialog width="600px" v-model="dialog">
        <template v-slot:activator="{ on, attrs }">
        <!-- Display Cart -->
            <v-btn class="mx-2" fab dark large color="orange" v-bind="attrs" v-on="on" v-if="['homeproducts'].indexOf($route.name) === -1">
                <v-icon color="white" dark>shopping_cart</v-icon>
                <span class="text-width-black">{{increaseCartSend}}</span>
            </v-btn>
            <!-- end of Cart -->
      </template>
      <!-- Display wishlist popup window -->
        <v-card class="pa-5" >
            <center><h2 class="grey--text mb-5">Wish List</h2></center>
            <v-row>
                <v-col>product</v-col>
                <v-col>name</v-col>
                <v-col>Price (Rs.)</v-col>
                <v-col>Remove item</v-col>
            </v-row>
            <v-row v-for="wishList in wishLists" :key="wishList.productName" class="my-3 orange white--text">
                <v-col>
                    <v-img :src="wishList.imageURL" height="80" width="80"></v-img>
                </v-col>
                <v-col>
                    <p v-if="wishList.productName.length < 14">{{wishList.productName}}</p>
                    <p v-else>{{wishList.productName.substring(0, 14) + ".."}}</p>
                </v-col>
                <v-col>
                    <p>{{wishList.price}}</p>
                </v-col>
                <v-col>
                    <v-btn fab class="white" small @click="removeItem(wishList.id)">
                        <v-icon class="orange--text">remove_shopping_cart</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-card>
        
    </v-dialog>
</template>
<script>
const axios = require("axios");
import URL from '../store/index.js';
export default {
    data(){
        return{
            baseURL: URL.url,
            dialog: false,
            wishLists: [],
            username: '',
            
            
        }
    },
    components: {
        
    },
    props: ['increaseCartSend'],
    methods: {
        displayCart() {
            this.username = sessionStorage.getItem('id');
            axios.get(`${this.baseURL}/cart/display/${this.username}`)
            .then((result) => {

                this.wishLists = result.data;
                console.log("kavindu data log"+result.data);
                
            }).catch((err) => {
                console.log("kavindu log "+err);
            });
        },
        removeItem(id) {
            axios.delete(`${this.baseURL}/cart/delete/${id}`)
            .then((result) => {

                this.$router.go();
                console.log("kavindu data log"+result.data);
                
            }).catch((err) => {
                console.log("kavindu log "+err);
            });


        }
    },
    created() {
        this.displayCart();

    }
    
}
</script>