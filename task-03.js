class Storage {
  constructor(items) {
 this.items = items;
  }

 getItems () {
   return this.items;
 };

 addItem (item) {
    this.items.push(item);
 };

 removeItem (item) {
    this.items = this.items.filter(el => (el !== item));
  }; 
};

const storage = new Storage([
 'Нанитоиды',
 'Пролонгер',
 'Железные жупи',
 'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); 

storage.addItem('Дроид');
console.table(storage.items); 

storage.removeItem('Пролонгер');
console.table(storage.items); 
