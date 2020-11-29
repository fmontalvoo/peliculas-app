import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cast } from 'src/app/interfaces/movie.cast.interface';

import { MovieDetails } from 'src/app/interfaces/movie.details.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public pelicula: MovieDetails;
  public casting: Array<Cast>;

  constructor(private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private location: Location,
    private router: Router) {
    this.casting = new Array<Cast>();
  }

  ngOnInit(): void {
    // this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    const { id } = this.activatedRoute.snapshot.params;

    this.moviesService.getMovieDetails(Number(id))
      .subscribe(
        movie => {
          if (!movie) {
            this.router.navigateByUrl('/');
            return;
          }
          this.pelicula = movie;
        }
      );

    this.moviesService.getMovieCasting(Number(id))
      .subscribe(
        cast => {
          this.casting = cast;
        }
      );
  }

  goBack() {
    this.location.back();
  }

}
