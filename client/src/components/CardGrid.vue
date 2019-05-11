<template lang="html">
  <div id="card-grid" v-if="creatures">
    <ul>
      <CardGridItem v-for="(creature, index) in creatures" :key="index" :creature='creature'
    </ul>
  </div>
</template>

<script>
import CardGridItem from './CardGridItem';

export default {
  name: 'card-grid',
  components: {
    CardGridItem
  },
  props: ['cards']
}
</script>

<style lang="css" scoped>
#card-grid {
  width: 750px;
  height: 750px;
  border: 2px solid black;
  padding: 10px;
}
</style>
