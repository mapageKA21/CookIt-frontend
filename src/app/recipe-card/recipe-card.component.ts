import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {DomSanitizer} from "@angular/platform-browser";


import { Recipe } from '../recipes/recipe';
import { RecipeEdamam } from '../recipes/recipe-edamam';

import { ApiService } from '../api.service'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
  providers: [ApiService, AuthService]
})

export class RecipeCardComponent implements OnInit {

  recipe: any;
  isEdamam: boolean = false;

  constructor(
    private apiClient: ApiService,
    private authClient: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private domSanitizer : DomSanitizer
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if (id.indexOf('edamam.com') >= 0) {
        // Is an edamam recipe
        this.isEdamam = true;
        this.recipe = new RecipeEdamam();
      } else {
        this.recipe = new Recipe();
      }
      this.apiClient.getRecipe(id)
        .then((data) => {
          this.recipe.parse(data);
          if (this.recipe.url) {
            this.recipe.url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.recipe.url);
          }
          console.log(this.recipe);
        })
        .catch((err) => {
          console.log(err);
        });
    });

  }

}
