<template>
    <div class="container mx-auto px-4">
        <div class="flex flex-row col-auto gap-8 justify-center">
            <div class="border-2 rounded-lg border-yellow-500 bg-gray-200 mt-5 p-2">
                <h1 class="text-xl font-black  justify-center flex ">Pick your country you want to visit</h1>
                <ul>   
                    <li class="grid border-2 p-2 rounded-lg m-2 bg-slate-400 hover:bg-rose-200 font-semibold grid-cols-2" 
                    @click="ShowCountry(country)"    
                    v-for="country in CountryData.countries" 
                        v-bind:key= "country.id"
                        v-bind:title="country.details">
                        <div class="">{{ country.name }}</div>
                        <div v-if="country.rating !== 0" class="grid justify-center px-3 border-2 rounded-xl w-8">{{ country.rating }}</div><br>
                    </li>
                </ul>  
                <button @click="remove(selectedCountryIndex)" class="bg-red-500 p-1 ml-2 rounded-lg font-semibold">Delete </button>
            </div> 
             <!-- <collapsible-section>
               Via @rating krijgen we data terug vanuit de child en dat word dan verder bewerkt als dat in deze component nodig is
                 Via :country versturen data naar de child, en dan kan dat daar ook weer verwerkt worden mocht dit nodig zijn 
                
                <CountryDetails v-if="selectedCountry" @rating="onRating($event)" :country="selectedCountry" />
            </collapsible-section>-->
        </div>    
    </div>
</template>

<script>
import CountryData from '@/data/CountryData.js'
import mixins from '@/mixins/mixins.js'
//import CountryDetails from './CountryDetails.vue'
//import CollapsibleSection from './CollapsibleSection.vue'


export default {
   name: 'VacationPicker',
   mixins: [mixins],
  
   components: {
        //CountryDetails,
        //CollapsibleSection,
   },
   
    data(){
        return {
            CountryData,
            selectedCountryIndex: 0,
            
        }
    },

    methods: {
        // Als er een lang geselecteerd is zet hij de gegevens in selectedcountryindex.
        selectCountry(index) {
            this.selectedCountryIndex = index;
        },
        remove(){
            this.CountryData.countries.splice(this.selectedCountryIndex, 1);
        },  
        onRating(rating){
            this.CountryData.countries[this.selectedCountryIndex].rating += rating; 
        },
        // Met deze functie zet je het id en de naam van het land in de URL balk
        ShowCountry(country){
            console.log('er is op', country.name ,'gedrukt');
            this.$router.push({
                name:'detail',
                params:{
                    id:country.id,
                    name: country.name,
                   

                } 
            });
        }
       
    },

    computed: {
        // laat het land zien dat geselecteerd is.
        selectedCountry() {
            return{
                ...this.CountryData.countries[this.selectedCountryIndex]
            }
        },
        
    },

   
}
</script>