import { Routes } from '@angular/router';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { CookbookComponent } from './page/cookbook/cookbook.component';
import { CookbookHomeComponent } from './page/cookbook-home/cookbook-home.component';
import { ExtendedSearchComponent } from './page/extended-search/extended-search.component';
import { GuidelinesComponent } from './page/guidelines/guidelines.component';
import { ImpressComponent } from './page/impress/impress.component';
import { LandingComponent } from './page/landing/landing.component';
import { ProfileComponent } from './page/profile/profile.component';
import { RecipeComponent } from './page/recipe/recipe.component';
import { ReportComponent } from './page/report/report.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'cookbook', component: CookbookComponent },
    { path: 'cookbook-home', component: CookbookHomeComponent },
    { path: 'extended-search', component: ExtendedSearchComponent },
    { path: 'guidelines', component: GuidelinesComponent },
    { path: 'impress', component: ImpressComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'recipe', component: RecipeComponent },
    { path: 'report', component: ReportComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
