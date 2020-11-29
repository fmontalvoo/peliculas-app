import { Component, Input, OnInit } from '@angular/core';

import { Movie } from 'src/app/interfaces/movie_interface';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.css']
})
export class MoviesGridComponent implements OnInit {
  @Input() movies: Array<Movie>;

  constructor() { }

  ngOnInit(): void {
  }

}
