import { Component } from '@angular/core';
import { CardsRecipeContainerComponent } from '../../cards-recipe-container/cards-recipe-container.component';

// Type
import { Recipe } from '../../custom-types/recipe.type';
import { RecipeService } from '../../services/recipe.service';

@Component({
    selector: 'app-landing',
    imports: [
        CardsRecipeContainerComponent
    ],
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.scss'
})

export class LandingComponent {
    recipes: Recipe[] = [];

    constructor(private readonly recipeService: RecipeService) {
        this.recipeService.get("1").subscribe({
            next: (recipe: Recipe) => this.recipes.push(recipe),
            error: (err) => console.log(err),
        });
    }
}
