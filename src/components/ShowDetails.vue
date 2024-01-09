<template>
    <h1>Show Details from a Country</h1>
 
        Country id: {{ id }} <br>
        Country Name: {{ name }}<br>
        Country Price: € {{ country.cost }}<br>
        <img :src="getImgUrl(country.img)" alt="country.img">
        Country Details: {{ country.details }}<br>
    
</template>




<script>
import countryData from '@/data/CountryData';
import mixins from '@/mixins/mixins.js';

export default {
    name: 'ShowDetails',
    mixins: [mixins],


    data(){
        return{
            countryData,
        }
       
    },

    created(){
        this.id = this.$route.params.id; // met deze code haal je de id uit de url balk 
        this.name = this.$route.params.name; // met deze code haal je de naam uit het url balk
        this.country = this.countryData.countries.find(country => country.id === +this.id);
        
    }


}
</script>