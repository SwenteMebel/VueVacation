<template>
  <div class="justify-start flex bg-blue-300 h-20 px-3">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld title="Vacation Picker" subtitle="Plan your next visit!"/>
  </div>

  <router-view />
 
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
  }
 
}
</script>


