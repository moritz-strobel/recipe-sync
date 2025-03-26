import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from './header/header.component';
import { QuickAccessComponent } from './quick-access/quick-access.component';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        FooterComponent,
        HeaderComponent,
        QuickAccessComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

export class AppComponent {
    title = 'recipe-sync';
}
