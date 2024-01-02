<template>
    <div class="container mx-auto px-4">
        <h1 class="text-xl font-black  justify-center flex">Witch Car would you like to rent?</h1>
        <div class="border-2 bg-blue-300 justify-center flex rounded-xl" 
            v-for="car in CarsData.cars"
            :key="car.id"
            :title="car.naam">
            
            <p class="font-bold ">Car: {{ car.naam }} <br>
            Brench: {{ car.merk }} <br>
            Type: {{ car.type }} <br>
            Price: € {{ car.prijs }} </p><br>

        </div>
    </div>
</template>

<script>
import CarsData from '@/data/CarData';

export default {
name: 'CareList',
data(){
    return {
        CarsData
    }
}

}
</script>