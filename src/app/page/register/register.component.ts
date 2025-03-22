import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  currentStep = 1;

  steps = [
    { id: 1, title: 'Sign Up', description: 'Enter your email and create a password.', icon: 'fas fa-user' },
    { id: 2, title: 'Verify Email', description: 'Check your inbox and click the verification link.', icon: 'fas fa-envelope' },
    { id: 3, title: 'Complete Profile', description: 'Add your name and preferences to finish.', icon: 'fas fa-id-card' }
  ];

  private fb = new FormBuilder();
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    verificationCode: ['', Validators.required],
    name: ['', Validators.required],
    preferences: ['']
  });

  nextStep() {
    // Debugging: Log form state
    console.log('Current Step:', this.currentStep);
    console.log('Form State:', this.registerForm.value);
    console.log('Email:', this.registerForm.get('email')?.status);
    console.log('Password:', this.registerForm.get('password')?.status);
    console.log('Verification Code:', this.registerForm.get('verificationCode')?.status);

    if (this.currentStep === 1) {
      const email = this.registerForm.get('email');
      const password = this.registerForm.get('password');
      if ((email?.touched || email?.dirty) && email?.invalid) return;
      if ((password?.touched || password?.dirty) && password?.invalid) return;
    }
    if (this.currentStep === 2) {
      const verificationCode = this.registerForm.get('verificationCode');
      if ((verificationCode?.touched || verificationCode?.dirty) && verificationCode?.invalid) return;
    }
    if (this.currentStep < this.steps.length) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  isActive(stepId: number): boolean {
    return this.currentStep === stepId;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form Submitted:', this.registerForm.value);
    }
  }
}