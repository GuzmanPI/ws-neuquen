import { TestBed } from '@angular/core/testing';
import { HeroDetailResolveService } from './hero-detail.resolve.service';

describe('HeroDetailResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroDetailResolveService = TestBed.get(HeroDetailResolveService);
    expect(service).toBeTruthy();
  });
});
