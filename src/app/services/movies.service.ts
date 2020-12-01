import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { NowPlayingInterface } from '../interfaces/now.playing.interface';
import { Movie } from '../interfaces/movie.interface';

import { environment } from 'src/environments/environment.dev';
import { MovieDetails } from '../interfaces/movie.details.interface';
import { Cast, MovieCast } from '../interfaces/movie.cast.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  static URL: string = "https://api.themoviedb.org/3";

  private page: number = 1;

  public loading: boolean = false;

  constructor(private http: HttpClient) { }

  get getParams() {
    return {
      language: 'es-ES',
      page: this.page.toString(),
      api_key: environment.api_key
    };
  }

  getNowPlaying(): Observable<Array<Movie>> {

    if (this.loading) return of([]);

    this.loading = true;
    return this.http.get<NowPlayingInterface>(`${MoviesService.URL}/movie/now_playing`, { params: this.getParams })
      .pipe(
        map(resp => resp.results),
        tap(() => {
          this.page++;
          this.loading = false;
        })
      );
  }

  searchMovies(query: string): Observable<Array<Movie>> {
    const params = { ...this.getParams, query: query };
    if (this.loading) return of([]);

    this.loading = true;
    return this.http.get<NowPlayingInterface>(`${MoviesService.URL}/search/movie`, { params })
      .pipe(
        map(resp => resp.results),
        tap(() => {
          this.page++;
          this.loading = false;
        })
      );
  }

  getMovieDetails(id: number) {
    const params = { ...this.getParams };
    delete params['page'];

    return this.http.get<MovieDetails>(`${MoviesService.URL}/movie/${id}`, { params })
      .pipe(
        catchError(err => of(null))
      );
  }

  getMovieCasting(id: number): Observable<Array<Cast>> {
    const params = { ...this.getParams };
    delete params['page'];

    return this.http.get<MovieCast>(`${MoviesService.URL}/movie/${id}/credits`, { params })
      .pipe(
        map(resp => resp.cast),
        catchError(err => of([]))
      );
  }

  setPage(page: number): void {
    this.page = page;
  }

  get getPage(): number {
    return this.page;
  }

}
