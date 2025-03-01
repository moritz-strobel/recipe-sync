import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MenuTreeRecipesComponent } from "../menu-tree-recipes/menu-tree-recipes.component";

@Component({
  selector: 'app-button-icon-link-container',
  imports: [
    MatListModule, 
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MenuTreeRecipesComponent
  ],
  templateUrl: './button-icon-link-container.component.html',
  styleUrl: './button-icon-link-container.component.scss'
})

export class ButtonIconLinkContainerComponent {

}
