const creatures = [{
  'name': 'octopus',
  'img': 'img/octopus.png',
  'fact': "An octopus has 8 long limbs called tentacles."
},
{
  'name': 'crab',
  'img': 'img/crab.png',
  'fact': "Crabs can talk to each other by waving their pincers."
},
{
  'name': 'fish',
  'img': 'img/fish.png',
  'fact': "A group of fish is called a school."
},
{
  'name': 'jellyfish',
  'img': 'img/jellyfish.png',
  'fact': "Jellyfish were around before the Dinosaurs."
},
{
  'name': 'turtle',
  'img': 'img/turtle.png',
  'fact': "A turtle can live for more than 80 years"
},
{
  'name': 'seahorse',
  'img': 'img/seahorse.png',
  'fact': "Seahorses like to swim in pairs and link their tails."
},
{
  'name': 'starfish',
  'img': 'img/starfish.png',
  'fact': "Starfish have no brain and no blood."
},
{
  'name': 'whale',
  'img': 'img/whale.png',
  'fact': "A baby whale is called a calf."
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
        timer: 3500
        })
        setTimeout(function() {
          //reload page after 5 seconds
          location.reload();
        }, 3500);
    }

  });
};

// const randomFact = () => {
//   let facts = creatures.map((creature) => {
//     creature.fact
//   })
//     var response = facts[ parseInt( Math.random() * facts.length ) ];
//
// }
//

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
