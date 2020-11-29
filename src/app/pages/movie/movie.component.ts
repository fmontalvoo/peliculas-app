import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    // this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    const { id } = this.activatedRoute.snapshot.params;

    this.moviesService.getMovieDetails(Number(id))
      .subscribe(
        movie => console.log(movie)
      );
  }

}
