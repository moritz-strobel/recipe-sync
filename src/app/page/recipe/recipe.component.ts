import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../custom-types/recipe.type';
import { ActivatedRoute } from '@angular/router';
import { ReadService } from '../../rest-services/read.service';

@Component({
  selector: 'app-recipe',
  imports: [
    CommonModule
  ],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})

export class RecipeComponent implements OnInit {
  recipe!: Recipe;

  constructor(private route : ActivatedRoute, private read : ReadService){ }

  ngOnInit(): void {
    var id = this.route.snapshot.queryParamMap.get("id");

    if(id){
      this.read.readRecipeById(id).subscribe({
        next: result => this.recipe = result.recipe,
        error: err => console.log(err)
      });
    }

  }
}
