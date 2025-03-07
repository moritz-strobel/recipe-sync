import {Component} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-menu-tree-recipes',
  imports: [
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './menu-tree-recipes.component.html',
  styleUrl: './menu-tree-recipes.component.scss'
})

export class MenuTreeRecipesComponent {
  
}
