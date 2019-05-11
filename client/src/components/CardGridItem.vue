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
<<<<<<< HEAD

=======
>>>>>>> c74a52254b554559e41da7e610300897a3974c8e
    }
  }
}
</script>

<style lang="css" scoped>
</style>
