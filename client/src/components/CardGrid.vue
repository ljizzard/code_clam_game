<template lang="html">
  <div id="card-grid">
    <ul>
      <CardGridItem />
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
  background-color: grey;
  margin: auto;
  width: 750px;
  height: 750px;
  border: 2px solid black;
  padding: 10px;
}
</style>
