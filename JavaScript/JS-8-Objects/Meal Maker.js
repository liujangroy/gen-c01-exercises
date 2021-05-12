const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },

  get courses() {
    return {
    appetizers: this._courses.appetizers,
    mains: this._courses.mains,
    desserts: this._courses.desserts,
  };
},

   set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },

   set mains(mains) {
    this._courses.appetizers = mains;
  },

   set desserts(desserts) {
    this._courses.appetizers = desserts;
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName]; 
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizers = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizers.price + mains.price + desserts.price
 
    return `Your meal is ${appetizers.name}, ${mains.name}, ${desserts.name}. The price is $${totalPrice}.`;
  }
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 40);
menu.addDishToCourse('appetizers', 'Chicken wings', 55);
menu.addDishToCourse('appetizers', 'Fries', 45);

menu.addDishToCourse('mains', 'Steak', 180);
menu.addDishToCourse('mains', 'Salmon', 130);
menu.addDishToCourse('mains', 'Fried Rice', 120);

menu.addDishToCourse('desserts', 'Ice-cream', 40);
menu.addDishToCourse('desserts', 'Cakes', 60);
menu.addDishToCourse('desserts', 'Puddings', 45);

let meal = menu.generateRandomMeal();
console.log(meal);