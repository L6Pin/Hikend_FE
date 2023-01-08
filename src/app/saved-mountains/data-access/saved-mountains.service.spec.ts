import { TestBed } from '@angular/core/testing';

import { SavedMountainsService } from './saved-mountains.service';

describe('SavedMountainsService', () => {
  let service: SavedMountainsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedMountainsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
