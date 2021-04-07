import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplayComComponent } from './replay-com.component';

describe('ReplayComComponent', () => {
  let component: ReplayComComponent;
  let fixture: ComponentFixture<ReplayComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplayComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplayComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
