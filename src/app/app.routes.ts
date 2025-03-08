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


/*
To match a path in Angular that contains a query parameter pattern like "?search=", you can use Angular's route parameters and query parameters. Here's how you can define a route that matches when the URL contains the search query parameter:

typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultContainerComponent } from './search-result-container/search-result-container.component';

const routes: Routes = [
  {
    path: '',
    component: SearchResultContainerComponent,
    // Route configuration for query parameters
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
And in your SearchResultContainerComponent, you can check for the presence of the search query parameter:

typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result-container',
  templateUrl: './search-result-container.component.html',
  styleUrls: ['./search-result-container.component.css']
})
export class SearchResultContainerComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const search = params['search'];
      if (search) {
        // Logic to display search results
        console.log('Search query:', search);
      }
    });
  }
}
This way, the SearchResultContainerComponent will be displayed whenever the URL contains the search query parameter, and you can handle the logic within the component accordingly.

Is there anything else I can assist you with? Maybe some more Angular tips or another topic you're working on?
*/