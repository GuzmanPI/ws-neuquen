import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { HeroService } from './hero.service';
import { Hero } from './entities/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroStatsResolveService implements Resolve<Hero[] | boolean> {
  constructor(private heroesService: HeroService, private router: Router) {}

  /**
   * @desc Gets all heroes' stats from the DB in order for the router to navigate to a route using this resolver.
   * It navigates to the hero dashboard if there are no heroes' stats.
   *
   * @param route Angular Activated Route Snapshot.
   * @returns Either an observable with the heroes' stats from the DB or a false otherwise.
   */
  resolve(route: ActivatedRouteSnapshot): Observable<Hero[]> | boolean {
    return this.heroesService.getAllStats().pipe(
      tap(stats => {
        if (stats) {
          return stats;
        } else {
          this.router.navigate(['/hero-dashboard']);
          return false;
        }
      })
    );
  }
}
