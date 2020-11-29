import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieDetails } from 'src/app/interfaces/movie.details.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public pelicula: MovieDetails;

  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService, private location: Location) { }

  ngOnInit(): void {
    // this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    const { id } = this.activatedRoute.snapshot.params;

    this.moviesService.getMovieDetails(Number(id))
      .subscribe(
        movie => this.pelicula = movie
      );
  }

  goBack() {
    this.location.back();
  }

}
