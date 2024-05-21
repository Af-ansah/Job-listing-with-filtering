import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { jobs } from './utilities/constants';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
  
});
