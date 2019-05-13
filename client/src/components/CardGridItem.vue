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

Vue.component('creatures', {
  template: html,

  data() {
    return {
    }
  },

  mounted() {
    this.populateBoard()
  },

  props: {
    creatures: {
      type: Array,
      required: true
    },

    matchingOptions: {
      type: Array,
      required: true
    },

    guesses: {
      type: Array,
      required: true
    },
  },

  methods: {
    populateBoard( {

      for(let i = 0; i <= ((this.matchingOptions.length*2)-1); i++)
      this.creatures.push({id:1, showFace: false, matched: false, face: this.getRandomElement()})
      }

      return this.creatures
    },


      getRandomElement() {
        let pairs = this.matchingOptions.filter(object => object.pairs >=1)
        pairs = this.shuffleArray(pairs)
        let item = pairs[Math.floor.random() * pairs.length)]
        this.itemToDecrement(item)

        return item
      },



      shuffleArray(array) {
        return _.shuffle(array)
      },

      itemToDecrement(item) {
        let decrementItem = this.matchingOptions.find(pbject => object.name === item.name)
        return this.matchingOptions[decrementItem.pairs-=1]
      },

      handleClick(creature) {
        if(creature.matched === true || !this.veryfyNonDuplicateGuess(creature)) {return}
        this.$emit("compare-matches", creature)
      },

      verifyNonDuplicateCGuess(creature) {
        if(this.guesses.length === 1 && this.guesses [0].id ===creature.id){return false}
        return true
      },
      watch: {
        creatures: function (value){
          if (value.length == 0) {
            this.populateBoard();
          }
        }
      }


    })

</script>

<style lang="css" scoped>
#card {
  width: 150px;
  height: 150px;
  background-color: blue;
}
</style>
