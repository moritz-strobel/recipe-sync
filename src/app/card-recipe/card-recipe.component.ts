import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { Recipe } from '../custom-types/recipe.type';

@Component({
  selector: 'app-card-recipe',
  imports: [
    MatCardModule
  ],
  templateUrl: './card-recipe.component.html',
  styleUrl: './card-recipe.component.scss'
})

export class CardRecipeComponent {
  @Input({ alias: "recipe", required: true }) recipe!: Recipe;
}
