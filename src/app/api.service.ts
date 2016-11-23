import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { AuthService } from './auth.service';
import { RecipesUpdate } from './recipes-update'

@Injectable()
export class ApiService {
  BASE_URL: string = 'http://localhost:3001';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private authService: AuthService,
    private http: Http,
    private recipesUpdateEvent: RecipesUpdate
  ) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private parseCurrentUser(res: Response): Promise<any> {
    let userData:any = res.json();
    this.headers.append('Authorization', userData.auth_token);
    this.authService.setCurrentUser(userData);
    return Promise.resolve(this.authService.getCurrentUser());
  }

  signup (username: string, password: string) {
    return this.http
      .post(`${this.BASE_URL}/users`,
        JSON.stringify({
          username: username,
          password: password
        })
      )
      .toPromise()
      .then((r: Response) => {
        return this.parseCurrentUser(r)
      })
      .catch(this.handleError);
  }

  signin (username: string, password: string) {
    this.headers.set('Authorization', "Basic " + btoa(username + ":" + password))
    return this.http
      .get(`${this.BASE_URL}/sign-in`, { headers: this.headers })
      .toPromise()
      .then((r: Response) => {
        return this.parseCurrentUser(r)
      })
      .catch(this.handleError);
  }

  getRecipes(query?: string) {
    // When this function is called is emitted and event that
    // indicates that we have a new recipe collection, so the
    // recipe list (main or search) should be updated.
    let path: string = '';
    if (query && query !== '') {
      path = `${this.BASE_URL}/search/${query}`;
    } else {
      path = `${this.BASE_URL}/recipes`;
    }
    return this.http
    .get(path, { headers: this.headers })
    .toPromise()
    .then((r: Response) => r.json())
    .then((recipes) => {
      this.recipesUpdateEvent.next(recipes);
      return recipes;
    })
    .catch((error) => {
      console.log(error);
    });
  }

  getRecipe(id: number) {
    return this.http.get(`${this.BASE_URL}/recipes/${id}`)
      .toPromise()
      .then((r: Response) => r.json())
      .catch(this.handleError);
  }

  getSuggestion(ingredient1: string, ingredient2: string, ingredient3: string) {
    return this.http.get(`${this.BASE_URL}/suggestions?one=${ingredient1}&two=${ingredient2}&three=${ingredient3}`)
      .toPromise()
      .then((r: Response) => r.json().recipes)
      .catch(this.handleError);
  }

}
