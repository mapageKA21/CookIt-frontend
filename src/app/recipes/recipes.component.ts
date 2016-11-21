import { Component, OnInit } from '@angular/core';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { Recipe } from "./recipe";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html'
})

export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor() { }

  element;
  hover;

  ngOnInit() {
    this.element = document.getElementById('scroll-me');
  }

  leftScroll (event) {
    this.element.scrollLeft += 100;
  }

  rightScroll () {
    this.element.scrollLeft -= 100;
  }
}
