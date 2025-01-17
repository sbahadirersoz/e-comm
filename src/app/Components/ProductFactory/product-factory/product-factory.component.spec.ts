import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFactoryComponent } from './product-factory.component';

describe('ProductFactoryComponent', () => {
  let component: ProductFactoryComponent;
  let fixture: ComponentFixture<ProductFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductFactoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
