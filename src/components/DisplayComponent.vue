<template>
        <v-container>
            <v-row justify="center" class="space px-4" grey>
                <v-col cols="8" xs="6" sm="4" md="2">
                    <div>
                        <SearchComponent @search="handleSearch"/>
                    </div>
                </v-col>
            <v-col cols="8" xs="6" sm="4" md="2">
                <div>
                    <PriceComponent @price="handlePrices"/>
                </div>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="8" xs="6" sm="4" md="2">
                <div>
                    <!-- <v-btn class="mx-2" fab dark large color="orange">
                        <v-icon color="white" dark>shopping_cart</v-icon>
                        <span class="text-width-black">{{increaseCart}}</span>
                    </v-btn> -->
                    <WishList :increaseCartSend="increaseCart"/>
                </div>
            </v-col>

            </v-row>
            
            <v-row justify="center" class="space px-4" >
                <v-col cols="8" xs="6" sm="4" md="2" v-for="cate in categories" :key="cate.id" >
                    <CategoryBox :category="cate" @cartIncrease="increaseCarts" />
                </v-col>
            </v-row>
            
        </v-container>
    

    
</template>
<script>
import CategoryBox from './CategoryBox.vue'
import SearchComponent from './SearchComponent.vue'
import PriceComponent from './PriceComponent.vue'
import WishList from './WishList.vue'

const axios = require("axios");
import URL from '../store/index.js';
export default {
    components:{
        CategoryBox,
        SearchComponent,
        PriceComponent,
        WishList
    },
    data(){
        return{
            baseURL: URL.url,
            categories: [],
            filterData: [],
            increaseCart: 0
        };
    },
    methods:{
        getCategories(){
            axios.get(`${this.baseURL}/product/`)
            .then((result) => {
                this.categories = result.data
                this.filterData = result.data
                console.log("kavindu data log"+result.data);
                
            }).catch((err) => {
                console.log("kavindu log "+err);
            });
        },
        handleSearch(value){
            
            if(value && value.length > 0){
                this.categories = this.categories.filter(i => {
                    const val = value.toLowerCase();
                    const productName  = i.productName && i.productName.toLowerCase();

                    if(val && productName.indexOf(val) !== -1) {
                        return true;
                    }
                    return false;
                })
            }else{
                this.categories = this.filterData
            }
        },
        handlePrices(searchText) {
            
            if(searchText.length > 0){
                
                this.categories = this.categories.filter(i => {
                    var price = parseFloat(searchText);
                    var itemP  = parseFloat(i.price);

                    if(itemP > 0 && itemP < price) {
                        return true;
                    }
                    return false;
                })
            }else{
                this.categories = this.filterData
            }
        },
        async increaseCarts() {
            await this.increaseCart++;
            

        }
        

    },
    created() {
        this.getCategories();
    }
}
</script>