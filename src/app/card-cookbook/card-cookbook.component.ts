import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CookBook } from '../custom-types/cookbook.type';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-cookbook',
  imports: [
    MatButtonModule,
    MatCardModule,
    RouterLink
  ],
  templateUrl: './card-cookbook.component.html',
  styleUrl: './card-cookbook.component.scss'
})

export class CardCookbookComponent {
  @Input({ alias: "cookbook", required: true }) cookbook!: CookBook;

  constructor() { }

  toggleFavorite() {
    this.cookbook.isFavorite = !this.cookbook.isFavorite;
    console.log(`Cookbook "${this.cookbook.title}" is now ${this.cookbook.isFavorite ? 'a favorite' : 'not a favorite'}`);
  }

  deleteCookBook() {
    if (!this.cookbook.isDeletable) {
      console.warn('This cookbook cannot be deleted.');
      return;
    }
    console.log(`Cookbook "${this.cookbook.title}" deleted.`);
    // Add logic to delete the cookbook via an API call
  }
}
