import { TestBed } from '@angular/core/testing';

import { TwiiterService } from './twiiter.service';

describe('TwiiterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwiiterService = TestBed.get(TwiiterService);
    expect(service).toBeTruthy();
  });
});
