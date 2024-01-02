<template>
    <div class="container mx-auto px-4 list-group">
        <h1>Pick your country you want to visit</h1>
            <div class="border-2 columns-2 bg-orange-200"
                v-for="c in CountryData.countries" 
                v-bind:key= "c.id">
                Country: {{ c.name }} <br>
                Capital: {{ c.capital }}<br>
                Price: € {{ c.cost }}<br>
                <div class="border-2">
                    <img class="" src="{{ c.img }}" alt="plaatje stad"> <br>
                    Details: {{ c.details }}<br>
                </div>
                
            </div>  
    </div>
</template>

<script>
import CountryData from '@/data/CountryData'

export default {
   name: 'VacationPicker',
    data(){
        return {
            CountryData
        }
    },
}
</script>