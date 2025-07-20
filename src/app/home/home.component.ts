import { Component, OnInit } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { AnimatedIconsComponent } from './components/animated-icons/animated-icons.component';
import { HeroTextComponent } from './components/hero-text/hero-text.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { HttpTokenService } from '../auth/services/http-token.service';
import { Router } from '@angular/router';
import { PlantTipsTextComponent } from './components/plant-tips-text/plant-tips-text.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, AnimatedIconsComponent, HeroTextComponent, ProductItemComponent, PlantTipsTextComponent],
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {
  errMessage: string | null = null;
  user: any | null = null;

  constructor(
    private svc: HttpTokenService,
    private router: Router
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
}
