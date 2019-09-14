import { TestBed } from '@angular/core/testing';

import { HeroStatsResolveService } from './hero-stats.resolve.service';

describe('HeroStatsResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroStatsResolveService = TestBed.get(HeroStatsResolveService);
    expect(service).toBeTruthy();
  });
});
