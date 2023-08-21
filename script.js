//PRIMO ESERCIZIO

class User {
  // qui dentro definisco la classe
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  static compareAge() {
    if (x.age > y.age) {
      return "Mario é piú vecchio di Luca";
    } else if (y.age > x.age) {
      return "Luca é piú vecchio di Mario";
    } else if (x.age === y.age) {
      return "Mario e Luca hanno la stessa etá";
    }
  }
}

const x = new User("Mario", "Rossi", 20, "Rome");
const y = new User("Luca", "Rossi", 35, "Naples");

console.log(User.compareAge());

//SECONDO ESERCIZIO

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  hasSameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

const petForm = document.getElementById("petForm");
const petList = document.getElementById("petList");
const createPetButton = document.getElementById("createPet");

createPetButton.addEventListener("click", () => {
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const pet = new Pet(petName, ownerName, species, breed);
  displayPet(pet);
});

function displayPet(pet) {
  const petListItem = document.createElement("li");
  petListItem.textContent = `Pet Name: ${pet.petName}, Owner: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
  petList.appendChild(petListItem);
}

console.log(petList);
