import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookBook } from '../../custom-types/cookbook.type';
import { BASE_URL } from '../../../constants';

@Injectable({
    providedIn: 'root'
})
export class CookbookService {

    constructor(private http: HttpClient) {
    }

    getByUserId(userId: string) {
        return this.http.post<CookBook[]>(BASE_URL + '/cookbook', {userId});
    }

    getByTitle(title: string) {
        return this.http.get<CookBook>(BASE_URL + `/cookbook?title=${title}`);
    }

    create(userId: string, createCookbookDto: any) {
        return this.http.post<CookBook>(BASE_URL + `/cookbook`, {userId, cookbook : createCookbookDto});
    }

    addRecipe(cookbookId: string, userId: number, recipeId: string) {
        this.http.put<CookBook>(BASE_URL + `/cookbook/${cookbookId}`, {userId, recipeId}).subscribe();
    }
}
