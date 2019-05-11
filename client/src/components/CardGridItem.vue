<template lang="html">
  <div id="card">Image Here</div>
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
#card {
  width: 150px;
  height: 150px;
  background-color: blue;
}
</style>
