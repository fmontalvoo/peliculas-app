import { Component, OnInit } from '@angular/core';

import { Movie } from 'src/app/interfaces/movie_interface';

import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public peliculas: Movie[];

  constructor(private moviesService: MoviesService) {
    this.peliculas = new Array<Movie>();
  }

  ngOnInit(): void {
    this.moviesService.getNowPlaying().subscribe(resp => this.peliculas = resp.results);
  }

}
