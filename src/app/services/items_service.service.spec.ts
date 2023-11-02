/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Items_serviceService } from './items_service.service';

describe('Service: Items_service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Items_serviceService]
    });
  });

  it('should ...', inject([Items_serviceService], (service: Items_serviceService) => {
    expect(service).toBeTruthy();
  }));
});
