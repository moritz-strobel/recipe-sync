import { Routes } from '@angular/router';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { CookbookComponent } from './page/cookbook/cookbook.component';
import { CookbookHomeComponent } from './page/cookbook-home/cookbook-home.component';
import { GuidelinesComponent } from './page/guidelines/guidelines.component';
import { ImpressComponent } from './page/impress/impress.component';
import { LandingComponent } from './page/landing/landing.component';
import { ProfileComponent } from './page/profile/profile.component';
import { RecipeComponent } from './page/recipe/recipe.component';
import { ReportComponent } from './page/report/report.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { ForgotPasswordComponent } from './page/forgot-password/forgot-password.component';
import { SearchResultContainerComponent } from './page/search-result-container/search-result-container.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'cookbook', component: CookbookComponent },
    { path: 'cookbook-home', component: CookbookHomeComponent },
    { path: 'guidelines', component: GuidelinesComponent },
    { path: 'impress', component: ImpressComponent },
    { path: 'login', component: LoginComponent},
    { path: 'profile', component: ProfileComponent },
    { path: 'recipe', component: RecipeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'report', component: ReportComponent },
    { path: 'search', component: SearchResultContainerComponent },  
    { path: '**', redirectTo: '', pathMatch: 'full' }
];