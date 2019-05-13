<template lang="html">
  <div id="view">
    <Header />
    <CardGrid />
  </div>
</template>

<script>
import Header from '@/components/Header';
import CardGrid from '@/components/CardGrid';
import CardGridItem from '@/components/CardGridItem';

export default {
  name: 'game-vue',
    data() {
      return {
      firstGuess: '',
      secondGuess: '',
      count: 0,
      previousTarget: null,
      delay: 1200;
    }
  },
  methods() {
    resetGuesses = () => {
      firstGuess = '';
      secondGuess = '';
      count = 0;
      previousTarget = null;
    }
  }

}
</script>

<style lang="css" scoped>
</style>
