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
  // recipe = new Recipe('Placeholder Name',
  //                     'Placeholder Description',
  //                     'https://staticdelivery.nexusmods.com/mods/110/images/74627-0-1459502036.jpg',
  //                     25,
  //                     5
  //                   );

  constructor(private apiClient: ApiService) { }

  ngOnInit() {
    this.apiClient.signin('arol','Bananas')
    .then(()=>this.apiClient.getRecipes())
    .then((recipes) => {
      this.recipes = recipes;
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
