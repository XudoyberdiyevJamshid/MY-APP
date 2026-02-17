
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Movie, OmdbResponse } from '../modules/movie';
import { delay, Observable, of } from 'rxjs';

export interface Movie2 {
  id: number;
  title: string;
  category: string
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
    { id: 1, title: 'Avengers: Endgame', category: 'action' },
    { id: 2, title: 'Titanic', category: 'drama' },
    { id: 3, title: 'Joker', category: 'drama' },
    { id: 4, title: 'Spider-Man', category: 'action' },
    { id: 5, title: 'The Mask', category: 'comedy' },
    { id: 6, title: 'Home Alone', category: 'comedy' },
  ];

  searchMovies2(query: string): Observable<Movie2[]> {
    if (!query.trim()) {
      return of([]);
    }
    const filtered = this.movies.filter((m) => m.title.toLowerCase().includes(query.toLowerCase()));
    return of(filtered).pipe(delay(1000));
  }
  getMovies(search: string, category: string): Observable<Movie2[]> {
    console.log(`📡 SERVERGA SO'ROV KETDI: Search="${search}", Category="${category}"`);

    // 1. Filtrlash (Backend aslida shu ishni qiladi)
    let result = this.movies;

    // Kategoriya bo'yicha filter (agar 'all' bo'lmasa)
    if (category && category !== 'all') {
      result = result.filter(m => m.category === category);
    }

    // So'z bo'yicha filter
    if (search) {
      result = result.filter(m => m.title.toLowerCase().includes(search.toLowerCase()));
    }

    // 2. Javobni qaytarish (1.5 sekund kechikib)
    return of(result).pipe(delay(1500));
  }
}
