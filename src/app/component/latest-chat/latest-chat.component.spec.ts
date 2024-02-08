import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestChatComponent } from './latest-chat.component';

describe('LatestChatComponent', () => {
  let component: LatestChatComponent;
  let fixture: ComponentFixture<LatestChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
