import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../custom-types/recipe.type';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services';

@Component({
    selector: 'app-recipe',
    imports: [CommonModule],
    templateUrl: './recipe.component.html',
    styleUrl: './recipe.component.scss'
})
export class RecipeComponent implements OnInit {
    recipe!: Recipe;

    constructor(private route: ActivatedRoute, private recipeService: RecipeService) {}

    ngOnInit(): void {
        let id = this.route.snapshot.queryParamMap.get("id");

        if (id) {
            this.recipeService.getById(id).subscribe({
                next: result => {
                    console.log(result);
                    this.recipe = result;
                },
                error: err => console.log(err)
            });
        }

    }

         // Getter for tags, converting string to array if needed
         get tags(): string[] {
            if (typeof this.recipe.tags === 'string') {
              return (this.recipe.tags as string).split(',').map(tag => tag.trim());
            }
            return this.recipe.tags as string[];
          }
        
          // Getter for ingredients, converting string to array if needed
          get ingredients(): string[] {
            if (typeof this.recipe.ingredients === 'string') {
              return (this.recipe.ingredients as string).split(',').map(ingredient => ingredient.trim());
            }
            return this.recipe.ingredients as string[];
          }
}