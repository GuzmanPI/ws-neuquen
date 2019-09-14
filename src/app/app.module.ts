import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatSelectModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatInputModule,
  MatSliderModule,
  MatSnackBarModule,
  MatDialogModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';
import { HeroesDashboardComponent } from './heroes-dashboard/heroes-dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CompareHeroesComponent } from './compare-heroes/compare-heroes.component';
import { CreateHeroComponent } from './create-hero/create-hero.component';
import { DeleteHeroDialogComponent } from './delete-hero-dialog/delete-hero-dialog.component';
import { UrlToTitlePipe } from './url-to-title.pipe';
import { EditHeroComponent } from './edit-hero/edit-hero.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeroesDashboardComponent,
    HeroDetailComponent,
    CompareHeroesComponent,
    CreateHeroComponent,
    EditHeroComponent,
    UrlToTitlePipe,
    DeleteHeroDialogComponent,
    DoughnutChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatInputModule,
    MatSliderModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    ChartsModule
  ],
  providers: [],
  entryComponents: [DeleteHeroDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
