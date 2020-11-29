import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RatingModule } from 'ng-starrating';

import { PipesModule } from '../pipes/pipes.module';

import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MoviesGridComponent } from './movies-grid/movies-grid.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    MoviesGridComponent
  ],
  exports: [
    NavbarComponent,
    SlideshowComponent,
    MoviesGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule
  ]
})
export class ComponentsModule { }
