<template>
    
    <div class="container mx-auto px-4">
        <div class="flex flex-row col-2 gap-8 justify-center">
            <!--<div class="mt-2">
                <input type="text" class="p-1 bg-green-300 border-black rounded-l-lg" placeholder="Add Country" 
                v-model="newCountry"
                @keyup.enter="addCountry(newCountry)">
                
                <button class="btn bg-green-200 p-1 rounded-r-lg font-semibold" 
                @click="addCountry()">Add Country</button><br>
            </div>
            
            <div class="mt-2 grid">
                
                <p class="text-md font-semibold p-2">Desination cheaper than:</p>
                <select class="border-2" v-model="selectedCost" @change="filterCountries()">
                    <option v-for="(cost, index) in costs" :key="index" :value="cost">
                        {{ cost }}
                    </option>
                </select>
            </div>-->
            
        </div>


        <div class="flex flex-row col-2 gap-8 justify-center">
            <div class="border-2 rounded-lg border-yellow-500 bg-gray-200 mt-5 p-2">
                <h1 class="text-xl font-black  justify-center flex ">Pick your country you want to visit</h1>
                <ul>   
                    <li class="grid border-2 p-2 rounded-lg m-2  bg-slate-400 hover:bg-rose-200 font-semibold" 
                        v-for="country,index in CountryData.countries" 
                        v-bind:key= "country.id"
                        v-bind:title="country.details" 
                        @click="selectCountry(index)">
                        {{ country.name }} (€{{ country.cost }})<br>
                    </li>
                    <!--<li class="grid border-2 p-2 rounded-lg m-2  bg-slate-400 hover:bg-rose-200 font-semibold" 
                    v-for="country, index in filteredCountries" 
                    :key="index"
                    @click="selectCountry(index)">
                        {{ country.name }} (€{{ country.cost }})
                    </li>-->

                    <!--<li class="grid border-2 p-2 rounded-lg m-2 bg-slate-400 hover:bg-rose-200 font-semibold"
                    v-for="(country, index) in newCountries" :key="index">
                    {{ country }}
                    
                    </li>-->
                </ul>  
                <button class="border-2 border-black bg-sky-200 ml-1 p-1 rounded-lg font-semibold">Back</button>
                <button class="border-2 border-black bg-sky-200 ml-1 p-1 rounded-lg font-semibold">Forward</button>
                <button class="border-2 border-black bg-sky-200 ml-1 p-1 rounded-lg font-semibold">Hide Details</button>
            </div> 
            <div class="border-2 rounded-lg border-yellow-500 bg-gray-200 mt-5 min-w-60 max-w-96">
                <h1 class="text-xl font-black justify-center flex">Selected: {{ selectedCountry.name }}</h1>
                <li class="list-none p-2" v-if="isExpensive()"><span class="bg-red-500 rounded-lg px-2 py-1 font-semibold">Expensive</span></li>
                <li class="list-none p-2" v-show="isOnSale()"><span class="bg-red-500 rounded-lg px-2 py-1 font-semibold">On Sale!</span></li>
                <ul>
                    <li class="p-2 m-2 border-2 rounded-lg bg-slate-400 ">Number: {{ selectedCountry.id }}</li>
                    <li class="p-2 m-2 border-2 rounded-lg bg-slate-400">Country: {{ selectedCountry.name }}</li>
                    <li class="p-2 m-2 border-2 rounded-lg bg-slate-400">Capital: {{ selectedCountry.capital }}</li>
                    <li class="p-2 m-2 border-2 rounded-lg bg-slate-400">Price: € {{ selectedCountry.cost }}</li>
                    <li class="p-2 m-2 border-2 rounded-lg bg-slate-400 overflow-y-auto">Details: {{ selectedCountry.details }}</li>
                    <li class="p-2 m-2 border-2 rounded-lg bg-slate-400"><img :src="getImgUrl(selectedCountry.img)" :alt="selectedCountry.img" 
                        class="object-cover h-48 w-96"></li>
                </ul>
              
            </div>
        </div>    
    </div>
</template>

<script>
import CountryData from '@/data/CountryData'
import mixins from '@/mixins/mixins'

export default {
   name: 'VacationPicker',
   mixins: [mixins],
    data(){
        return {
            CountryData,
            selectedCountryIndex: 1,
            newCountry: '',
            newCountries: [],
            costs: [500, 1000, 2000, 3000, 4000, 5000, 6000, 7000],
            selectedCost: 500,
            filteredCountries: [],
        }
    },
    methods: {
        // Als er een lang geselecteerd is zet hij de gegevens in selectedcountryindex.
        selectCountry(index) {
            this.selectedCountryIndex = index;
        },

        // Kijkt welke landen duurder of gelijk zijn aan 1000 
        isExpensive(){
           return this.CountryData.countries[this.selectedCountryIndex].cost >= 1000;
        },

        isOnSale(){
            return this.CountryData.countries[this.selectedCountryIndex].cost <= 500;
        },

        //Land dat word toegevoegd via Add country button of de 'enter'
        addCountry(){
            this.newCountries.push(this.newCountry);
            this.newCountry = '';
        },

        // word gebruikt bij het filteren van de steden die goedkoper zijn dan XX bedrag
        filterCountries(){
            this.filteredCountries = this.CountryData.countries
                .filter(country => country.cost <= this.selectedCost)
        }
        
    },

    computed: {
        // laat het land zien dat geselecteerd is.
        selectedCountry() {
            return{
                ...this.CountryData.countries[this.selectedCountryIndex]
            }
        },
    }
}
</script>