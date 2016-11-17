import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe('Placeholder','Placeholder','https://staticdelivery.nexusmods.com/mods/110/images/74627-0-1459502036.jpg');

  constructor() { }

  ngOnInit() {
  }

}
