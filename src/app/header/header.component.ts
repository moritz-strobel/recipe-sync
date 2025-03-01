import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { IconNameContainerComponent } from '../icon-name-container/icon-name-container.component';
import { ButtonIconLinkContainerComponent } from "./button-icon-link-container/button-icon-link-container.component";
import { SearchbarComponent } from "../other/searchbar/searchbar.component";

@Component({
  selector: 'app-header',
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    IconNameContainerComponent,
    ButtonIconLinkContainerComponent,
    SearchbarComponent
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
