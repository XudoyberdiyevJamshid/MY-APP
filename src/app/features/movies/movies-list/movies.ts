import { Component, inject, OnInit, signal } from '@angular/core';

import { RouterLink } from '@angular/router';
import { Movie } from '../../../modules/movie';
import { MovieService } from '../../../services/movie';
import { MovieCard } from '../movie-card/movie-card';
import { MovieSearch } from '../components/movie-search/movie-search';
import { MovieFilter } from '../components/movie-filter/movie-filter';


@Component({
  selector: 'app-movies',
  imports: [ MovieCard, MovieSearch, MovieFilter],
  templateUrl: './movies.html',
  styleUrl: './movies.scss',
})
export class MoviesComponent implements OnInit {
  movies = signal<Movie[]>([]);
  isLoading = signal<boolean>(false);
  errorMsg = signal<string>('');
  movieService = inject(MovieService);
  ngOnInit(): void {
    this.search('Avengers');
  }

  search(term: string) {
    this.isLoading.set(true);

    this.movieService.searchMovies(term).subscribe({
      next: (data) => {
        if (data.Response === 'True') {
          this.movies.set(data.Search);
          this.errorMsg.set('');
        } else {
          this.errorMsg.set('Kino topilmadi 😔');
        }
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.errorMsg.set('Internetda xatolik bor!');
        this.isLoading.set(false);
      },
    });
  }
}
