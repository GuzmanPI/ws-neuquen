import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { HeroService } from '../hero.service';

export interface DialogData {
  name: string;
  id: number;
}

@Component({
  selector: 'app-delete-hero-dialog',
  templateUrl: './delete-hero-dialog.component.html',
  styleUrls: ['./delete-hero-dialog.component.scss']
})
export class DeleteHeroDialogComponent {
  constructor(
    public matDialogRef: MatDialogRef<DeleteHeroDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private snackBar: MatSnackBar,
    private heroService: HeroService
  ) {}

  /** @desc Deletes a hero from the DB and closes the dialog. */
  deleteHero() {
    this.heroService.deleteHero(this.data.id);
    this.openSnackBar();
  }

  /** @desc Opens Angular Material snackbar to notify the a hero was successfully deleted. */
  private openSnackBar(): void {
    const config = new MatSnackBarConfig();
    config.duration = 500;
    config.panelClass = 'center';

    this.snackBar.open(`Successfully deleted ${this.data.name}`, null, config);

    this.closeDialog();
  }

  /** @desc Closes the Angular Material Dialog. */
  private closeDialog(): void {
    this.matDialogRef.close();
  }
}
