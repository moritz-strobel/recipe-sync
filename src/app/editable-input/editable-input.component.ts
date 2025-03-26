import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-editable-input',
  imports: [
    CommonModule
  ],
  templateUrl: './editable-input.component.html',
  styleUrl: './editable-input.component.scss'
})
export class EditableInputComponent {
  @Input({ alias: 'heading', required: false }) heading!: string;
  @Input() text: string = '';
  @Input() defaultText: string = 'Enter text here';
  @Output() textChange: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('editableInput') inputElement!: ElementRef<HTMLInputElement>;

  editing: boolean = false;

  startProfileEdit() {
    this.editing = true;
    setTimeout(() => this.focusInput(), 0); // Focus after rendering
  }

  saveProfileField(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input) {
      this.text = input.value.trim(); // Trim the value
      this.editing = false; // Exit editing mode
      this.textChange.emit(this.text); // Emit the updated value
    }
  }

  focusInput() {
    if (this.inputElement?.nativeElement) {
      this.inputElement.nativeElement.focus();
    }
  }
}