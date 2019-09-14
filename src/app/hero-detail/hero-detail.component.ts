import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hero } from '../entities/hero';
import { HeroStats } from '../entities/hero-stats';
import { Character } from '../entities/character';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  /** @desc Hero's stats for the chart component. */
  chartData: number[] = [];

  hero$: Observable<Character>;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.getHeroFromRouter();
  }

  /** @desc Gets the hero's detail from the activated route. */
  private getHeroFromRouter(): void {
    this.hero$ = this.activatedRoute.data.pipe(
      map((data: Data) => {
        if (data.hero) {
          this.setChartData(data.hero.stats);
        }
        return data.hero;
      })
    );
  }

  /**
   * @desc Removes the id from the stats object and sets the chart's data.
   *
   * @param heroStats The hero's stats.
   */
  private setChartData(heroStats: HeroStats): void {
    delete heroStats.id;
    this.chartData = Object.values(heroStats);
  }
}
