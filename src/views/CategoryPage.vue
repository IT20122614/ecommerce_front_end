<template>
    <div class="container">
        
        <v-card class="mx-auto my-12 green lighten-5 px-6 py-6" light max-width="470">
            <center>
                <v-card-title>
                    <h4 class="grey--text">Add Product here</h4>
                </v-card-title>
            </center>

            <v-divider class="mx-5"></v-divider>

            <v-form ref="form">
            <v-text-field label="Product Name" v-model="name" :rules="rulecheck" ></v-text-field>
            <v-text-field label="Description" v-model="description" :rules="rulecheck" ></v-text-field>
            <v-text-field label="Price" v-model="price" :rules="rulecheck" type="number" ></v-text-field>
            <v-text-field label="imageurl" v-model="imageURL" :rules="rulecheck" ></v-text-field>
            <v-btn class="mx-2" text rounded dark color="indigo" @click="addCategory">
                <v-icon>mdi-plus</v-icon>Add product
            </v-btn>
            <v-snackbar color="success" v-model="snackbar" top> {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="closeSnackBar" >
          Close
        </v-btn>
      </template>
    </v-snackbar>
        </v-form>

        </v-card>
        
    </div>

    
</template>
<script>
// using axios
const axios = require("axios");
import URL from '../store/index.js';

export default {
    data(){
        return{
            baseURL: URL.url,
            name: '',
            description: '',
            imageURL: '',
            price: '',
            rulecheck: [
                v => !!v || 'Required'
            ],
            snackbar: false,
            text: `Item Added`,
            
            
        }
    },
    methods: {
        async addCategory(){
            if(this.$refs.form.validate()){
                var category1 ={
                
                price: this.price,
                id: 0,
                productName: this.name,
                description: this.description,
                imageURL: this.imageURL,
            }
            
            axios.post(`${this.baseURL}/product/create`,category1)
            .then((result) => {
                this.snackbar = true;
                console.log(result);
            }).catch((err) => {
                console.log(err);
            });
            
            }
            
            
        },
        closeSnackBar() {
        this.snackbar = false;
        this.$router.go();
      }
        
    }
}
</script>