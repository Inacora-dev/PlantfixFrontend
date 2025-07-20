import { Component } from '@angular/core';
import { HttpTokenService } from '../auth/services/http-token.service';
import { OrderService } from '../order/services/order.service';
import { ShopNowButtonComponent } from '../shared/buttons/shop-now-button/shop-now-button.component';
import { CancelOrderButtonComponent } from '../shared/buttons/cancel-order-button/cancel-order-button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-orders',
  imports: [RouterModule, ShopNowButtonComponent, CancelOrderButtonComponent],
  templateUrl: './own-orders.component.html',
  styleUrls: []
})

export class OwnOrdersComponent {
  user: any | null = null;
  userId: string | null = null;
  orders: any[] = [];
  isLoading = true;
  errorMessage: string | null = null;

  constructor(
    private tokenSvc: HttpTokenService,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.tokenSvc.getUser().subscribe({
      next: (user) => {
        this.user = user;
        this.userId = user?.id ?? null;
        if (this.userId) {
          this.loadUserOrders();
        } else {
          this.isLoading = false;
          this.errorMessage = 'Could not get user ID.';
        }
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = 'Could not load user information.';
      }
    });
  }

  loadUserOrders() {
    if (!this.userId) return;

    this.orderService.getUserOrders(this.userId).subscribe({
      next: (response) => {
        this.orders = response.data ?? response;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = 'Could not load orders.';
        console.error(err);
      }
    });
  }

  deleteOrder(orderId: number) {
    if (!orderId) return;

    this.orderService.deleteOrder(orderId.toString()).subscribe({
      next: () => {
        this.orders = this.orders.filter(order => order.id !== +orderId);
        alert('Order deleted successfully.');
      },
      error: (err) => {
        console.error('Error deleting order:', err);
        alert(err?.error?.error || 'Could not delete the order. Please try again later.');
      }
    });
  }

  confirmDelete(orderId: number) {
    const confirmed = confirm('Are you sure you want to cancel this order?');
    if (confirmed) {
      this.deleteOrder(orderId);
    }
  }
}
