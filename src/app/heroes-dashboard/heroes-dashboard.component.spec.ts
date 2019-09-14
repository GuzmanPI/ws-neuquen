import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDevsComponent } from './heroes-dashboard.component';

describe('HeroDevsComponent', () => {
  let component: HeroDevsComponent;
  let fixture: ComponentFixture<HeroDevsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeroDevsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDevsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
