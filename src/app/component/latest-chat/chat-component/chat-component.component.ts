import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-component',
  templateUrl: './chat-component.component.html',
  styleUrls: ['./chat-component.component.css']
})
export class ChatComponentComponent implements OnInit {

  @Input() chat: any;
  constructor() { }

  ngOnInit(): void {
  }

}
