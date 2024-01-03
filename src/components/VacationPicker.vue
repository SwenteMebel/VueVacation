<template>
    
    <div class="container mx-auto px-4">
        <div class="justify-center flex mt-2 ">
            <input type="text" class="p-1 bg-green-300 border-black rounded-l-lg" placeholder="Add Country" 
            v-model="newCountry"
            @keyup.enter="addCountry(newCountry)">
            
            <button class="btn bg-green-200 p-1 rounded-r-lg font-semibold" 
            @click="addCountry()">Add Country</button>   
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
                        {{ country.name }}<br>
                    </li>
                    <li class="grid border-2 p-2 rounded-lg m-2 bg-rose-500 hover:bg-rose-200 font-semibold"
                    v-for="(country, index) in newCountries" :key="index">
                    {{ country }}
                    
                    </li>
                </ul> 
            </div>
            <div class="border-2 rounded-lg border-yellow-500 bg-gray-200 mt-5 min-w-60 max-w-96">
                <h1 class="text-xl font-black justify-center flex">Selected: {{ selectedCountry.name }}</h1>
                <li class="list-none p-2" v-if="isExpensive()"><span class="bg-red-500 rounded-lg px-2 py-1 font-semibold">Expensive</span></li>
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
            newCountries: []
        }
    },
    methods: {
        selectCountry(index) {
            this.selectedCountryIndex = index;
        },

        isExpensive(){
           return this.CountryData.countries[this.selectedCountryIndex].cost >= 1000;
        },

        addCountry(){
            this.newCountries.push(this.newCountry);
            this.newCountry = '';
        }
        
    },

    computed: {
        selectedCountry() {
            return{
                ...this.CountryData.countries[this.selectedCountryIndex]
            }
        },
    }
}
</script>