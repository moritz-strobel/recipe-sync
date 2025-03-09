import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { CardsCookbookContainerComponent } from '../../cards-cookbook-container/cards-cookbook-container.component';
import { CookBook } from '../../custom-types/cookbook.type';
import { ReadService } from '../../rest-services/read.service';

@Component({
  selector: 'app-cookbook-home',
  imports: [
    CommonModule,
    CardsCookbookContainerComponent
],
  templateUrl: './cookbook-home.component.html',
  styleUrl: './cookbook-home.component.scss'
})

export class CookbookHomeComponent {
   cookbooks$: Observable<CookBook[]>;
  
    constructor(private readonly readService: ReadService){
      this.cookbooks$ = this.readService.readReadCookbooks();
    }

  // Mock observables for demonstration; replace these with actual API calls
  favoriteCookbooks$: Observable<any[]> = of([
    {
      id: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
      user: { id: 'user1', name: 'John Doe' },
      title: 'Favorite Recipes',
      isFavorite: true,
      isDeleteable: true,
      isPublic: true,
      description: 'A collection of my favorite recipes.',
      coverImage: 'https://via.placeholder.com/150',
      recipes: [{ id: 'recipe1', name: 'Spaghetti Bolognese' }]
    }
  ]);

  myCookbooks$: Observable<any[]> = of([
    {
      id: '2',
      createdAt: new Date(),
      updatedAt: new Date(),
      user: { id: 'user2', name: 'Jane Smith' },
      title: 'My Personal Cookbook',
      isFavorite: false,
      isDeleteable: true,
      isPublic: false,
      description: 'A collection of recipes I have created.',
      coverImage: 'https://via.placeholder.com/150',
      recipes: [{ id: 'recipe2', name: 'Chocolate Cake' }]
    }
  ]);

  savedCookbooks$: Observable<any[]> = of([
    {
      id: '3',
      createdAt: new Date(),
      updatedAt: new Date(),
      user: { id: 'user3', name: 'Michael Brown' },
      title: 'Saved Recipes',
      isFavorite: false,
      isDeleteable: false,
      isPublic: false,
      description: 'Cookbooks I have saved for inspiration.',
      coverImage: 'https://via.placeholder.com/150',
      recipes: [{ id: 'recipe3', name: 'Grilled Salmon' }]
    }
  ]);
}
