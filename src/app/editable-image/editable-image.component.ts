import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editable-image',
  imports: [CommonModule],
  templateUrl: './editable-image.component.html',
  styleUrls: ['./editable-image.component.scss']
})
export class EditableImageComponent {
  @Input() src?: string; // Holds the source of the image
  @Input() alt?: string; // Holds the alt text of the image
  @Output() imageChanged = new EventEmitter<string>(); // Emit the new Base64 string

  showPlaceholder: boolean = true; // Initially show the placeholder icon

  onImageError() {
    this.showPlaceholder = true; // Show placeholder if the image fails to load
  }

  onImageLoad() {
    this.showPlaceholder = false; // Hide placeholder if the image loads successfully
  }

  onEdit() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.addEventListener('change', (event: Event) => {
      this.onFileSelected(event);
    });
    fileInput.click();
  }

  private onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const reader = new FileReader();
      reader.onload = () => {
        this.src = reader.result as string; // Update local src
        this.showPlaceholder = false;
        this.imageChanged.emit(this.src); // Emit the Base64 string to parent
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
}