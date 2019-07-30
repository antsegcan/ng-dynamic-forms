import { TestBed } from '@angular/core/testing';

import { DynamicFormFactoryService } from './dynamic-form-factory.service';

describe('DynamicFormFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicFormFactoryService = TestBed.get(DynamicFormFactoryService);
    expect(service).toBeTruthy();
  });
});
