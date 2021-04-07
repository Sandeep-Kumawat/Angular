import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncComComponent } from './async-com.component';

describe('AsyncComComponent', () => {
  let component: AsyncComComponent;
  let fixture: ComponentFixture<AsyncComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
