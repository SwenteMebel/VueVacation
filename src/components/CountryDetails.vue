<template>
    
    
    <div class="border-2 rounded-lg border-yellow-500 bg-gray-200 mt-5 min-w-60 max-w-96">
        <h1 class="text-xl font-black justify-center flex"  >Selected: {{ country.name }}</h1>
        <li class="list-none p-2" v-show="isExpensive()"><span class="bg-red-500 rounded-lg px-2 py-1 font-semibold">Expensive</span></li>
        <li class="list-none p-2" v-show="isOnSale()"><span class="bg-red-500 rounded-lg px-2 py-1 font-semibold">On Sale!</span></li>
        <button @click="setRating(+1)" class="bg-green-500  rounded-lg font-semibold text-md p-2 w-9 mx-2">+1</button>
        <button @click="setRating(-1)" class="bg-red-500 rounded-lg font-semibold text-md p-2 w-9  ml-1 ">-1</button>
        <button  @click="ShowCountry(country)" class="bg-gray-500 rounded-lg font-semibold text-md p-2  ml-1">View More Details</button>
        <ul>
            <li class="p-2 m-2 border-2 rounded-lg bg-slate-400 ">Number: {{ country.id }}</li>
            <li class="p-2 m-2 border-2 rounded-lg bg-slate-400">Country: {{ country.name }}</li>
            <li class="p-2 m-2 border-2 rounded-lg bg-slate-400">Capital: {{ country.capital }}</li>
            <li class="p-2 m-2 border-2 rounded-lg bg-slate-400">Price: € {{ country.cost }}</li>
            <li class="p-2 m-2 border-2 rounded-lg bg-slate-400 overflow-y-auto">Details: {{ country.details }}</li>
            <li class="p-2 m-2 border-2 rounded-lg bg-slate-400"><img :src="getImgUrl(country.img)" :alt="country.img" 
                class="object-cover h-48 w-96"></li>
        </ul>
    </div>


</template>


<script>
import mixins from '@/mixins/mixins.js';

export default {
    name: 'CountryDetails',
    mixins: [mixins],
    props: ['country'],


    methods: {
    
        // Als er op +1 of -1 button word gedrukt wordt dit verstuurd naar de parent file dmv this.$emit('waarde', value)
        setRating(value){
            this.$emit('rating', value);
        },

        isExpensive(){
            return this.country.cost >= 1000;
        },

        isOnSale(){
            return this.country.cost <= 500;
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
    // dmv emits: [waarde] stuur je het naar de parent file om daar verder verwerkt te worden.
    emits: ['rating'], 
}
</script>