import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
    selector: 'app-submit-button',
    imports: [],
    templateUrl: '../button/button.component.html',
    styleUrl: './submit-button.component.scss'
})
export class SubmitButtonComponent extends ButtonComponent {
}
