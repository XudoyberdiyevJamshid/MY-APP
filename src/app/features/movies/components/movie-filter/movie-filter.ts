import { Component, inject } from '@angular/core';
import { Movie2, MovieService } from '../../../../services/movie';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { combineLatest, debounceTime, map, Observable, startWith, switchMap, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-movie-filter',
  imports: [ReactiveFormsModule,AsyncPipe],
  templateUrl: './movie-filter.html',
  styleUrl: './movie-filter.scss',
})
export class MovieFilter {


  service=inject(MovieService)
  searchControl=new FormControl('')
  categoryControl=new FormControl('all')

  movies$:Observable<Movie2[]>=combineLatest([
    this.searchControl.valueChanges.pipe(startWith('')),
    this.categoryControl.valueChanges.pipe(startWith('all'))
  ]).pipe(
    debounceTime(500),
    tap((val: any)=>console.log(val)),
    switchMap(([searchTerm, category]) => {
      
      return this.service.getMovies(searchTerm || '', category || 'all');
    })
  )
  category: any;

}
