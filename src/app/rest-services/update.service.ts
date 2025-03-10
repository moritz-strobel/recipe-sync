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

export class UpdateService {

  constructor(private readonly http: HttpClient) { }

  private readonly addrs = 'https://localhost:3000/';

  updateCookbook(id: string, cookbook: CookBook): Observable<CookBook> {
    return this.http.put<CookBook>(`${this.addrs}cookbooks/${id}`, cookbook);
  }

  updateRecipe(id: string, recipe: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(`${this.addrs}recipes/${id}`, recipe);
  }

  updateTag(id: string, tag: Tag): Observable<Tag> {
    return this.http.put<Tag>(`${this.addrs}tags/${id}`, tag);
  }

  updateUser(id: string, user: User): Observable<User> {
    return this.http.put<User>(`${this.addrs}users/${id}`, user);
  }
}
