import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Movie, OmdbResponse } from '../modules/movie';
import { delay, Observable, of } from 'rxjs';

export interface Movie2 {
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiKey = 'b1fa2135';
  private http = inject(HttpClient);

  private apiUrl = 'https://www.omdbapi.com';

  searchMovies(term: string = 'Marvel'): Observable<OmdbResponse> {
    return this.http.get<OmdbResponse>(`${this.apiUrl}/?apikey=${this.apiKey}&s=${term}`);
  }

  getMovieById(imdbID: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?apikey=${this.apiKey}&i=${imdbID}&plot=full`);
  }

  private movies: Movie2[] = [
    { id: 1, title: 'Avengers: Endgame' },
    { id: 2, title: 'Avatar 2' },
    { id: 3, title: 'Spider-Man: No Way Home' },
    { id: 4, title: 'The Batman' },
    { id: 5, title: 'Interstellar' },
    { id: 6, title: 'Inception' },
    { id: 7, title: 'Gladiator' },
    { id: 8, title: 'Titanic' },
  ];

  searchMovies2(query: string): Observable<Movie2[]> {
    if (!query.trim()) {
      return of([]);
    }
    const filtered = this.movies.filter((m) => m.title.toLowerCase().includes(query.toLowerCase()));
    return of(filtered).pipe(delay(1000));
  }
}
