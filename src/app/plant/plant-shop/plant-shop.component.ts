import { Component } from '@angular/core';
import { PlantService } from '../services/plant.service';
import { CartService } from '../../cart/services/cart.service';
import { AddToCartButtonComponent } from '../../shared/buttons/add-to-cart-button/add-to-cart-button.component';
import { AddedToCartButtonComponent } from '../../shared/buttons/added-to-cart-button/added-to-cart-button.component';
import { OutOfStockButtonComponent } from '../../shared/buttons/out-of-stock-button/out-of-stock-button.component';
import { ShopFilterComponent } from './components/shop-filter/shop-filter.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plant-shop',
  imports: [AddToCartButtonComponent, AddedToCartButtonComponent, OutOfStockButtonComponent, ShopFilterComponent],
  templateUrl: './plant-shop.component.html',
  styleUrls: []
})

export class PlantShopComponent {
  plants: any[] = [];
  addedPlants = new Set<number>();
  currentPage: number = 1;
  itemsPerPage: number = 8;
  totalItems: number = 0;
  totalPages: number = 0;
  showSuccessMessage = false;
  sortBy: string = '';
  selectedFamily: string = '';

  constructor(private plantService: PlantService, private cartService: CartService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.plantService.getPlants().subscribe(data => {
      this.loadPlants();
    });
    this.route.queryParams.subscribe(params => {
      if (params['success'] === 'true') {
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 5000);
      }
    });
  }

  addToCart(plant: any) {
    const added = this.cartService.addToCart(plant);
    if (added) {
      this.addedPlants.add(plant.id);
      setTimeout(() => {
        this.addedPlants.delete(plant.id);
      }, 1000);
    }
  }

  isAdded(plant: any): boolean {
    return this.addedPlants.has(plant.id);
  }

    onSortChange(sort: string) {
    this.sortBy = sort;
    this.currentPage = 1;
    this.loadPlants();
  }

onFamilyChange(family: string) {
  this.selectedFamily = family;
  this.currentPage = 1;
  this.loadPlants();
}

loadPlants(): void {
  const filters = {
    page: this.currentPage,
    perPage: this.itemsPerPage,
    sortBy: this.sortBy,
    family: this.selectedFamily
  };

  console.log('Loading plants with filters:', filters);

  this.plantService
    .getPlantsFiltered(filters)
    .subscribe(response => {
      console.log('Response from filtered plants:', response);
      this.plants = response.data;
      this.totalItems = response.total;
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    });
}

  onPageChange(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.loadPlants();
  }
}
