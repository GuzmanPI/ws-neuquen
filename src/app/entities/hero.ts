import { HeroDetail } from './hero-detail';
import { HeroStats } from './hero-stats';

export interface Hero {
  id?: number;
  name?: string;
  isProtected?: boolean;
  imageUrl?: string;
  company?: boolean;
  detail: HeroDetail;
  stats: HeroStats;
}
