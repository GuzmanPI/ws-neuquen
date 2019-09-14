import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../entities/hero';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-compare-heroes',
  templateUrl: './compare-heroes.component.html',
  styleUrls: ['./compare-heroes.component.scss']
})
export class CompareHeroesComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject();

  /** @desc Used to reload the chart. */
  @ViewChild('BaseChartDirective', { read: ElementRef, static: true }) chart: ElementRef;

  /** @desc Flag vor validating if the user has selected at least two heroes. */
  isValidSelection = false;

  /** @desc The Angular Material select's form control. */
  heroes = new FormControl();

  /** @desc A list of heroes with their stats. */
  heroesList: Hero[];

  /** @desc The chart's data. */
  statsChartData: any[] = [];

  /** @desc The chart's labels. */
  statsChartLabels = ['Intelligence', 'Strength', 'Speed', 'Durability', 'Combat', 'Coding'];

  /** @desc The chart's type. */
  statsChartType = 'radar';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.getHeroesFromRouter();
  }

  /** @desc Gets the heroes with stats from the activated route. */
  private getHeroesFromRouter(): void {
    this.activatedRoute.data.pipe(takeUntil(this.unsubscribe)).subscribe(data => {
      this.heroesList = data.hero as Hero[];
    });
  }

  /**
   * @desc The Angular Material Select change event.
   *
   * @param e The selected heroes' IDs.
   */
  modelChanged(e: string[]): void {
    this.validateHeroesSelection(e.length);
    const heroes = this.getHeroes(e);
    this.setStatsChartData(heroes);
  }

  /**
   * @desc Validates that the user has selected at least two heroes to be compared.
   * @param e The length of the selected heroes' IDs.
   */
  private validateHeroesSelection(e: number): void {
    this.isValidSelection = e === 1;
  }

  /**
   * @desc Finds heroes objects by the selected IDs.
   *
   * @param selectedIds The elected heroes' IDs by the user.
   * @returns The selected heroes.
   */
  getHeroes(selectedIds: string[]): Hero[] {
    const selectedHeroes: Hero[] = [];

    for (const id of selectedIds) {
      const heroObj = this.heroesList.find((hero: Hero) => {
        return hero.id === Number(id);
      });

      selectedHeroes.push(heroObj);
    }

    return selectedHeroes;
  }

  /**
   * @desc Sets the chart's data.
   *
   * @param heroes The selected heroes by the user to be compared.
   */
  private setStatsChartData(heroes: Hero[]): void {
    this.statsChartData = heroes.map(hero => {
      return {
        data: [
          hero.stats.intelligence,
          hero.stats.strength,
          hero.stats.speed,
          hero.stats.durability,
          hero.stats.combat,
          hero.stats.coding
        ],
        label: hero.name
      };
    });

    this.forceChartRefresh();
  }

  /** @desc Trick to force the chart's refresh. */
  private forceChartRefresh(): void {
    setTimeout(() => {
      if (this.chart) {
        // this.chart.refresh();
      }
    }, 10);
  }

  /** @desc Unsubscribe from heroes' observables. */
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
