import { TestBed } from '@angular/core/testing';

import { AspirelibService } from './aspirelib.service';

describe('AspirelibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AspirelibService = TestBed.get(AspirelibService);
    expect(service).toBeTruthy();
  });
});
