import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-following-artists',
  templateUrl: './following-artists.component.html',
  styleUrls: ['./following-artists.component.css']
})
export class FollowingArtistsComponent implements OnInit {

  artists = [1,2,3,4,4,1,1,1,1,1,1,1,1,1,11,1,]

  constructor() { }

  ngOnInit(): void {
  }

}
