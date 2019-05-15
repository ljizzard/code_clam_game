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
// random fact generator
const randomFact = creatures[Math.floor(Math.random() * 8)].fact; // returns index at random number
document.getElementById("randomFact").innerHTML = randomFact;

// duplicates array and saves it as gameGrid
const gameGrid = creatures
  .concat(creatures)
  .sort (() => 0.5 - Math.random()); // randomly sorts array gameGrid

// set up initials
let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;
let matchedpairs = 0;

const game = document.getElementById('game'); // get div with id of game
const grid = document.createElement('section'); // create section with class of grid
grid.setAttribute('class', 'grid');
game.appendChild(grid); // add grid section to game div

gameGrid.forEach(item => {
  const { name, img } = item;
  // creates card div for each item in gameGrid
  const card = document.createElement('div'); // creates div
  card.classList.add('card'); // adds class of card to div
  card.dataset.name = name; // sets data-name attribute to name of the creature
  // sets up front of card
  const front = document.createElement('div'); // create div
  front.classList.add('front'); // sets class of div to front
  // sets up back of card
  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${img})`; // sets image to image in array
  // adds new div to grid, and front and back to each card
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

// if a match is found do this...
const match = () => {
  const selected =
  document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match'); // add match class to card
    matchedpairs += 1; // if cards match, add to counter
    if (matchedpairs == 16) { // ie. game complete
      Swal.fire({
        title: 'WOOHOO!!!',
        text: 'You did it! You caught them all!',
        width: 600,
        padding: '3em',
        background: '#fff',
        backdrop: 'rgba(0,0,123,0.4)',
        timer: 5000
        })
        setTimeout(function() {
          location.reload();
        }, 5000); // auto page reload
    }

  });
};

// if not a match, turn the crads back over
const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  var selected =
  document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected'); // removes selected class from card
  });
};

// listens for click in grid
grid.addEventListener('click', event => {

  const clicked = event.target; // event.target is clicked item

  if (
    clicked.nodeName === 'SECTION' || // cant select grid section itself
    clicked === previousTarget || // can't select card thats already selected
    clicked.parentNode.classList.contains('selected') || // can't flip over already matched cards
    clicked.parentNode.classList.contains('match')
  ) {
    return;
  }
  if ( count < 2 ) { // only allows two cards to be selected
    count ++; // increment add 1 to count
    if (count === 1) { // set as first selection
      firstGuess =
      clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected'); // adds selected class to item
    } else { // set as second collection
      secondGuess =
      clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected'); // collates appendChilds as single selection
    }

    if (firstGuess && secondGuess) { // if two cards selected
      if (firstGuess === secondGuess) { // if they match
        setTimeout(match, delay); // run match if they match
      }
      setTimeout(resetGuesses, delay); // run resetGuesses if they dont
    }
    previousTarget = clicked; // can't click same card twice
  }



});
