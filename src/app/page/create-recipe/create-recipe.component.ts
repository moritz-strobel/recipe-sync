import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Recipe } from '../../custom-types/recipe.type';
import { RecipeService } from '../../services';
import { Router } from '@angular/router';
import { EditableImageComponent } from '../../editable-image/editable-image.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-recipe',
  imports: [CommonModule, ReactiveFormsModule, EditableImageComponent],
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit {
  recipeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeService,
    private router: Router
  ) {
    this.recipeForm = this.fb.group({
      title: ['', Validators.required],
      isPublic: [true, Validators.required],
      generalScore: ['neutral', Validators.required],
      nutriScore: ['C', Validators.required],
      ingredients: this.fb.array([this.fb.control('', Validators.required)], Validators.minLength(1)),
      steps: [1, [Validators.required, Validators.min(1)]],
      preparationTime: [0, [Validators.required, Validators.min(0)]],
      overallCookTime: [0, [Validators.required, Validators.min(0)]],
      recipeText: ['', Validators.required],
      tags: this.fb.array([this.fb.control('', Validators.required)], Validators.minLength(1)),
      coverImage: ['']
    });
  }

  ngOnInit(): void {}

  get ingredients(): FormArray<FormControl> {  // Updated typing
    return this.recipeForm.get('ingredients') as FormArray<FormControl>;
  }

  get tags(): FormArray {
    return this.recipeForm.get('tags') as FormArray;
  }

  addIngredient() {
    this.ingredients.push(this.fb.control('', Validators.required));
    console.log('Ingredients after adding:', this.ingredients.value);
  }

  removeIngredient(index: number) {
    if (this.ingredients.length > 1) {
      this.ingredients.removeAt(index);
      console.log('Ingredients after removing:', this.ingredients.value);
    }
  }

  addTag() {
    this.tags.push(this.fb.control('', Validators.required));
  }

  removeTag(index: number) {
    if (this.tags.length > 1) {
      this.tags.removeAt(index);
    }
  }

  onImageChange(base64String: string) {
    this.recipeForm.patchValue({ coverImage: base64String });
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      const formValue = this.recipeForm.value;
      const recipe: Recipe = {
        id: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        title: formValue.title,
        user: { username: 'currentUser' } as any,
        isPublic: formValue.isPublic,
        generalScore: formValue.generalScore,
        nutriScore: formValue.nutriScore,
        ingredients: formValue.ingredients.filter((i: string) => i.trim() !== ''),
        steps: formValue.steps,
        preparationTime: formValue.preparationTime,
        overallCookTime: formValue.overallCookTime,
        recipeText: formValue.recipeText,
        coverImage: formValue.coverImage,
        tags: formValue.tags.filter((t: string) => t.trim() !== '')
      };

      this.recipeService.create(recipe).subscribe({
        next: (result) => {
          console.log('Recipe created:', result);
          this.router.navigate(['/recipe'], { queryParams: { id: result.id } });
        },
        error: (err) => console.error('Error creating recipe:', err)
      });
    } else {
      this.recipeForm.markAllAsTouched();
    }
  }

  trackByFn(index: number, item: any): number {
    return index;
  }
}