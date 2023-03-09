import { TestBed } from '@angular/core/testing';

import { AufgabenfelderService } from './aufgabenfelder.service';

describe('AufgabenfelderService', () => {
  let service: AufgabenfelderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AufgabenfelderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
