import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-button',
    imports: [],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
})
export class ButtonComponent {
    @HostListener('click', ['$event'])
    onClick(event: MouseEvent) {
        setTimeout(() => {
            (event.target as HTMLButtonElement).disabled = true;
        });
    }
}
