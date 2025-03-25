import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../custom-types/user.type';
import { BASE_URL } from '../../../constants';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {
    }

    getById(id: string) {
        return this.http.get<User>(BASE_URL + `/user/${id}`);
    }

    updateById(id: string, user: User) {
        return this.http.put<User>(BASE_URL + `/user/${id}`, user);
    }
}
