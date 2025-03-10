import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Recipe } from '../../custom-types/recipe.type';

@Component({
  selector: 'app-recipe',
  imports: [
    CommonModule
  ],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})

export class RecipeComponent {
  @Input() recipe!: Recipe;
}
