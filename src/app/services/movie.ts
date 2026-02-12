import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Movie, OmdbResponse } from '../modules/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiKey = 'b1fa2135';
  private http=inject(HttpClient)

private apiUrl = 'https://www.omdbapi.com'


  searchMovies(term: string = 'Marvel'): Observable<OmdbResponse> {
    
    return this.http.get<OmdbResponse>(`${this.apiUrl}/?apikey=${this.apiKey}&s=${term}`);
  }
  
}
