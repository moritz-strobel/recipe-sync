import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../../constants';
import { User } from '../../custom-types/user.type';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {
    }

    login(email: string, password: string) {
        return this.http.post(BASE_URL + '/auth/login', {email, password})
    }

    register(user: User) {
        return this.http.post(BASE_URL + '/auth/register', user)
    }

}
