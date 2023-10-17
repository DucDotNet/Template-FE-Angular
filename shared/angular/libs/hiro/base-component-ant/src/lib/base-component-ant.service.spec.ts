import { TestBed } from '@angular/core/testing';

import { BaseComponentAntService } from './base-component-ant.service';

describe('BaseComponentAntService', () => {
  let service: BaseComponentAntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseComponentAntService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
