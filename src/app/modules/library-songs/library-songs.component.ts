import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library-songs',
  templateUrl: './library-songs.component.html',
  styleUrls: ['./library-songs.component.css']
})
export class LibrarySongsComponent implements OnInit {

  librarySongs: any = [];
  constructor() { }

  ngOnInit(): void {
    this.getLibrarrySongs();
  }

  getLibrarrySongs() {
    this.librarySongs = [{ path: 'https://gaanokelyrics.com/wp-content/uploads/2021/08/9uouBARCWek-HD.jpg', title: 'Liked Songs' }, { path: 'https://gaanokelyrics.com/wp-content/uploads/2021/08/9uouBARCWek-HD.jpg', title: 'Punjabi' }, { path: 'https://i.ytimg.com/vi/Ni_R3EczSgc/hqdefault.jpg', title: 'Marathi' }, { path: 'https://i.ytimg.com/vi/8IpKpszVwmY/maxresdefault.jpg', title: 'English' }];
  }

}
