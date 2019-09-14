import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { HeroService } from './hero.service';
import { Hero } from './entities/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroDetailResolveService implements Resolve<Hero | boolean> {
  constructor(private heroesService: HeroService, private router: Router) {}

  /**
   * @desc Gets a hero's detail from the DB in order for the router to navigate to a route using this resolver.
   * It navigates to the hero dashboard if there are no hero's detail.
   *
   * @param route Angular Activated Route Snapshot.
   * @returns Either an observable with the hero's detail from the DB or a false otherwise.
   */
  resolve(route: ActivatedRouteSnapshot): Observable<Hero> | boolean {
    const id = route.params['id'];

    return this.heroesService.getHero(id).pipe(
      tap(hero => {
        if (hero) {
          return hero;
        } else {
          this.router.navigate(['/hero-dashboard']);
          return false;
        }
      })
    );
  }
}
