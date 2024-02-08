import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-latest-chat',
  templateUrl: './latest-chat.component.html',
  styleUrls: ['./latest-chat.component.css']
})
export class LatestChatComponent implements OnInit {
  chats : any =[]
  constructor(private _user: UserService) { }

  ngOnInit(): void {
    this._user.getUser().subscribe((user) => {
      this.chats = user['results']
      console.log(this.chats[0])
    })
  }

}
