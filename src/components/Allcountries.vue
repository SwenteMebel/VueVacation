<template>
    <h1>Hier komt alle countries na button</h1>
    <button @click="ophalen()">Show</button><br>
    <button @click="toggleData()">Hide</button>
    <div v-if="!loading" class="bg-yellow-500">Loading... Please wait</div>
    <div v-if="error" class="bg-red-500">Oeps something went wrong {{ errorMsg }}</div>

    <div v-if="countries && countries.length >= 1" class="">
        <ul>
            <li v-for="land of countries" :key="land.name" class="container p-2 m-2 flex flex-wrap justify-center items-center">
                <span class="float-start pr-2"><img :src="land.flags.png" class="max-w-60 md:h-56  rounded-lg shadow-md hover:shadow-lg hover:shadow-black ease-linear duration-300"></span>
                <div class="bg-orange-500 grid items-center max-w-[32rem] md:h-56 p-2 mt-2 md:mt-0 rounded-xl text-md font-mono shadow-md hover:shadow-lg hover:shadow-black ease-linear duration-300"> 
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