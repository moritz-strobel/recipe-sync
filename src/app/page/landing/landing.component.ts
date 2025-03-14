import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CardsRecipeContainerComponent } from '../../cards-recipe-container/cards-recipe-container.component';

// Type
import { Recipe } from '../../custom-types/recipe.type';

// Service
import { ReadService } from '../../rest-services/read.service';

@Component({
  selector: 'app-landing',
  imports: [
    CardsRecipeContainerComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})

export class LandingComponent {

  recipes$: Observable<Recipe[]>;
  recipe!: Recipe;


  constructor(private readonly read: ReadService) {
    this.recipes$ = this.read.readReadRecipes();
  }

  ngOnInit(): void {
    var id = 1;

    if(id){
      this.read.readRecipeById(id.toString()).subscribe({
        next: result => this.recipe = result.recipe,
        error: err => console.log(err)
      });
    }
  }
}
