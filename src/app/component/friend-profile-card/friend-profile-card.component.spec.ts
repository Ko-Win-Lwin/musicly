import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendProfileCardComponent } from './friend-profile-card.component';

describe('FriendProfileCardComponent', () => {
  let component: FriendProfileCardComponent;
  let fixture: ComponentFixture<FriendProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendProfileCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
