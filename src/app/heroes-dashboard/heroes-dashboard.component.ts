import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DeleteHeroDialogComponent } from '../delete-hero-dialog/delete-hero-dialog.component';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
import { Hero } from '../entities/hero';
import { Character } from '../entities/character';

@Component({
  selector: 'app-heroes-dashboard',
  templateUrl: './heroes-dashboard.component.html',
  styleUrls: ['./heroes-dashboard.component.scss']
})
export class HeroesDashboardComponent implements OnInit {
  /** @desc Flag for showing/hiding the image menu */
  showMenu = false;
  /** @desc The image id of the current hovered image */
  currentImage: number = null;
  /** @desc A list of heroes */
  heroes$: Observable<Character[]>;

  constructor(private heroesService: HeroService, private dialog: MatDialog, private router: Router) {}

  /** @desc Gets all the heroes from the DB. */
  ngOnInit() {
    this.heroes$ = this.heroesService.getAllHeroes();
  }

  /**
   * @desc Navigates to the hero detail url.
   *
   * @param id A hero's ID.
   */
  navigateToDetail(id: number): void {
    if (id) {
      this.router.navigateByUrl(`/hero-detail/${id.toString()}`);
    }
  }

  /**
   * @desc Navigates to the edit hero url.
   *
   * @param id A hero's ID.
   */
  navigateToEditHero(id?: string): void {
    if (id) {
      this.router.navigateByUrl(`/edit-hero/${id}`);
    }
  }

  /**
   * @desc Shows the image menu.
   *
   * @param index Hovered image's index.
   */
  showImageMenu(index: number): void {
    this.currentImage = index;
    this.showMenu = true;
  }

  /** @desc Hides the image menu. */
  hideImageMenu(): void {
    this.currentImage = null;
    this.showMenu = false;
  }

  /**
   * @desc Opens a dialog to confirm if the user wants to delete a hero.
   *
   * @param hero The selected hero that would be deleted.
   */
  openDeleteDialog(hero: Character): void {
    this.dialog
      .open(DeleteHeroDialogComponent, {
        data: { name: hero.name, id: hero.id }
      })
      .afterClosed()
      .subscribe(() => {
        this.heroes$ = this.heroesService.getAllHeroes();
      });
  }
}
