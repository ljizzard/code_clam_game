<template lang="html">
  <div v-for="creature in creatures" :key="creature">
    <div class="card" dataset.name="name" ></div>
    <div class="front"></div>
    <div class="back"></div>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';
import CardGrid from '@/components/CardGrid';

export default {
  name: 'grid-item',
  props: ['creature'],
  methods: {
    handleClick(){
    }
  },

  data() {
    return {
    }
  },

  mounted() {
    this.populateBoard()
  },

  props: {
    cards: {
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
    populateBoard() {

      for (let i = 0; i <= ((this.matchingOptions.length*2)-1); i++) {
      this.cards.push({id:1, showFace: false, matched: false, face: this.getRandomElement() })
      }

      return this.cards
    },


      getRandomElement() {
        let pairs = this.matchingOptions.filter(object => object.pairs >=1)
        pairs = this.shuffleArray(pairs)
        let item = pairs[Math.floor.random() * pairs.length]
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

      handleClick(card) {
        if(card.matched === true || !this.veryfyNonDuplicateGuess(card)) {return}
        this.$emit("compare-matches", card)
      },

      verifyNonDuplicateCGuess(card) {
        if(this.guesses.length === 1 && this.guesses [0].id ===card.id){return false}
        return true
      },
      watch: {
        cards: function (value){
          if (value.length == 0) {
            this.populateBoard();
          }
        }
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
