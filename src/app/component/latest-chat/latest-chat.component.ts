import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-chat',
  templateUrl: './latest-chat.component.html',
  styleUrls: ['./latest-chat.component.css']
})
export class LatestChatComponent implements OnInit {
  chats = [1,2,2,3,4,4,]
  constructor() { }

  ngOnInit(): void {
  }

}
