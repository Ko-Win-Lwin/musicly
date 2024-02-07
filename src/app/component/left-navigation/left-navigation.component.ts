import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.css']
})
export class LeftNavigationComponent implements OnInit {

  isShowPages: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  showPages = () => {
    this.isShowPages = !this.isShowPages
  }

}
