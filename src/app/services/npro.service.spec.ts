import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NProService } from './npro.service';

describe('NProService', () => {
  let service: NProService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(NProService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
