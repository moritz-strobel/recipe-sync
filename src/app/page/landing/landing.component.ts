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

  constructor(private readonly readService: ReadService) {
    this.recipes$ = this.readService.readReadRecipes();
  }
}
