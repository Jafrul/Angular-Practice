import { TestBed } from '@angular/core/testing';

import { AaaService } from './aaa.service';

describe('AaaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AaaService = TestBed.get(AaaService);
    expect(service).toBeTruthy();
  });
});
