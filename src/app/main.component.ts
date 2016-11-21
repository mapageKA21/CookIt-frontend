import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes/recipes.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
