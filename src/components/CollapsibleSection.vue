<template>
    <div class="text-center mt-2">
        <span class="border-2 border-green-500 p-2 rounded-xl font-semibold" v-if="open" @click="open = !open">&#x25B2; Collapse</span>
        <span class="border-2 border-sky-500 p-2 rounded-xl font-semibold" v-if="!open" @click="open = !open">&#x25BC; Expand</span>
        <transition >
            <slot v-if="open"></slot>
        </transition>
        
    </div>
</template>

<script>
export default {
    name: 'CollapsibleSection',

    data(){
        return{
            open: false,
        }
    }
}
</script>

<style scoped>

</style>