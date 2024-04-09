import { TestBed } from '@angular/core/testing';

import { MyTableLibraryService } from './my-table-library.service';

describe('MyTableLibraryService', () => {
  let service: MyTableLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyTableLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
