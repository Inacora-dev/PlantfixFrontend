import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CartService } from '../../../cart/services/cart.service';
import { HttpTokenService } from '../../../auth/services/http-token.service';
import { CartIconComponent } from '../../icons/cart-icon/cart-icon.component';

@Component({
  selector: 'app-cart-button',
  imports: [CommonModule, RouterModule, CartIconComponent],
  templateUrl: './cart-button.component.html',
  styleUrls: []
})
export class CartButtonComponent {
  cartItemCount = 0;
  user: any | null = null;

  constructor(private cartService: CartService, private tokenSvc: HttpTokenService, private router: Router) {
    this.tokenSvc.getUser().subscribe(response => {
      this.user = response
    })
  }

  ngOnInit() {
    this.cartService.cartCount$.subscribe(count => {
      this.cartItemCount = count;
    });
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}
