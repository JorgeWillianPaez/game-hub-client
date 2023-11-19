import { TestBed } from '@angular/core/testing';

import { DesenvolvedoraService } from './desenvolvedora.service';

describe('DesenvolvedoraService', () => {
  let service: DesenvolvedoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesenvolvedoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
