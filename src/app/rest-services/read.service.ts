import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

// Types
import { CookBook } from '../custom-types/cookbook.type';
import { Recipe } from '../custom-types/recipe.type';


@Injectable({
  providedIn: 'root'
})

export class ReadService {

  constructor(private readonly http: HttpClient) { }

  readReadCookbooks(){
    const result$ = this.http.get<{ cookbooks: CookBook[] }>('https://localhost:3000/cookbooks');
    return result$.pipe(
      map((body: { cookbooks: CookBook[] }) => {
        return body.cookbooks;
      })
    );
  }

  readReadRecipes(){
    const result$ = this.http.get<{ recipes: Recipe[] }>('https://localhost:3000/recipes');
    return result$.pipe(
      map((body: { recipes: Recipe[] }) => {
        return body.recipes;
      })
    );
  }
}
