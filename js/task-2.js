console.log('Задача 2. Склад');
console.log('-----------------');

class Storage {
  #items;

  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    if (!this.#items.includes(newItem)) {
      this.#items.push(newItem);
    }
  }

  removeItem(itemToRemove) {
    const index = this.#items.indexOf(itemToRemove);

    if (index !== -1) {
      this.#items.splice(index, 1);
    }
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

console.log('=========================================');
