import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartButtonComponent } from '../buttons/cart-button/cart-button.component';
import { MenuToggleButtonComponent } from '../buttons/menu-toggle-button/menu-toggle-button.component';
import { LogoIconComponent } from '../icons/logo-icon/logo-icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CartButtonComponent,
    MenuToggleButtonComponent,
    LogoIconComponent
  ],
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent {}
