import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-editable-image',
  imports: [
    CommonModule
  ],
  templateUrl: './editable-image.component.html',
  styleUrls: ['./editable-image.component.scss']
})
export class EditableImageComponent {
  @Input() src?: string; // Holds the source of the image
  @Input() alt?: string; // Holds the alt text of the image

  showPlaceholder: boolean = true; // Initially show the placeholder icon

  onImageError() {
    this.showPlaceholder = true; // Show placeholder if the image fails to load
  }

  onImageLoad() {
    this.showPlaceholder = false; // Hide placeholder if the image loads successfully
  }

  onEdit() {
    const fileInput = document.createElement('input'); // Dynamically create an <input type="file">
    fileInput.type = 'file';
    fileInput.accept = 'image/*'; // Allow only image files
    fileInput.addEventListener('change', (event: Event) => {
      this.onFileSelected(event); // Handle file selection
    });
    fileInput.click(); // Open the file picker
  }

  private onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const reader = new FileReader();
      reader.onload = () => {
        this.src = reader.result as string; // Update the image source
        this.showPlaceholder = false; // Ensure the placeholder is hidden
      };
      reader.readAsDataURL(input.files[0]); // Convert the image to Base64
      console.log(reader);
    }
  }
}
