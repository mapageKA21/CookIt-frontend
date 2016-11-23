import {
  Component, OnInit, EventEmitter, Output, Input
} from '@angular/core';

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
  @Input()
  recipes: Recipe[];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private apiClient: ApiService, private authClient: AuthService) { }

  element;
  width:number;
  intervalId;
  scrollTarget:number;

  ngOnInit() {
    this.element = document.querySelector('.scroll-me');
    this.width = this.element.offsetWidth;
  }

  leftScroll () {
    this.element.scrollLeft -= 7;
    console.log(this.element.scrollLeft, this.width);
    if (this.element.scrollLeft > 0) {
        this.intervalId = setTimeout(() => {
        this.leftScroll();
      }, 1/5);
    }
    else{
      console.log("Stop Left");
      return false;
    }
    // else clearInterval(this.intervalId);
  }

  rightScroll () {
    this.scrollTarget = this.element.scrollLeft
    this.element.scrollLeft += 7;
    console.log(this.element.scrollLeft, this.width);
    if (this.element.scrollLeft < this.width) {
        this.intervalId = setTimeout(() => {
        this.rightScroll();
      }, 1/5);
    }
    else {
      console.log("Stop Right");
      return false;
    }
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
