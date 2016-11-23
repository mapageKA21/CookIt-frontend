import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesUpdate } from './recipes-update'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [ RecipesUpdate ]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
