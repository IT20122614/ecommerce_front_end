<template>
    <v-dialog width="600px" v-model="dialog">
        <template v-slot:activator="{ on, attrs }">
        <v-btn color="deep-purple lighten-1" text v-bind="attrs" v-on="on" v-if="['displaycate', 'homeproducts'].indexOf($route.name) === -1" >
          <v-icon size="14">edit</v-icon>
        </v-btn>
      </template>
        <v-card class = "px-5" light>
            <v-card-title>
                <h3 class="text-center my-3">Edit Product</h3>
                <h5 class="ma-3 grey--text">Product Id: {{product.id}}</h5>
            </v-card-title>
            <v-divider class="mx-5"></v-divider>
            <!-- this is the form for update items -->
            <v-form ref="form">
            
            <v-text-field label="Product Name" v-model="productName" :rules="rulecheck" ></v-text-field>
            <v-text-field label="Description" v-model="description" :rules="rulecheck" ></v-text-field>
            <v-text-field label="Price" v-model="price" :rules="rulecheck" type="number" ></v-text-field>
            <v-text-field label="imageurl" v-model="imageURL" :rules="rulecheck" ></v-text-field>
            <!-- update btn -->
            <v-btn class="mx-2 mb-5 white--text" color="indigo" @click="editCategory">Edit</v-btn>
            <v-snackbar color="success" v-model="snackbar" top> {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="closeSnackBar" >
          Close
        </v-btn>
      </template>
    </v-snackbar>
        </v-form>

        </v-card>
    </v-dialog>
</template>
<script>
import axios from 'axios';
import URL from '../store/index.js';
export default {
    data(){
        return{
            baseURL: URL.url,
            dialog: false,
            productName: this.product.productName,
            description: this.product.description,
            price: this.product.price,
            imageURL: this.product.imageURL,
            categoryId: 26,
            id: this.product.id,
            rulecheck: [
              v => !!v || 'Required this field'
            ],
            snackbar: false,
            text: `Item Updated`,
        }
    },
    props: ['product'],
    methods: {
      editCategory() {

        if(this.$refs.form.validate()){
          var editProduct = {
            
            productName : this.productName,
            price : this.price,
            description : this.description,
            imageURL : this.imageURL
          }
          


          axios.put(`${this.baseURL}/product/update/${this.product.id}`, editProduct)
          .then((result) => {
            console.log(result);
            this.snackbar = true;
            // this.$router.push('/displayedit');
            

          })
          .catch((err) => {
            console.log("not updated" + err);
          })
        }


      },
      closeSnackBar() {
        this.snackbar = false;
        this.$router.go();
      }
    }
    
    
}
</script>