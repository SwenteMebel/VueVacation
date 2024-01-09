<template>
  <headerVue title="Vacation Picker" subtitle="Plan your next visit!"/>

  <router-view />

</template>

<script>
import headerVue from './components/header.vue'


export default {
  name: 'App',
  components: {
    headerVue,
  }
 
}
</script>


