import { Component, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SubmitButtonComponent } from '../submit-button/submit-button.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { SwitchFormButtonComponent } from '../switch-form-button/switch-form-button.component';
import { AuthService } from '../../../../services';

@Component({
    selector: 'app-login-form',
    imports: [
        ReactiveFormsModule,
        SubmitButtonComponent,
        SwitchFormButtonComponent
    ],
    templateUrl: './login-form.component.html',
    styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
    @ViewChild('errorMessage', {read: ViewContainerRef}) vcr: ViewContainerRef | undefined;
    private formBuilder = inject(FormBuilder);
    loginForm = this.formBuilder.group({
        username_or_email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(4)]],
    })

    constructor(private auth: AuthService) {
        this.loginForm.valueChanges.subscribe(() => {
            this.vcr?.clear()
        })
    }

    onSubmit(event: SubmitEvent) {
        if (this.loginForm.invalid) {
            setTimeout(() => {
                (event.submitter as HTMLButtonElement).disabled = false;
            });
            this.showError("Invalid form data");
            return;
        }
        const data = {
            username_or_email: this.loginForm.value.username_or_email!,
            password: this.loginForm.value.password!,
        }

        this.auth.login(data.username_or_email, data.password).subscribe(
            {
                next: (user) => localStorage.setItem("userID", user.id),
                error: (error) => console.log(error)
            }
        )
    }

    showError(message: string) {
        if (this.vcr) {
            this.vcr.clear();
            const ref = this.vcr.createComponent(ErrorMessageComponent);
            ref.setInput('message', message);
        }
    }
}
