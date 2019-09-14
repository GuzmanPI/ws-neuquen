import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareHeroesComponent } from './compare-heroes.component';

describe('CompareHeroesComponent', () => {
  let component: CompareHeroesComponent;
  let fixture: ComponentFixture<CompareHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompareHeroesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
