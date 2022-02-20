import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  songInfo:object={};
  constructor(private http: HttpClient) { }

  getRepos(): Observable<any> {
    return this.http.get('https://dineshkasle.github.io/AllJsonData/songList.json');
  }
}
