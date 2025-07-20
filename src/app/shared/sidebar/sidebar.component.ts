import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpTokenService } from '../../auth/services/http-token.service';
import { OrdersIconComponent } from '../icons/orders-icon/orders-icon.component';
import { UsersIconComponent } from '../icons/users-icon/users-icon.component';
import { PlantsIconComponent } from '../icons/plants-icon/plants-icon.component';
import { HomeIconComponent } from '../icons/home-icon/home-icon.component';
import { ShopIconComponent } from '../icons/shop-icon/shop-icon.component';
import { TipsIconComponent } from '../icons/tips-icon/tips-icon.component';
import { CloseSidebarIconComponent } from '../icons/close-sidebar-icon/close-sidebar-icon.component';
import { OpenSidebarIconComponent } from '../icons/open-sidebar-icon/open-sidebar-icon.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, OrdersIconComponent, UsersIconComponent, PlantsIconComponent, HomeIconComponent, ShopIconComponent, TipsIconComponent, OpenSidebarIconComponent, CloseSidebarIconComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class SidebarComponent {
  isOpen = signal(true);
  errMessage: string | null = null;
  user: any | null = null;

  constructor(
    private svc: HttpTokenService,
  ) {}

   ngOnInit(): void {
    this.svc.getUser().subscribe({
      next: (res: any) => {
        this.user = res;
      },
      error: (err: any) => {
        this.errMessage = err;
      }
    });
  }

  toggleSidebar() {
    this.isOpen.update(open => !open);
  }
}
