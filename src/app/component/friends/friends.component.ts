import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends: any = [];
  constructor(private _user: UserService) { }

  ngOnInit(): void {
    this._user.getUser().subscribe((user) => {
      this.friends = user['results']
    })
  }

}
