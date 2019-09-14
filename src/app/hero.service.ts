import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/operators';

import { environment } from '../environments/environment';
import { Hero } from './entities/hero';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Character } from './entities/character';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  /**
   * Initializes the request options with its query params.
   * @param httpClient Angular's http client.
   */
  constructor(private httpClient: HttpClient) {}

  /**
   * @desc GET all heroes.
   *
   * @returns An observable of all heroes.
   */
  getAllHeroes(): Observable<Character[]> {
    return this.httpClient
      .get<Character[]>('https://rickandmortyapi.com/api/character')
      .pipe(map((data: any) => data.results));
  }

  /**
   * @desc GET all heroes.
   *
   * @returns An observable of all heroes.
   */
  getAllStats(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${environment.api}hero/stats`);
  }

  /**
   * @desc GET all heroes.
   *
   * @param id A hero's id.
   * @returns An observable of a hero.
   */
  getHero(id: number): Observable<Hero> {
    return this.httpClient.get<Hero>(`${environment.api}hero/${id}`);
  }

  /**
   * @desc POST Inserts a new hero.
   *
   * @param hero A new hero.
   * @returns An observable of a hero.
   */
  createHero(hero: Hero): Promise<Hero> {
    return this.httpClient.post<Hero>(`${environment.api}hero`, hero).toPromise();
  }

  /**
   * @desc PUT Updates a hero.
   *
   * @param hero A modified hero.
   * @returns An observable of a hero.
   */
  editHero(hero: Hero): Promise<Hero> {
    return this.httpClient.put<Hero>(`${environment.api}hero/${hero.id}`, hero).toPromise();
  }

  /**
   * @desc GET all heroes.
   *
   * @param id A hero's id.
   * @returns An observable of a hero.
   */
  async deleteHero(id: number): Promise<{}> {
    return this.httpClient.delete(`${environment.api}hero/${id}`).toPromise();
  }
}
