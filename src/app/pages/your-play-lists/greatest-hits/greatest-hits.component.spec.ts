import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatestHitsComponent } from './greatest-hits.component';

describe('GreatestHitsComponent', () => {
  let component: GreatestHitsComponent;
  let fixture: ComponentFixture<GreatestHitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreatestHitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreatestHitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
