import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';

import { ApiService } from '../../api.service'
import { AuthService } from '../../auth.service'


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  providers: [ApiService, AuthService]
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private apiClient: ApiService) { }

  ngOnInit() {
    this.apiClient.signin('arol','Bananas')
    .then(()=>this.apiClient.getRecipes())
    .then((recipes) => {
      this.recipes = recipes;
      //  create additional dummy content
      this.recipes[2] = this.recipes[0];
      this.recipes[3] = this.recipes[1];
      this.recipes[4] = this.recipes[0];
      this.recipes[5] = this.recipes[1];
      this.recipes[6] = this.recipes[0];
      this.recipes[7] = this.recipes[1];
      this.recipes[8] = this.recipes[0];
      this.recipes[9] = this.recipes[1];


      this.recipeSelected.emit(recipes[0]); //  load placeholder
      console.log(this.recipes);
      // debugger;
    })
    .catch((err) => {
      console.log(err);
    })
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
