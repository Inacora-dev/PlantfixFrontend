import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedToCartIconComponent } from './added-to-cart-icon.component';

describe('AddedToCartIconComponent', () => {
  let component: AddedToCartIconComponent;
  let fixture: ComponentFixture<AddedToCartIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddedToCartIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddedToCartIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
