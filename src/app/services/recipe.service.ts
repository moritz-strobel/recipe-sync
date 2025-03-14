import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../constants';
import { Recipe } from '../custom-types/recipe.type';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    constructor(private http: HttpClient) {
    }

    getRecipeById(id: string) {
        return this.http.get<Recipe>(BASE_URL + `/recipe/${id}`);
    }

    getRecipeByTitle(title: string) {
        return this.http.get(BASE_URL + `/recipe?title=${title}`);
    }
}
