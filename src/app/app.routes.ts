import { Routes } from '@angular/router';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { CookbookComponent } from './page/cookbook/cookbook.component';
import { GuidelinesComponent } from './page/guidelines/guidelines.component';
import { ImpressComponent } from './page/impress/impress.component';
import { LandingComponent } from './page/landing/landing.component';
import { ProfileComponent } from './page/profile/profile.component';
import { RecipeComponent } from './page/recipe/recipe.component';
import { ReportComponent } from './page/report/report.component';
import { LoginComponent } from './page/auth/login/login.component';
import { RegisterComponent } from './page/auth/register/register.component';
import { SearchResultContainerComponent } from './page/search-result-container/search-result-container.component';
import { authGuard } from './guards/auth.guard';
import { CreateRecipeComponent } from './page/create-recipe/create-recipe.component';

export const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'impress', component: ImpressComponent},
    {path: 'report', component: ReportComponent},
    {path: 'guidelines', component: GuidelinesComponent},
    {path: 'search', component: SearchResultContainerComponent},
    {path: 'recipe', component: RecipeComponent},
    {path: 'create-recipe', canActivate: [authGuard], component: CreateRecipeComponent},
    {path: 'cookbook', component: CookbookComponent},
    {path: 'create-cookbook', canActivate: [authGuard], component: CookbookComponent}, ///
    {path: 'profile', canActivate: [authGuard], component: ProfileComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
