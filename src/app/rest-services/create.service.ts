import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Types
import { CookBook } from '../custom-types/cookbook.type';
import { Recipe } from '../custom-types/recipe.type';
import { Tag } from '../custom-types/tag.type';
import { User } from '../custom-types/user.type';

@Injectable({
  providedIn: 'root'
})

export class CreateService {

  constructor(private readonly http: HttpClient) { }

  private readonly addrs = 'https://localhost:3000/';

  createCookbook(cookbook: CookBook): Observable<CookBook> {
    return this.http.post<CookBook>(`${this.addrs}cookbooks`, cookbook);
  }

  createRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(`${this.addrs}recipes`, recipe);
  }

  createTag(tag: Tag): Observable<Tag> {
    return this.http.post<Tag>(`${this.addrs}tags`, tag);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.addrs}users`, user);
  }
}
