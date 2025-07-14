import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearCartButtonComponent } from './clear-cart-button.component';

describe('ClearCartButtonComponent', () => {
  let component: ClearCartButtonComponent;
  let fixture: ComponentFixture<ClearCartButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClearCartButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClearCartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
