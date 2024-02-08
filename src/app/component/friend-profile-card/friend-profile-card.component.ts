import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-friend-profile-card',
  templateUrl: './friend-profile-card.component.html',
  styleUrls: ['./friend-profile-card.component.css']
})
export class FriendProfileCardComponent implements OnInit {
  @Input() friend: any;
  constructor() { }

  ngOnInit(): void {

  }

}
