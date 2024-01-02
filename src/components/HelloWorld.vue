<template>
  <div class="justify-center flex">
    <h1 class="text-xl font-black self-center">{{ title }}</h1>
    <p class="text-md font-light self-center px-2">{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String, 
    subtitle: String
  }
}
</script>


