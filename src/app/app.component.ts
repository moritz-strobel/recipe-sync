import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeaderV2Component } from "./header-v2/header-v2.component";

@Component({
    selector: 'app-root',
    imports: [
    RouterOutlet,
    FooterComponent,
    HeaderV2Component
],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

export class AppComponent {
    title = 'recipe-sync'; 
}
