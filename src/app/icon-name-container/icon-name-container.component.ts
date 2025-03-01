import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { LogoComponent } from "../other/logo/logo.component";

@Component({
  selector: 'app-icon-name-container',
  imports: [
    MatInputModule,
    MatListModule,
    LogoComponent
],
  templateUrl: './icon-name-container.component.html',
  styleUrl: './icon-name-container.component.scss'
})

export class IconNameContainerComponent {

}
