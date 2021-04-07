import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorComComponent } from './behavior-com.component';

describe('BehaviorComComponent', () => {
  let component: BehaviorComComponent;
  let fixture: ComponentFixture<BehaviorComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaviorComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
