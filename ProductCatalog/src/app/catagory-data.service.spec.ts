import { TestBed } from '@angular/core/testing';

import { CatagoryDataService } from './catagory-data.service';

describe('CatagoryDataService', () => {
  let service: CatagoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatagoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
