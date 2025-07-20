import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { HttpTokenService } from '../../../auth/services/http-token.service';
import { ToggleDownIconComponent } from "../../icons/toggle-down-icon/toggle-down-icon.component";
import { ToggleUpIconComponent } from "../../icons/toggle-up-icon/toggle-up-icon.component";
import { ProfileIconComponent } from '../../icons/profile-icon/profile-icon.component';

@Component({
  selector: 'app-menu-toggle-button',
  imports: [CommonModule, RouterModule, ToggleDownIconComponent, ToggleUpIconComponent, ProfileIconComponent],
  templateUrl: './menu-toggle-button.component.html',
  styleUrls: []
})
export class MenuToggleButtonComponent {
  isMenuOpen = false;
  user: any = null;

  constructor(private tokenSvc: HttpTokenService, private router: Router) {
    this.tokenSvc.getUser().subscribe(user => {
      this.user = user;
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onOptionClick() {
    this.isMenuOpen = false;
  }

  getInitial() {
    return this.user?.name?.charAt(0).toUpperCase() || '';
  }

  logout() {
    this.tokenSvc.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: err => {
        console.error('Error cerrando sesión:', err);
      }
    });
  }
}


