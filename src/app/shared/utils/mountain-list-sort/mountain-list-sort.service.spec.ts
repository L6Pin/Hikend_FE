import { TestBed } from '@angular/core/testing';

import { MountainListSortService } from './mountain-list-sort.service';

describe('MountainListSortService', () => {
  let service: MountainListSortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MountainListSortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
