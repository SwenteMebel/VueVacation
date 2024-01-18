<template>
    <div v-if="!country" class="">
        <h1>Selected country {{ name }}</h1>
       
    </div>
    

</template>


<script>


export default {
    name: 'DetailsSelectAll',

    created(){
        this.name = this.$route.params.name;
       
    },

    computed:{
        country(){
            return this.$store.getters.getCountry(this.name);
        }
    }
}
</script>
