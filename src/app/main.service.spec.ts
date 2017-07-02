import { TestBed, inject } from '@angular/core/testing';

import { MainService } from './main.service';

describe('MainService Unit Test', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainService]
    });
  });

  it('Service creation', inject([MainService], (service: MainService) => {
    expect(service).toBeTruthy();
  }));
});
