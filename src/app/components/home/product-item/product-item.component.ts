import { Component } from '@angular/core';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrls: []
})
export class ProductItemComponent {
  plants = [
    { imageSrc: '/plant1.png', altText: 'Plant 1' },
    { imageSrc: '/plant2.png', altText: 'Plant 2' },
  ];
}
