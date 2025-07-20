import { Component } from '@angular/core';
import { CartService } from '../cart/services/cart.service';
import { OrderService } from '../order/services/order.service';
import { HttpTokenService } from '../auth/services/http-token.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ShopNowButtonComponent } from '../shared/buttons/shop-now-button/shop-now-button.component';
import { PlaceOrderButtonComponent } from '../place-order-button/place-order-button.component';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule, ShopNowButtonComponent, RouterModule, PlaceOrderButtonComponent],
  templateUrl: './checkout.component.html',
  styleUrls: []
})
export class CheckoutComponent {
  cartItems: any[] = [];
  user: any | null = null;
  backendErrors: { [key: string]: string[] } = {};

  orderForm = new FormGroup({
    user_id: new FormControl(''),
    order_date: new FormControl(''),
    status: new FormControl(''),
    total_price: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    country: new FormControl(''),
    phone_number: new FormControl(''),
  });

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private tokenSvc: HttpTokenService,
    private router: Router
  ) {
    this.tokenSvc.getUser().subscribe(response => {
      this.user = response
    })
  }

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
  }

  placeOrder() {
    const order = {
      user_id: this.user.id,
      order_date: new Date().toISOString(),
      status: 'pending',
      total_price: this.getTotal(),
      address: this.orderForm.get('address')?.value,
      city: this.orderForm.get('city')?.value,
      country: this.orderForm.get('country')?.value,
      phone_number: this.orderForm.get('phone_number')?.value,
      plants: this.cartItems.map(item => ({
        id: item.id,
        quantity: item.quantity,
        price: item.price
      }))
    };

    this.orderService.placeOrder(order).subscribe({
      next: (response) => {
        console.log('Order placed successfully', response);
        this.cartService.clearCart();
        this.backendErrors = {};
        this.router.navigate(['/plants/shop'], {
          queryParams: { success: 'true' }
        });
      },
      error: (errorResponse) => {
        if (errorResponse.status === 422) {
          this.backendErrors = errorResponse.error.errors;
        } else {
          console.error('Unexpected error:', errorResponse);
        }
      }
    });
  }

  getTotal() {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}
