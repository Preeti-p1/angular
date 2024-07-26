import { TestBed } from '@angular/core/testing';

import { DesigndproService } from './designdpro.service';

describe('DesigndproService', () => {
  let service: DesigndproService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesigndproService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
