import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Recipe } from '../custom-types/recipe.type';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-recipe',
  imports: [
    MatButtonModule,
    MatCardModule,
    RouterLink
  ],
  templateUrl: './card-recipe.component.html',
  styleUrl: './card-recipe.component.scss'
})

export class CardRecipeComponent {
  @Input({ alias: "recipe", required: true }) recipe!: Recipe;

  constructor() { }

  toggleFavorite() {
    //this.recipe.isFavorite = !this.recipe.isFavorite;
    //console.log(`Cookbook "${this.recipe.title}" is now ${this.recipe.isFavorite ? 'a favorite' : 'not a favorite'}`);
  }

  deleteCookBook() {
    /*
    if (!this.recipe.isPublic) {
      console.warn('This cookbook cannot be deleted.');
      return;
    }
    console.log(`Cookbook "${this.recipe.title}" deleted.`);
    // Add logic to delete the cookbook via an API call
    */
  }

  displayRecipePage(){
    console.log(this.recipe.id);
  }
}
