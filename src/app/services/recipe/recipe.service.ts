import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../../custom-types/recipe.type';
import { BASE_URL } from '../../../constants';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    constructor(private http: HttpClient) {
    }

    getAllRecipes() {
        return this.http.get<Recipe[]>(BASE_URL + `/recipe`);
    }

    getById(id: string) {
        return this.http.get<Recipe>(BASE_URL + `/recipe/${id}`);
    }

    getByUser(userId: string) {
        return this.http.get<Recipe[]>(BASE_URL + `/recipe?userId=${userId}`);
    }

    getByTitle(title: string) {
        return this.http.get<Recipe>(BASE_URL + `/recipe?title=${title}`);
    }

    getByTags(tags: string) {
        return this.http.get<Recipe[]>(BASE_URL + `/recipe?tags=${tags}`);
    }

    create(recipe: Recipe) {
        return this.http.post<Recipe>(BASE_URL + `/recipe`, recipe);
    }

}
