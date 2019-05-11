<template>
  <div id="app">
    <CardGrid :creatures="creatures" />
  </div>
</template>

<script>
import CardGrid from './components/CardGrid'
import { eventBus } from './main'

export default {
  name: 'app',
  components: {
    CardGrid,
    Header
  },
  mounted(){
    this.fetchData();
    eventBus.$on('refresh-data', this.fetchData)
  },
  methods: {
    fetchData(){

    }
  }


}
</script>
