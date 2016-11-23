export class Recipe {
  id: string;
  name: string;
  image_url: string;
  author: Object;
  category: Object[];
  ingredients: Object[];
  kit: string[];
  preparation: any; // In the mockup is a string... shouldn't be a array of strings at least?
  instructions: string[];
  serving: any; // The same than the preparation
  servings: number;
  difficulty: number;
  time: number;
  cost: number;

  parse(rec: any) {
    this.id = rec.id;
    this.name = rec.name;
    this.image_url = rec.image_url;
    this.author = rec.author;
    this.category = rec.category;
    this.ingredients = rec.ingredients;
    this.kit = rec.kit;
    this.preparation = rec.preparation;
    this.instructions = rec.instructions;
    this.serving = rec.serving;
    this.servings = rec.servings;
    this.difficulty = rec.difficulty;
    this.time = rec.time;
    this.cost = rec.cost;
  }

}
