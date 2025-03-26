import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [
        RouterLink
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    @ViewChild('navMenu') navMenu!: ElementRef<HTMLElement>;
    isLoggedIn: boolean = false;

    ngOnInit() {
        this.isLoggedIn = !!localStorage.getItem("userID");
    }

    onClick() {
        const navMenuStyle = this.navMenu.nativeElement.style;
        navMenuStyle.display = navMenuStyle.display === 'flex' ? 'none' : 'flex';
    }
}
