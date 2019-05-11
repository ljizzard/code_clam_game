<template>
  <div id="app">
    <Header />
    <CardGrid />
  </div>
</template>

<script>
import CardGrid from './components/CardGrid';
import Header from './components/Header';
import { eventBus } from './main';

export default {
  name: 'app',
  components: {
    CardGrid,
    Header
  },
  mounted(){
    this.fetchData();
    // eventBus.$on('refresh-data', this.fetchData)
  },
  methods: {
    fetchData(){

    }
  }


}
</script>
