import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

import { Movie } from 'src/app/interfaces/movie_interface';

import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public peliculas: Movie[];
  public peliculasSwiper: Movie[];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const top = (document.documentElement.scrollTop || document.body.scrollTop);
    const bottom = (document.documentElement.scrollHeight || document.body.scrollHeight);

    var limit = 1000 + top;

    if (this.moviesService.loading) return;

    if (limit > bottom)
      this.moviesService.getNowPlaying().subscribe(
        movies => {
          this.peliculas.push(...movies);
        }
      );
  }

  constructor(private moviesService: MoviesService) {
    this.peliculas = new Array<Movie>();
    this.peliculasSwiper = new Array<Movie>();
  }

  ngOnInit(): void {
    this.moviesService.setPage(1);
    this.moviesService.getNowPlaying()
      .subscribe(
        movies => {
          this.peliculas = this.peliculasSwiper = movies;
        }
      );
  }

  ngOnDestroy(): void {
    this.moviesService.setPage(1);
  }

}
