import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchACategoryComponent } from './search-acategory.component';

describe('SearchACategoryComponent', () => {
  let component: SearchACategoryComponent;
  let fixture: ComponentFixture<SearchACategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchACategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchACategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
