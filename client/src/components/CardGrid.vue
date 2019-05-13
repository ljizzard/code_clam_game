<template lang="html">
  <div id="game">
    <section class="grid" @click="checkCard"/>
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
      creatures: [],
      props: ['creatures']
    }
  },
  mount(){
    this.createGame();
  }
  methods: {
    const gameGrid = creatures
    .concat(creatures)
    .sort (() => 0.5 - Math.random());

    // template of a component called CardGrid
    // <section class="grid" @click="checkCard"/>
    // const game = document.getElementById('game');
    // const grid = document.createElement('section');
    // grid.setAttribute('class', 'grid');
    // game.appendChild(grid);

    //  pass item as prop to CardListItems

    // template
    // <div class='card' dataset.name = ''>
    // <div class='front'/>
    // <div class='back' :style={ background-image = url }/>

    // gameGrid.forEach(item => {
    //   const { name, img } = item;
    //
    //   const card = document.createElement('div');
    //   card.classList.add('card');
    //   card.dataset.name = name;
    //
    //   const front = document.createElement('div');
    //   front.classList.add('front');
    //
    //   const back = document.createElement('div');
    //   back.classList.add('back');
    //   back.style.backgroundImage = `url(${img})`;
    //
    //   grid.appendChild(card);
    //   card.appendChild(front);
    //   card.appendChild(back);
    // });

    // Data Object {
    //  firstGuess: card
    //  secondGuess: card2
    // }

    const match = () => {
      const selected =
      document.querySelectorAll('.selected');
      selected.forEach(card => {
        card.classList.add('match');
      });
    };

    // method of a component
    const resetGuesses = () => {
      firstGuess = '';
      secondGuess = '';
      count = 0;
      previousTarget = null;

      var selected =
      document.querySelectorAll('.selected');
      selected.forEach(card => {
        card.classList.remove('selected');
      });
    };

    // method called checkGuess
    grid.addEventListener('click', event => {

      const clicked = event.target;

      if (
        clicked.nodeName === 'SECTION' ||
        clicked === previousTarget ||
        clicked.parentNode.classList.contains('selected') ||
        clicked.parentNode.classList.contains('match')
      ) {
        return;
      }
      if ( count < 2 ) {
        count ++;
        if (count === 1) {
          firstGuess =
          clicked.parentNode.dataset.name;
          console.log(firstGuess);
          clicked.parentNode.classList.add('selected');
        } else {
          secondGuess =
          clicked.parentNode.dataset.name;
          console.log(secondGuess);
          clicked.parentNode.classList.add('selected');
        }

        if (firstGuess && secondGuess) {
          if (firstGuess === secondGuess) {
            setTimeout(match, delay);
          }
          setTimeout(resetGuesses, delay);
        }
        previousTarget = clicked;
      }
    })
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
