class Animal {
    #name;
    #species;
    #energy;
    wayToAttack = "move";
    attacknum = -10;
    static remainingAnimals = 0;

    constructor(name, species) {
        Animal.remainingAnimals++
        this.#name = name
        this.#species = species
    }

    get name() {
        return this.#name
    }

    set name(newName) {
        this.#name = newName
    }

    get species() {
        return this.#species
    }

    set species(newSpecies) {
        this.#species = newSpecies
    }

    getEnergy() {
        return this.#energy
    }

    resetEnergy() {
        this.#energy = 0
    }

    set energy(newEnergy) {
        this.#energy = this.#energy + newEnergy
    }

    attack(target) {

        if (target.getEnergy() === 0 || this.getEnergy() === 0) {
            console.log("Can not start the fight!")
            console.log(`${this.name} energy: ${this.getEnergy()} `)
            console.log(`${target.name} energy: ${target.getEnergy()} `)
            return
        }

        console.log(`${this.name} ${this.wayToAttack} to attack ${target.name} ! `)
        this.energy = this.attacknum
        target.energy = this.attacknum

        if (target.getEnergy() < 0) {
            target.resetEnergy()
        } else if (this.getEnergy() < 0) {
            this.resetEnergy()
        }

        if (target.getEnergy() === 0 && this.getEnergy() > 0) {
            Animal.remainingAnimals--
            console.log(`${this.name} won!`)
        } else if (this.getEnergy() === 0 && target.getEnergy() > 0) {
            Animal.remainingAnimals--
            console.log(`${target.name} won!`)
        } else if (target.getEnergy() === 0 && this.getEnergy() === 0) {
            Animal.remainingAnimals -= 2
            console.log(`It's a tie !`)
        } else if (target.getEnergy() === this.getEnergy()) {
            console.log(`It's a tie !`)
        }
        console.log(`${this.name} energy: ${this.getEnergy()} `)
        console.log(`${target.name} energy: ${target.getEnergy()} `)
    }

    eat(addeEnergy) {
        this.energy = addeEnergy
        console.log(`${this.name} eats and gains energy!`)
        console.log(`${this.name}'s energy: ${this.getEnergy()}.`)
    }

}

class Bird extends Animal {
    #canFly;
    #energy = 100;
    wayToAttack = "swoops in";
    attacknum = -20;
    static remainingAnimals = 0;

    constructor(name, species, canFly) {
        Bird.remainingAnimals++
        super(name, species)
        this.#canFly = canFly
    }

    get canFly() {
        return this.#canFly
    }

    getEnergy() {
        return this.#energy
    }


    resetEnergy() {
        this.#energy = 0
    }

    set energy(newEnergy) {
        this.#energy = this.#energy + newEnergy
    }

    attack(target) {
        return super.attack(target)
    }

    eat() {
        return super.eat(10)
    }
}

class Mammal extends Animal {
    #furColor;
    #energy = 200;
    wayToAttack = "lunges";
    attacknum = -50;
    static remainingAnimals = 0;

    constructor(name, species, furColor) {
        Mammal.remainingAnimals++
        super(name, species,)
        this.#furColor = furColor
    }

    get furColor() {
        return this.#furColor
    }

    getEnergy() {
        return this.#energy
    }


    resetEnergy() {
        this.#energy = 0
    }

    set energy(newEnergy) {
        this.#energy = this.#energy + newEnergy
    }

    attack(target) {
        return super.attack(target)
    }

    eat() {
        return super.eat(20)
    }
}

class Reptile extends Animal {
    #coldBlooded;
    #energy = 100;
    wayToAttack = "move";
    attacknum = -30;
    static remainingAnimals = 0;

    constructor(name, species, coldBlooded) {
        Reptile.remainingAnimals++
        super(name, species,)
        this.#coldBlooded = coldBlooded
    }

    get coldBlooded() {
        return this.#coldBlooded
    }

    getEnergy() {
        return this.#energy
    }


    resetEnergy() {
        this.#energy = 0
    }

    set energy(newEnergy) {
        this.#energy = this.#energy + newEnergy
    }

    attack(target) {
        return super.attack(target)
    }

    eat() {
        return super.eat(15)
    }
}


// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(`Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(`Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`);

const snake = new Reptile("Snake", "Serpent", true);
console.log(`Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`);

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
lion.attack(snake);

// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();
