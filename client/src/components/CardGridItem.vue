<template lang="html">
  <li v-on:click="handleClick">{{ creature.image }}</li>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  name: 'grid-item',
  props: ['creatures'],
  methods: {
    handleClick(){

    }
  }
}
</script>

<style lang="css" scoped>
</style>
