<template>
    <div class="bg-orange-500 grid justify-center p-2">
        <h1 class="text-[2rem] font-serif font-bold">Show all Countries</h1>
        <button @click="ophalen()" class="m-2  p-2 shadow-md hover:shadow-xl hover:shadow-black ease-linear duration-300 rounded-xl text-md bg-orange-200">Show</button><br>
        <button @click="toggleData()" class="m-2 p-2 shadow-md hover:shadow-xl hover:shadow-black ease-linear duration-300 rounded-xl text-md  bg-orange-200">Hide</button>
        <div v-if="!loading" class="bg-yellow-500 font-serif text-xl font-bold text-center">Loading... Please wait</div>
        <div v-if="error" class="bg-red-500 font-serif text-xl font-bold text-center">Oeps something went wrong {{ errorMsg }}</div>
    </div>
    <div v-if="countries && countries.length >= 1" class="flex justify-center">
        <ul>
            <li v-for="land of countries" :key="land.name" class="container p-2 m-2 flex flex-wrap justify-center items-center">
                <span class="float-start pr-2"><img :src="land.flags.png" class="max-w-60 md:h-56  rounded-lg shadow-md hover:shadow-lg hover:shadow-black ease-linear duration-300"></span>
                <div @click="getCountry(land.name.common)" class="bg-orange-500 grid items-center max-w-[32rem] md:h-56 p-2 mt-2 md:mt-0 rounded-xl text-md font-mono shadow-md hover:shadow-lg hover:shadow-black ease-linear duration-300"> 
                    Name: {{ land.name.common }}<br>
                    Capital: {{ land.capital }} <br>
                    Population: {{ land.population }} <br>
                    Languages: {{ land.languages }} <br>
                    Region: {{ land.region }} <br>
                    Currencies: {{ land.currencies }} <br>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'AllCountries',

    methods:{
        ophalen(){
            this.$store.dispatch('showCountries');
        },
        toggleData(){
            this.$store.dispatch('toggleShow');
        },

        getCountry(name){
            console.log(name);
            this.$router.push({
                name:'selectedfromall',
                params:{
                    name: name,
                } 
            });
        }
    },

    computed:{
        countries(){
            return this.$store.state.countries;
        },

        loading(){
            return this.$store.state.loadingStatus === 'notloading';
        },

        error(){
            return this.$store.state.errors.length > 0;
        },

        errorMsg(){
            return this.$store.state.errors;
        },
    }
}


</script>