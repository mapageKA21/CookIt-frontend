import { Component, OnInit } from '@angular/core';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { Recipe } from "./recipe";

import { ApiService } from '../api.service'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  providers: [ApiService, AuthService]
})

export class RecipesComponent implements OnInit {
  recipes: Recipe[];
  selectedRecipe: Recipe;
  constructor(private apiClient: ApiService) { }

  ngOnInit() {
    this.apiClient.getRecipes()
    .then(recipes => {
      recipes = recipes.recipes;
      this.selectedRecipe = recipes.shift() as Recipe
      console.log(this.selectedRecipe)
      this.recipes = recipes as Recipe[]
    })
  }
}
