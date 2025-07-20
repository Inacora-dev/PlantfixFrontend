import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFilterButtonComponent } from './shop-filter-button.component';

describe('ShopFilterButtonComponent', () => {
  let component: ShopFilterButtonComponent;
  let fixture: ComponentFixture<ShopFilterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopFilterButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopFilterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
