class Person {
  #name; // This is truly private (new syntax with #)

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

const person = new Person('Yurii');
console.log(person.getName()); // SyntaxError: Private field '#name' must be declared
