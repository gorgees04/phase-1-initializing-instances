// Breakfast class
class Breakfast {
  constructor(food, drink) {
    (this.food = food), (this.drink = drink);
  }
}

// Lunch class
class Lunch {
  constructor(salad, soup, drink) {
    (this.salad = salad), (this.soup = soup), (this.drink = drink);
  }
}

// dinner class
class Dinner {
  #dessert;
  constructor(salad, soup, entree, dessert) {
    (this.salad = salad),
      (this.soup = soup),
      (this.entree = entree),
      (this.#dessert = dessert);
  }
}
