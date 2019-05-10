use seaCreatures;
db.dropDatabase();

db.creatures.insertMany([
  {
    name: "Fish",
    image: null,
    fact: "A group of fish is called a school"
  }
  {
    name: "Starfish",
    image: null,
    fact:"Starfish have no brain and no blood"
  }
  {
    name: "Turtle",
    image: null,
    fact: "Some turtles can hide their head inside their hard shell"
  }
  {
    name: "Octopus",
    image: null,
    fact:"An octopus has eight long legs called tentacles"
  }
  {
    name: "Whale",
    image: null,
    fact:  "A baby whale is called a calf"
  }
  {
    name: "Crab",
    image: null,
    fact:"Crabs communicate with each other by waving their pincers"
  }
  {
    name: "Jellyfish",
    image: null,
    fact: "Jellyfish were around before the Dinosaurs"
  }
  {
    name: "Seahorse",
    image: null,
    fact: "Seahorses like swimming in pairs with their tails linked together."
  }
]);
