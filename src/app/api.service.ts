import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { AuthService } from './auth.service'

@Injectable()
export class ApiService {
  BASE_URL: string = 'http://localhost:3001';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private authService: AuthService, private http: Http) { }

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
    return this.http
      .get(`${this.BASE_URL}/recipes`, { headers: this.headers })
      .toPromise()
      .then((r: Response) => r.json())
  }

  getRecipe(id: number) {
    return this.http.get(`${this.BASE_URL}/categies/${id}`)
      .toPromise()
      .then((r: Response) => r.json())
      .catch(this.handleError)
  }

  postRecipe(recipe: Object) {
    console.log(recipe);
    return this.http.post(`${this.BASE_URL}/recipes`, recipe)
      .toPromise()
      .then((r: Response) => r.json())
      .catch(this.handleError)
  }

}
