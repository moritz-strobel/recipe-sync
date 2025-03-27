import { Component } from '@angular/core';
import { RecipeService } from '../../services/';
import { CardRecipeV2Component } from '../../card-recipe-v2/card-recipe-v2.component';

import { Recipe } from '../../custom-types/recipe.type';
import { NgForOf } from '@angular/common';

@Component({
    selector: 'app-landing',
    imports: [
        CardRecipeV2Component,
        NgForOf
    ],
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.scss'
})

export class LandingComponent {
    recipes!: Recipe[];

    constructor(recipeService: RecipeService) {
        recipeService.getAllRecipes().subscribe(
            {
                next: (recipes) => this.recipes = recipes,
                error: (error) => console.log(error)
            }
        );
    }
}
