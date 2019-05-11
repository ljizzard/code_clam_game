use seaCreatures;
db.dropDatabase();

db.creatures.insertMany([
  {
    name: "Fish",
    image: '@/assets/fish.png'
    fact: "A group of fish is called a school"
  }
  {
    name: "Starfish",
    image: "@/assets/starfish.png",
    fact:"Starfish have no brain and no blood"
  }
  {
    name: "Turtle",
    image: "@/assets/turtle.png",
    fact: "Sea turtles can live for as long as 80 years"
  }
  {
    name: "Octopus",
    image: "@/assets/octopus.png",
    fact:"An octopus has eight long legs called tentacles"
  }
  {
    name: "Whale",
    image: "@/assets/whale.png",
    fact:  "A baby whale is called a calf"
  }
  {
    name: "Crab",
    image: "@/assets/crab.png",
    fact:"Crabs communicate with each other by waving their pincers"
  }
  {
    name: "Jellyfish",
    image: "@/assets/jellyfish.png",
    fact: "Jellyfish were around before the Dinosaurs"
  }
  {
    name: "Seahorse",
    image: "@/assets/seahorse.png",
    fact: "Seahorses like swimming in pairs with their tails linked together."
  }
]);
