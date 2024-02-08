import { Component, OnInit } from '@angular/core';
import {MusicService} from "../../services/music.service";

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})
export class FavouriteListComponent implements OnInit {

  cards = [1,3,4,5,5,5]
  albums = []
  constructor(private _data: MusicService) { }

  ngOnInit(): void {
    this._data.getAlbum().subscribe((data) => {
      this.albums = data['results']

    })
  }

}
