import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {MusicService} from "../../services/music.service";

@Component({
  selector: 'app-following-artists',
  templateUrl: './following-artists.component.html',
  styleUrls: ['./following-artists.component.css']
})
export class FollowingArtistsComponent implements OnInit {

  artists: any

  constructor(private _artist: MusicService) { }

  ngOnInit(): void {
    this._artist.getAlbum().subscribe((user) => {

      this.artists = user['results']
    })
  }

}
