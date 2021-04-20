import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAProductComponent } from './search-aproduct.component';

describe('SearchAProductComponent', () => {
  let component: SearchAProductComponent;
  let fixture: ComponentFixture<SearchAProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
