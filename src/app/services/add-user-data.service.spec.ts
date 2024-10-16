import { TestBed } from '@angular/core/testing';

import { AddUserDataService } from './add-user-data.service';

describe('AddUserDataService', () => {
  let service: AddUserDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddUserDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
