import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  songLiked: boolean = false;
  currentSong:any={};
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.currentSong = this.api.songInfo;
  }


}
