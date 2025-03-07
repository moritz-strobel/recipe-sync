import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { IconNameContainerComponent } from '../icon-name-container/icon-name-container.component';
import { SearchbarComponent } from "../other/searchbar/searchbar.component";
import { MenuTreeRecipesComponent } from "./menu-tree-recipes/menu-tree-recipes.component";

@Component({
  selector: 'app-header',
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    IconNameContainerComponent,
    SearchbarComponent,
    MenuTreeRecipesComponent,
    MatButtonModule
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  
}
