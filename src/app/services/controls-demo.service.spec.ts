import { TestBed } from '@angular/core/testing';

import { ControlsDemoService } from './controls-demo.service';

describe('ControlsDemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControlsDemoService = TestBed.get(ControlsDemoService);
    expect(service).toBeTruthy();
  });
});
