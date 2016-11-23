import { Component, OnInit } from '@angular/core';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { Recipe } from "./recipe";

import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { RecipesUpdate } from '../recipes-update';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  providers: [ApiService, AuthService]
})

export class RecipesComponent implements OnInit {
  recipes: Recipe[];
  selectedRecipe: Recipe;
  constructor(private apiClient: ApiService, private RecipesUpdateEvent: RecipesUpdate) {
    this.RecipesUpdateEvent.subscribe({
      next: recipeList => {
        this.selectedRecipe = recipeList.shift() as Recipe;
        this.recipes = recipeList as Recipe[];
      }
    });
  }

  ngOnInit() {
    this.apiClient.getRecipes();
  }
}
