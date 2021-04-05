import { TestBed } from '@angular/core/testing';

import { UpdatelogService } from './updatelog.service';

describe('UpdatelogService', () => {
  let service: UpdatelogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatelogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
