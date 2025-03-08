import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { LoginComponent } from "./page/login/login.component";
import { RegisterComponent } from "./page/register/register.component";
import { ForgotPasswordComponent } from "./page/forgot-password/forgot-password.component";
import { CardsCookbookContainerComponent } from "./cards-cookbook-container/cards-cookbook-container.component";
import { CardsRecipeContainerComponent } from "./cards-recipe-container/cards-recipe-container.component";

@Component({
    selector: 'app-root',
    imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    CardsCookbookContainerComponent,
    CardsRecipeContainerComponent,
],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

export class AppComponent {
    title = 'recipe-sync'; 
}
