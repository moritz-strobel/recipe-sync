import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../custom-types/recipe.type';
import { CardRecipeComponent } from '../card-recipe/card-recipe.component';

@Component({
    selector: 'app-cards-recipe-column',
    imports: [
        CommonModule,
        CardRecipeComponent
    ],
    templateUrl: './cards-recipe-column.component.html',
    styleUrl: './cards-recipe-column.component.scss'
})
export class CardsRecipeColumnComponent {
    @Input({alias: "heading", required: false}) heading!: string;
    @Input({alias: "recipes", required: true}) recipes!: Recipe[];

    constructor() {
    }
}
