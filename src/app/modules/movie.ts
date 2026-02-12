export interface Movie {
  imdbID: string; // ID o'rniga imdbID keladi
  Title: string; // Katta harf bilan!
  Year: string;
  Type: string;
  Poster: string;
}

export interface OmdbResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}
