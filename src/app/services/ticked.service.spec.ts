import { TestBed } from '@angular/core/testing';

import { TickedService } from './ticked.service';

describe('TickedService', () => {
  let service: TickedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TickedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
