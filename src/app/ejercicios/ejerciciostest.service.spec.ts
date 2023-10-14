import { TestBed } from '@angular/core/testing';

import { EjerciciostestService } from './ejerciciostest.service';

describe('EjerciciostestService', () => {
  let service: EjerciciostestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EjerciciostestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
