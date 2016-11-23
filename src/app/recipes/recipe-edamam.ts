export class RecipeEdamam {
  id: string;
  name: string;
  image_url: string;
  ingredients: string[];
  calories: number;
  url: string;

  parse(rec: any) {
    this.id = rec.id;
    this.name = rec.name;
    this.image_url = rec.image_url;
    this.ingredients = rec.ingredients;
    this.calories = rec.calories;
    this.url = rec.url;
  }
}
