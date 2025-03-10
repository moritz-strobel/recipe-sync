import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DeleteService {

  constructor(private readonly http: HttpClient) { }

  private readonly addrs = 'https://localhost:3000/';

  deleteCookbook(id: string): Observable<void> {
    return this.http.delete<void>(`${this.addrs}cookbooks/${id}`);
  }

  deleteRecipe(id: string): Observable<void> {
    return this.http.delete<void>(`${this.addrs}recipes/${id}`);
  }

  deleteTag(id: string): Observable<void> {
    return this.http.delete<void>(`${this.addrs}tags/${id}`);
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.addrs}users/${id}`);
  }
}
