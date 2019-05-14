const creatures = [{
  'name': 'octopus',
  'img': 'img/octopus.png'
},
{
  'name': 'crab',
  'img': 'img/crab.png'
},
{
  'name': 'fish',
  'img': 'img/fish.png'
},
{
  'name': 'jellyfish',
  'img': 'img/jellyfish.png'
},
{
  'name': 'turtle',
  'img': 'img/turtle.png'
},
{
  'name': 'seahorse',
  'img': 'img/seahorse.png'
},
{
  'name': 'starfish',
  'img': 'img/starfish.png'
},
{
  'name': 'whale',
  'img': 'img/whale.png'
}
];

const gameGrid = creatures
  .concat(creatures)
  .sort (() => 0.5 - Math.random());

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;
let matchedpairs = 0;

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(item => {
  const { name, img } = item;

  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

// const winbox = () => {
//   alert("You did it!!!")
// }

const match = () => {
  const selected =
  document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
    matchedpairs += 1;
    if (matchedpairs == 16) {
      Swal.fire({
        title: 'WOOHOO!!! You did it!!!',
        width: 600,
        padding: '3em',
        background: '#fff',
        backdrop: 'rgba(0,0,123,0.4)',
        onAfterClose: ''
      })
    }

  });
};

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



});
