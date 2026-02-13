import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Movie } from '../../../modules/movie';

@Component({
  selector: 'app-movie-card',
  imports: [RouterLink],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss',
})
export class MovieCard {
  movie = input.required<Movie>();

  addMovie = output<Movie>();

  addMovieCart() {
    this.addMovie.emit(this.movie());
  }
}
