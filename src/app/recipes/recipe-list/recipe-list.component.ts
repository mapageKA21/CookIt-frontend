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

  element;
  width:number;
  intervalId;

  ngOnInit() {
    this.element = document.querySelector('.scroll-me');
    this.width = this.element.offsetWidth;

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
      // debugger;
    })
    .catch((err) => {
      console.log(err);
    })
  }

  leftScroll () {
    this.element.scrollLeft -= 7;
    if (this.element.scrollLeft > 0) {
        this.intervalId = setTimeout(() => {
        this.leftScroll();
      }, 1/5);
    }
  }

  rightScroll () {
    this.element.scrollLeft += 7;
    if (this.element.scrollLeft < this.width) {
        this.intervalId = setTimeout(() => {
        this.rightScroll();
      }, 1/5);
    }
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
