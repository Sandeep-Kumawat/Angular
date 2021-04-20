import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfAllProductsComponent } from './list-of-all-products.component';

describe('ListOfAllProductsComponent', () => {
  let component: ListOfAllProductsComponent;
  let fixture: ComponentFixture<ListOfAllProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfAllProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfAllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
