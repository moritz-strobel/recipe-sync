import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchbarComponent } from '../searchbar/searchbar.component';

@Component({
    selector: 'app-header',
    imports: [
        RouterLink,
        SearchbarComponent
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
    @ViewChild('navMenu') navMenu!: ElementRef<HTMLElement>;
    isLoggedIn: boolean = false;

    ngOnInit() {
        this.isLoggedIn = !!localStorage.getItem("userID");
    }

    onClick() {
        const navMenuStyle = this.navMenu.nativeElement.style;
        navMenuStyle.display = navMenuStyle.display === 'flex' ? 'none' : 'flex';
    }

    onLogout() {
        localStorage.removeItem("userID");
        location.reload();
    }
}
