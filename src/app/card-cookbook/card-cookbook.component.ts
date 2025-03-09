import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
//import { MatCardModule } from '@angular/material/card';
import { CookBook } from '../custom-types/cookbook.type';

@Component({
  selector: 'app-card-cookbook',
  imports: [
    //MatCardModule,
    CommonModule
  ],
  templateUrl: './card-cookbook.component.html',
  styleUrl: './card-cookbook.component.scss'
})

export class CardCookbookComponent {
  @Input({ alias: "cookbook", required: true }) cookbook!: CookBook;

  @Input() cookBook!: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    user: { id: string; name: string }; // Assuming a simple User type
    title: string;
    isFavorite: boolean;
    isDeleteable: boolean;
    isPublic: boolean;
    description: string;
    coverImage: string;
    recipes: { id: string; name: string }[]; // Assuming a simple Recipe type
  };

  toggleFavorite() {
    this.cookBook.isFavorite = !this.cookBook.isFavorite;
    console.log(`CookBook "${this.cookBook.title}" is now ${this.cookBook.isFavorite ? 'a favorite' : 'not a favorite'}`);
  }

  deleteCookBook() {
    if (!this.cookBook.isDeleteable) {
      console.warn('This cookbook cannot be deleted.');
      return;
    }
    console.log(`CookBook "${this.cookBook.title}" deleted.`);
    // Add logic to delete the cookbook via an API call
  }
}
