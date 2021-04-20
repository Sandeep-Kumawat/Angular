import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteACategoryComponent } from './delete-acategory.component';

describe('DeleteACategoryComponent', () => {
  let component: DeleteACategoryComponent;
  let fixture: ComponentFixture<DeleteACategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteACategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteACategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
