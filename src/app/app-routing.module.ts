import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesDashboardComponent } from './heroes-dashboard/heroes-dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CompareHeroesComponent } from './compare-heroes/compare-heroes.component';
import { CreateHeroComponent } from './create-hero/create-hero.component';
import { EditHeroComponent } from './edit-hero/edit-hero.component';
import { HeroDetailResolveService } from './hero-detail.resolve.service';
import { HeroStatsResolveService } from './hero-stats.resolve.service';

const routes: Routes = [
  { path: '', redirectTo: '/heroes-dashboard', pathMatch: 'full' },
  { path: 'heroes-dashboard', component: HeroesDashboardComponent },
  {
    path: 'hero-detail/:id',
    component: HeroDetailComponent,
    resolve: {
      hero: HeroDetailResolveService
    }
  },
  {
    path: 'compare-heroes',
    component: CompareHeroesComponent,
    resolve: {
      hero: HeroStatsResolveService
    }
  },
  { path: 'create-a-new-hero', component: CreateHeroComponent },
  {
    path: 'edit-hero/:id',
    component: EditHeroComponent,
    resolve: {
      hero: HeroDetailResolveService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
