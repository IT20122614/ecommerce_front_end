<template>
    <div>
        <v-container>
            <!-- <input type="text" @change="onChange" @keyup="onChange" v-model="searchText" placeholder="search"/> -->
            <v-select :items="items" label="Max Price" v-model="searchText" @change="onChange" @keyup="onChange" ></v-select>
        </v-container>
    </div>
</template>

<script>
export default {
    computed: {},
    data() {
        return{
            searchText: '',
            items: ['1000', '2000', '5000', '10000', '100000', '500000'],
        }
    },
    methods: {
        onChange() {
            this.$emit("price", this.searchText);
        }
    }
    
}
</script>
<style>
.v-select{
    width: 100px
}
</style>