<template>
    <div>
        <!-- display all products to edit -->
        <h1 class="text-center grey--text"></h1>
        <!-- call the component to display products -->
        <DisplayComponent/>
    </div>
    
</template>
<script>
// import display products component
import DisplayComponent from '../components/DisplayComponent.vue'
export default {
    components: {
        DisplayComponent
    }
    
}
</script>