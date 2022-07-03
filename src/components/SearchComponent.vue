<template>
    <div>
        <v-container>
            <!-- <input type="text" @change="onChange" @keyup="onChange" v-model="searchText" placeholder="search"/> -->
            <v-text-field @change="onChange" @keyup="onChange" v-model="searchText" placeholder="search" filled rounded dense></v-text-field>
        </v-container>
    </div>
</template>

<script>
export default {
    computed: {},
    data() {
        return{
            searchText: '',
        }
    },
    methods: {
        onChange() {
            this.$emit("search", this.searchText);
        }
    }
    
}
</script>
