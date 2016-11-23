import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipes/recipe'

import { ApiService } from '../api.service'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css'],
  providers: [AuthService, ApiService]
})
export class SuggestionComponent implements OnInit {
  selectedRecipe : Recipe;
  recipes: Recipe[];

  constructor(
    private apiClient: ApiService,
    private authClient: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  getSuggestions(ingredient1: string, ingredient2: string, ingredient3: string) {
    this.apiClient.getSuggestion(ingredient1,ingredient2,ingredient3)
    .then(recipes => {
      this.selectedRecipe = recipes.shift() as Recipe;
      this.recipes = recipes as Recipe[];
    })
  }

}
