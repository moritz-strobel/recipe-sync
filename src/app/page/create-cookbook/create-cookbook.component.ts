import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookbookService } from '../../services'; // Angenommen, es gibt einen CookbookService
import { Router } from '@angular/router';
import { EditableImageComponent } from '../../editable-image/editable-image.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-cookbook',
  standalone: true, // Falls du Standalone-Komponenten nutzt
  imports: [CommonModule, ReactiveFormsModule, EditableImageComponent],
  templateUrl: './create-cookbook.component.html',
  styleUrls: ['./create-cookbook.component.scss']
})
export class CreateCookbookComponent implements OnInit {
  cookbookForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cookbookService: CookbookService, // Erstelle diesen Service, falls noch nicht vorhanden
    private router: Router
  ) {
    this.cookbookForm = this.fb.group({
      title: ['', Validators.required],
      isPublic: [true, Validators.required],
      coverImage: [''],
      description: ['']
    });
  }

  ngOnInit(): void {}

  onImageChange(base64String: string) {
    this.cookbookForm.patchValue({ coverImage: base64String });
  }

  onSubmit() {
    if (this.cookbookForm.valid) {
      const formValue = this.cookbookForm.value;
      const cookbook = {
        title: formValue.title,
        isPublic: formValue.isPublic,
        isFavorite: false, //set by backend
        isDeletable: false, //set by backend
        description: formValue.description, 
        coverImage: formValue.coverImage
      };

      this.cookbookService.create(localStorage.getItem('userID')!, cookbook).subscribe({
        next: (result) => {
          console.log('Cookbook created:', result);
          //this.router.navigate(['/cookbook'], { queryParams: { id: result.id } });
        },
        error: (err) => console.error('Error creating cookbook:', err)
      });
    } else {
      this.cookbookForm.markAllAsTouched();
    }
  }
}