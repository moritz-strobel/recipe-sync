import { Component, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SubmitButtonComponent } from '../submit-button/submit-button.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { SwitchFormButtonComponent } from '../switch-form-button/switch-form-button.component';
import { AuthService } from '../../../../services';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register-form',
    imports: [
        ReactiveFormsModule,
        SubmitButtonComponent,
        SwitchFormButtonComponent
    ],
    templateUrl: './register-form.component.html',
    styleUrl: './register-form.component.scss',
})
export class RegisterFormComponent {
    @ViewChild('errorMessage', {read: ViewContainerRef}) vcr: ViewContainerRef | undefined;
    private formBuilder = inject(FormBuilder);
    signupForm = this.formBuilder.group({
        first_name: ['', [Validators.required]],
        last_name: ['', [Validators.required]],
        username: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(4)]],
    })

    constructor(private authService: AuthService, private router: Router) {
        this.signupForm.valueChanges.subscribe(() => {
            this.vcr?.clear()
        })
    }

    onSubmit(event: SubmitEvent) {
        if (this.signupForm.invalid) {
            setTimeout(() => {
                (event.submitter as HTMLButtonElement).disabled = false;
            });
            this.showError("Invalid form data");
            return;
        }
        const user = {
            first_name: this.signupForm.value.first_name!,
            last_name: this.signupForm.value.last_name!,
            username: this.signupForm.value.username!,
            email: this.signupForm.value.email!,
            password: this.signupForm.value.password!,
        }

        this.authService.register(user).subscribe({
            next: (user) => {
                localStorage.setItem("userID", user.id);
                void this.router.navigate(['/']);
            },
            error: err => {
                (event.submitter as HTMLButtonElement).disabled = false;
                this.showError(err.message);
            }
        });
    }

    showError(message: string) {
        if (this.vcr) {
            this.vcr.clear();
            const ref = this.vcr.createComponent(ErrorMessageComponent);
            ref.setInput('message', message);
        }
    }
}
