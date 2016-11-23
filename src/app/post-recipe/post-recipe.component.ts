import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-post-recipe',
  templateUrl: './post-recipe.component.html',
  styleUrls: ['./post-recipe.component.css'],
  providers: [ApiService, AuthService]
})
export class PostRecipeComponent implements OnInit {

  constructor(
  	private apiClient: ApiService,
    private authClient: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  addRecipe(recipe: Object): void {
    this.apiClient.postRecipe(recipe)
    .then((data) => {
      this.router.navigate(['/']);
    })
    .catch((err) => {
      if (err._body) {
        let body = JSON.parse(err._body);
        if (body.error) console.log(body.error);
      }
    });
  }

}
