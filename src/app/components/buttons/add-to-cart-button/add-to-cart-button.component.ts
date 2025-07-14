import { Component } from '@angular/core';
import { AddToCartIconComponent } from '../../icons/add-to-cart-icon/add-to-cart-icon.component';

@Component({
  selector: 'app-add-to-cart-button',
  standalone:true,
  imports: [AddToCartIconComponent],
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: []
})
export class AddToCartButtonComponent {

}
