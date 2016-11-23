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
    this.scrollTarget = Math.min(
      this.element.scrollLeft - this.width/2, 
      0)
    this.performScroll('left')
  }

  rightScroll () {
    this.scrollTarget = Math.max(
      this.element.scrollLeft + this.width/2, )
    this.performScroll('right')
  }

  performScroll(direction){
    const scrollSpeed = 7
    const scrollPan = direction==='right'? scrollSpeed : -scrollSpeed;
    const currentLeft = this.element.scrollLeft;
    this.element.scrollLeft += scrollPan;
    if(currentLeft === this.element.scrollLeft) return;
    console.log(this.element.scrollLeft, this.scrollTarget);
    const condition = direction==='right' ?
      this.element.scrollLeft < this.scrollTarget :
      this.element.scrollLeft > this.scrollTarget;

    if (condition) {
        this.intervalId = setTimeout(() => {
        this.performScroll(direction);
      }, 1/5);
    }
    else {
      console.log("Stop " + direction);
      return false;
    }
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
