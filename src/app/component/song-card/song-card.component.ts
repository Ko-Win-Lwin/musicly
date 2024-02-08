import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent implements OnInit {
  @Input() album: any;
  constructor() { }

  ngOnInit(): void {
  }

}
