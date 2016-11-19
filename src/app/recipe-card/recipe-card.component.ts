import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Params } from '@angular/router';
// import { ApiClientService } from '../api-client.service';

import { Recipe } from '../recipes/recipe';

import { ApiService } from '../api.service'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
  providers: [ApiService, AuthService]
})

export class RecipeCardComponent implements OnInit {
  recipes: Recipe[];
  name:string;
  id:number;
  cost:number;
  difficulty:number;
  time:number;
  image_url:string;
  ingredients = [{
            "name": "Potates",
            "quantity": 1,
            "unit": "units"
            },{
            "name": "Eggs",
            "quantity": 2,
            "unit": "units"
            }
          ];
  kit: ["oven", "pan"];
  preparation: "Slice the potates in cubes";
  instructions: [ "Bake the sliced potatoes in the oven",
        "Fry a little bit the potatoes in the pan",
        "Lower the pan heat level. Throw the squashed egg on the pan."
        "Wait until it's cooked at the bottom, then turn it over the pan.",
        "When it gets golden at the bottom again it's ready!" ];
  serving: "Serve the meal on the plate and enjoy it!";
  servings: 2;




  constructor( private apiClient: ApiService ) { }

  //  need to get a recipe based on ID here
  //  something similar to movie.component.ts
  ngOnInit() {
    this.apiClient.signin('arol','Bananas')
    .then( () => this.apiClient.getRecipes () )
    .then((recipes) => {
      this.recipes = recipes;
      this.name = this.recipes[0].name;
      this.id = this.recipes[0].id;
      this.cost = this.recipes[0].cost;
      this.difficulty = this.recipes[0].difficulty;
      this.time = this.recipes[0].time;
      this.image_url = this.recipes[0].image_url;
      console.log(this.cost);
      // debugger;
    })
    .catch((err) => {
      console.log(err);
    })
  }

}
