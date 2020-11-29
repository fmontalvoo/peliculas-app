import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie } from 'src/app/interfaces/movie.interface';

import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public query: string;

  public peliculas: Array<Movie>;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const top = (document.documentElement.scrollTop || document.body.scrollTop);
    const bottom = (document.documentElement.scrollHeight || document.body.scrollHeight);

    var limit = 1000 + top;

    if (this.moviesService.loading) return;

    if (limit > bottom)
      this.moviesService.searchMovies(this.query).subscribe(
        movies => {
          this.peliculas.push(...movies);
        }
      );
  }

  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) {
    this.peliculas = new Array<Movie>();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.query = params.query;
      this.moviesService.searchMovies(this.query).subscribe(movies => this.peliculas = movies);
    });
  }

}
