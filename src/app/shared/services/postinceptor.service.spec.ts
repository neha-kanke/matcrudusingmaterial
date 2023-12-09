import { TestBed } from '@angular/core/testing';

import { PostinceptorService } from './postinceptor.service';

describe('PostinceptorService', () => {
  let service: PostinceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostinceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
