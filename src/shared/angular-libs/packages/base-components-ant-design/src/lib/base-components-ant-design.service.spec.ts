import { TestBed } from '@angular/core/testing';

import { BaseComponentsAntDesignService } from './base-components-ant-design.service';

describe('BaseComponentsAntDesignService', () => {
  let service: BaseComponentsAntDesignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseComponentsAntDesignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
