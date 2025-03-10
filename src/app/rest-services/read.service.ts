import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

// Types
import { CookBook } from '../custom-types/cookbook.type';
import { Recipe } from '../custom-types/recipe.type';
import { Tag } from '../custom-types/tag.type';
import { User } from '../custom-types/user.type';


@Injectable({
  providedIn: 'root'
})

export class ReadService {

  constructor(private readonly http: HttpClient) { }

  private readonly addrs = 'https://localhost:3000/';

  readReadCookbooks(){
    const result$ = this.http.get<{ cookbooks: CookBook[] }>(this.addrs + 'cookbooks');
    return result$.pipe(
      map((body: { cookbooks: CookBook[] }) => {
        return body.cookbooks;
      })
    );
  }

  readReadRecipes(){
    const result$ = this.http.get<{ recipes: Recipe[] }>(this.addrs + 'recipes');
    return result$.pipe(
      map((body: { recipes: Recipe[] }) => {
        return body.recipes;
      })
    );
  }

  readReadTags(){
    const result$ = this.http.get<{ tags: Tag[] }>(this.addrs + 'tags');
    return result$.pipe(
      map((body: { tags: Tag[] }) => {
        return body.tags;
      })
    );
  }

  readReadUser(){
    const result$ = this.http.get<{ users: User[] }>(this.addrs + 'users');
    return result$.pipe(
      map((body: { users: User[] }) => {
        return body.users;
      })
    );
  }
}
