import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsOfDreamComponent } from './songs-of-dream.component';

describe('SongsOfDreamComponent', () => {
  let component: SongsOfDreamComponent;
  let fixture: ComponentFixture<SongsOfDreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongsOfDreamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongsOfDreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
