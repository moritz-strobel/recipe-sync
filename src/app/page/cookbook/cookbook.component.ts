import { Component, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { merge } from 'rxjs';
import { CookBook } from '../../custom-types/cookbook.type';
import { User } from '../../custom-types/user.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cookbook',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.scss']
})

export class CookbookComponent {
  readonly title = new FormControl('', [Validators.required]);
  readonly coverImage = new FormControl('');
  readonly description = new FormControl('');

  cookbook: CookBook | null = null;

  titleErrorMessage = signal('');
  isDeleteable = signal(true); // Example: Update based on cookbook details

  constructor() {
    merge(this.title.statusChanges, this.title.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateTitleErrorMessage());
  }

  updateTitleErrorMessage() {
    if (this.title.hasError('required')) {
      this.titleErrorMessage.set('Title is required');
    } else {
      this.titleErrorMessage.set('');
    }
  }

  saveCookbook() {
    this.cookbook = {
      id: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
      user: { 
        id: 'user1',
        createdAt: new Date(), 
        updatedAt: new Date(), 
        first_name: 'John', 
        last_name: 'Doe', 
        username: 'JohnDoe', 
        email: 'john.doe@example.com', 
        passwordHash: 'hashed_password_here', 
        profileText: 'Sample profile text', 
        profileImage: 'base64string_of_profile_image'
    },
    
      title: this.title.value || '',
      isFavorite: false,
      isDeleteable: this.isDeleteable(),
      isPublic: false,
      description: this.description.value || '',
      coverImage: this.coverImage.value || '',
      recipes: [] // Add logic to associate recipes
    };
  }

  deleteCookbook() {
    if (this.isDeleteable()) {
      this.cookbook = null; // Reset or remove the cookbook
    }
  }
}
