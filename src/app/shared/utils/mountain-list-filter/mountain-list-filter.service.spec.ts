import { TestBed } from '@angular/core/testing';

import { MountainListFilterService } from './mountain-list-filter.service';

describe('MountainListFilterService', () => {
  let service: MountainListFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MountainListFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
