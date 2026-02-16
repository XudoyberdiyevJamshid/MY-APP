import { Component, inject } from '@angular/core'; // <-- Kichkina 'inject'
import { Movie2, MovieService } from '../../../../services/movie';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Observable, switchMap, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-movie-search',
  standalone: true, // Standalone ekanligini bildirish kerak
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './movie-search.html',
  styleUrl: './movie-search.scss',
})
export class MovieSearch {
  private movieService = inject(MovieService);

  searchControl = new FormControl('', { nonNullable: true });

  results$: Observable<Movie2[]> = this.searchControl.valueChanges.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    tap((val) => console.log('Qidirilyapti:', val)),

    switchMap((query) => this.movieService.searchMovies2(query)),
  );
}
