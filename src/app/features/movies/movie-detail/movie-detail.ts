import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { MovieService } from '../../../services/movie';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-detail.html',
  styleUrls: ['./movie-detail.scss'],
})
export class MovieDetailComponent implements OnInit {
  // URL dan keladigan ID (masalan: tt0848228)
  @Input() id!: string;

  private movieService = inject(MovieService);
  private location = inject(Location);

  movie = signal<any>(null);
  isLoading = signal<boolean>(true);

  ngOnInit(): void {
    // ID orqali kinoni yuklaymiz
    this.movieService.getMovieById(this.id).subscribe({
      next: (data: any) => {
        this.movie.set(data);
        this.isLoading.set(false);
      },
      error: (err: any) => {
        console.error(err);
        this.isLoading.set(false);
      },
    });
  }

  goBack() {
    this.location.back();
  }
}
