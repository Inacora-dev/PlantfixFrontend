import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFilterIconComponent } from './shop-filter-icon.component';

describe('ShopFilterIconComponent', () => {
  let component: ShopFilterIconComponent;
  let fixture: ComponentFixture<ShopFilterIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopFilterIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopFilterIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
