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
  @ViewChild('editableInput') inputElement!: ElementRef;

  editing: boolean = false;

  startProfileEdit() {
    this.editing = true;
    setTimeout(() => this.focusInput(), 0); // Focus after rendering
  }

  updateProfileField(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input) {
      this.text = input.value;
    }
  }

  saveProfileField(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input) {
      this.text = input.value.trim();
      this.editing = false;
      this.textChange.emit(this.text);
    }
  }

  finishProfileEdit(event: FocusEvent) {
    const input = event.target as HTMLInputElement;
    if (input) {
      this.text = input.value.trim();
      this.editing = false;
      this.textChange.emit(this.text);
    }
  }

  focusInput() {
    this.inputElement.nativeElement.focus();
  }
}