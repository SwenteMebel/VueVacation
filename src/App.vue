<template>
  <div class="justify-start flex bg-blue-300 h-20 px-3">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld title="Vacation Picker" subtitle="Plan your next visit!"/>
    <div class="">
      <button @click="increment()" class="btn bg-green-500 p-1 ml-1 rounded-lg font-semibold">Like</button>
      <button @click="decrement()" class="btn bg-red-500 p-1 ml-1 rounded-lg font-semibold">Dislike</button>
      {{ counter }}
    </div>
      
  </div>

  <VacationPicker />
  <CarsList />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import VacationPicker from './components/VacationPicker.vue'
import CarsList from './components/CarsData.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    VacationPicker,
    CarsList 
  },
  data(){
    return{
      counter: 0
    }
  },
  methods: {
    increment(){
      this.counter++;
    },
    decrement(){
      this.counter--;
    }
  }
}
</script>


