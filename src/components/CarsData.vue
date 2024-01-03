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
        <p>Kies een getal</p>
        <select name="getallen" id="lijst1">
            <option v-for="g in getallen" :key="g" :value="g">{{ g }}</option>
        </select>
    </div>
</template>

<script>
import CarsData from '@/data/CarData';

export default {
name: 'CareList',
data(){
    return {
        CarsData,
        getallen: [10, 20, 30, 40, 50, 60, 70, 'Hallo dit is tekst']
    }
}

}
</script>