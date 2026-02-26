import { moviesAdapter } from '../moviesAdapter';
import {
    MovieAPI,
    MovieDetailsAPI,
    MovieVideoAPI,
} from '../moviesTypes';

describe('moviesAdapter', () => {
  describe('toMovies', () => {
    it('converts MovieAPI to Movie correctly', () => {
      const movieAPI: MovieAPI = {
        id: 1,
        title: 'Test Movie',
        release_date: '2024-01-15',
        vote_average: 8.5,
        poster_path: '/poster.jpg',
        adult: false,
        genre_ids: [12, 16],
      };

      const result = moviesAdapter.toMovies(movieAPI);

      expect(result).toEqual({
        id: 1,
        title: 'Test Movie',
        releaseYear: 2024,
        rating: '8.5',
        posterURL: 'https://image.tmdb.org/t/p/w500/poster.jpg',
      });
    });

    it('returns null for movies with missing essential data', () => {
      const movieAPI: Partial<MovieAPI> = {
        id: 1,
        title: 'Test Movie',
        // Missing poster_path
      };

      const result = moviesAdapter.toMovies(movieAPI as MovieAPI);

      expect(result).toBeNull();
    });

    it('handles missing release_date by using current year', () => {
      const movieAPI: MovieAPI = {
        id: 1,
        title: 'Test Movie',
        vote_average: 8.5,
        poster_path: '/poster.jpg',
        adult: false,
        genre_ids: [12, 16],
      };

      const result = moviesAdapter.toMovies(movieAPI);
      const currentYear = new Date().getFullYear();

      expect(result?.releaseYear).toBe(currentYear);
    });

    it('handles invalid release_date gracefully', () => {
      const movieAPI: MovieAPI = {
        id: 1,
        title: 'Test Movie',
        release_date: 'invalid-date',
        vote_average: 8.5,
        poster_path: '/poster.jpg',
        adult: false,
        genre_ids: [12, 16],
      };

      const result = moviesAdapter.toMovies(movieAPI);
      const currentYear = new Date().getFullYear();

      expect(result?.releaseYear).toBe(currentYear);
    });
  });

  describe('toMovieDetails', () => {
    it('converts MovieDetailsAPI to MovieDetails correctly', () => {
      const movieDetailsAPI: MovieDetailsAPI = {
        id: 1,
        title: 'Test Movie',
        release_date: '2024-01-15',
        vote_average: 8.5,
        poster_path: '/poster.jpg',
        backdrop_path: '/backdrop.jpg',
        runtime: 125,
        overview: 'A test movie overview',
      };

      const result = moviesAdapter.toMovieDetails(movieDetailsAPI);

      expect(result).toEqual({
        id: 1,
        title: 'Test Movie',
        releaseDate: '15/01/2024',
        releaseYear: '2024',
        posterURL: 'https://image.tmdb.org/t/p/w500/poster.jpg',
        rating: '8.5',
        backdropURL: 'https://image.tmdb.org/t/p/w500/backdrop.jpg',
        duration: '2h 5min',
        overview: 'A test movie overview',
      });
    });
  });

  describe('toVideo', () => {
    it('converts MovieVideoAPI to MovieVideo correctly', () => {
      const videoAPI: MovieVideoAPI = {
        id: 1,
        results: [
          {
            id: 'video1',
            key: 'abc123',
            site: 'YouTube',
            type: 'Trailer',
            name: 'Trailer 1',
          },
        ],
      };

      const result = moviesAdapter.toVideo(videoAPI);

      expect(result).toEqual({
        id: 1,
        key: 'abc123',
        site: 'YouTube',
      });
    });
  });
});
