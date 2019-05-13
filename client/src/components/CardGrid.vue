<template lang="html">
  <div id="card-grid">
    <ul>
      <CardGridItem />
    </ul>
  </div>
</template>

<script>
import CardGridItem from './CardGridItem';
import {eventBus} from '@/main.js';

export default {
  name: 'card-grid',
  components: {
    CardGridItem
  },
  data() {
    return {
      cards: [],
      matchingOptions: [
        {name: "", pairs: 2},
      ],
      guesses: [],
      clickCount: 0,
      level: 1
    }
  },
  computed: {
    matchesLeft() {
      let matchedRemaining = 0
      let cardsLength = this.cards.length

      for(let i = 0; i < cardsLength; i++) {
        if (this.cards[i].matched == true) {
          ++matchedRemaining
        }
      }
      return ((cardsLength - matchedRemaining)/2)
    }
  },
  methods: {
    handleClickEventFromChild(card) {

      card.showFace = !card.showFace
      ++this.clickCount
      this.guesses.push(card)

      if(this.guesses.length > 1) {
        this.compareGuesses()
      }
    },

    compareGuesses() {
      const self = this

      if(this.guesses[0].face.name === this.guesses[1].face.name) {
        this.guesses[1].matched = true
        this.guesses[0].matched = true
        this.resetRound()
      } else {
        setTimeout(function() {
          self.resetRound()
        }, 500)
      }
    },

    resertRound() {
      this.clickCount = 0
      this.guesses = []
      ++this.level
      for(let i = 0; i < this.cards.length; i++){
        let card = this.cards[i]

        if(card.showFace === true && card.matched === false){
          this.cards[i].showFace = false
        }
      }
    },

    resetGame() {
      this.clickCount = 0
      this.matchingOptions.forEach(function(element){
        element.pairs = 2;
      });
      this.level = 1
      this.guesses = []
      this.cards = []
    }
  }
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
