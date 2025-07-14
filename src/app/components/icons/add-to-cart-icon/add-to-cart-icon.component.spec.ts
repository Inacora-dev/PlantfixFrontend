import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartIconComponent } from './add-to-cart-icon.component';

describe('AddToCartIconComponent', () => {
  let component: AddToCartIconComponent;
  let fixture: ComponentFixture<AddToCartIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddToCartIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToCartIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
