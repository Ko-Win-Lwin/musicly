import { Component, OnInit } from '@angular/core';
import {MusicService} from "../../services/music.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data = []

  constructor(private _data: MusicService) { }

  ngOnInit(): void {
    this._data.getAlbum().subscribe((data) => {
      this.data = data['results']
      console.log(this.data)
    })
  }

}
