import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-quick-access',
    imports: [
        RouterLink
    ],
    templateUrl: './quick-access.component.html',
    styleUrl: './quick-access.component.scss'
})
export class QuickAccessComponent {
    @ViewChild('plusMenu') plusMenu!: ElementRef<HTMLElement>;

    onClick() {
        const navMenuStyle = this.plusMenu.nativeElement.style;
        navMenuStyle.display = navMenuStyle.display === 'flex' ? 'none' : 'flex';
    }

}
