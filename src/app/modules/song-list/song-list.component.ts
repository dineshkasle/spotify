import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  songList: any = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getSongs();
  }

  getSongs() {
    
    this.api.getRepos().subscribe((res)=>{
      this.songList = res;
    })
  }
 

}
