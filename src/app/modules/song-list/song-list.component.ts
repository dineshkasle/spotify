import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  songList: any = [];
  constructor() { }

  ngOnInit(): void {
    this.getSongs();
  }

  getSongs() {
    this.songList = [
      {
        title: 'Recently played',
        songs: [
          {
            path: 'https://i.ytimg.com/vi/nfNc0XJdZWk/maxresdefault.jpg',
            name: 'Param Sundari',
            desc: 'Mimi'
          },
          {
            path: 'https://a10.gaanacdn.com/images/albums/70/18470/crop_480x480_18470.jpg',
            name: 'Dilko Tumse Pyar',
            desc: 'RHTDM'
          },
          {
            path: 'https://a10.gaanacdn.com/images/albums/91/3693391/crop_480x480_1608885637_3693391.jpg',
            name: 'Jingle Bell',
            desc: 'Yo Yo Honey Singh'
          },
          {
            path: 'https://i.ytimg.com/vi/wZl3j0I0fiA/maxresdefault.jpg',
            name: 'Top Hits',
            desc: '2020 hit songs'
          },
          {
            path: 'https://i.ytimg.com/vi/PMOHoYKWePM/maxresdefault.jpg',
            name: 'New in Dance',
            desc: 'Hindi dance masti'
          }
        ]
      },
      {
        title: 'Trending now',
        songs: [
          {
            path: 'https://sensongsmp3.tv/wp-content/uploads/2021/12/pushpa-songs-download-2021-Allu-Arjun-Rashmika-Mandanna-Samantha-Jagapati-Babu-Fahadh-Faasil-Sunil-Prakash-Raj.jpg',
            name: 'Saami Saami',
            desc: 'Pushpa : Part-1'
          },
          {
            path: 'https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/samantha_dance_number_oo_antava.jpg',
            name: 'O Antava',
            desc: 'Pushpa : Part-1'
          },
          {
            path: 'https://1.bp.blogspot.com/-rjO8hXWrWeQ/XkyfF3BAU0I/AAAAAAAADv0/B3M-o15e12kZV19bx_YX5zNK_rcQaa9MgCLcBGAsYHQ/s1600/laung.jpg',
            name: 'Laung Laachi',
            desc: 'Album Song'
          },
          {
            path: 'https://i.ytimg.com/vi/vzLhAOY0cRg/maxresdefault.jpg',
            name: 'Raataan Lambiyan',
            desc: 'Bollywood'
          },
          {
            path: 'https://i.ytimg.com/vi/00NVgIsRZoc/hqdefault.jpg',
            name: 'Lootera',
            desc: 'Punjabi Songs'
          }
        ]
      },
      {
        title: 'Recommended for today',
        songs: [
          {
            path: 'https://news.mehramedia.com/wp-content/uploads/2021/01/1610091329_hqdefault.jpg',
            name: 'Siddharth C',
            desc: 'Romantic Sons'
          },
          {
            path: 'https://i.pinimg.com/originals/0a/22/69/0a2269f56e4dc082bc29f14fd5acdff7.jpg',
            name: 'Arun Kapoor',
            desc: 'Romantic Sons'
          },
          {
            path: 'https://play-lh.googleusercontent.com/M73zOu1lIPvNMNd-EEcdFzBUVUNWyeAzSI2vlbCA_Xu1yhs773eZgjhNpWWSRzEPGw',
            name: '90s Bollywood Songs',
            desc: 'Romantic Sons'
          }
        ]
      }
    ]
  }
 

}
