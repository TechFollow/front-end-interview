import { TestBed } from '@angular/core/testing';

import { AddressesService } from './addresses.service';

describe('AddressesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddressesService = TestBed.get(AddressesService);
    expect(service).toBeTruthy();
  });
});
