import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { NowPlayingInterface } from '../interfaces/now_playing_interface';

import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  static URL: string = "https://api.themoviedb.org/3/movie";

  constructor(private http: HttpClient) { }

  getNowPlaying(): Observable<NowPlayingInterface> {
    return this.http.get<NowPlayingInterface>(`${MoviesService.URL}/now_playing?api_key=${environment.api_key}&language=es-ES&page=1`);
  }

}
