import { Movie, MovieDetails } from "@/src/domain/Movies/moviesTypes";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { storage } from "../storage/storage";

interface FavoritesStore {
  favorites: Movie[];
  toggleFavorite: (movie: MovieDetails | Movie) => void;
  isFavorite: (movieId: number) => boolean;
}

export const useFavoritesStore = create(
  persist<FavoritesStore>(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (movie) => {
        const currentFavorites = get().favorites;
        const exists = currentFavorites.find((m) => m.id === movie.id);

        const formatMovie: Movie = {
          id: movie.id,
          title: movie.title,
          rating: movie.rating,
          releaseYear: movie.releaseDate
            ? Number(movie.releaseDate.split("/")[2])
            : Number(movie.releaseYear),
          posterURL: movie.posterURL,
        };

        const updatedFavorites = exists
          ? currentFavorites.filter((m) => m.id !== movie.id)
          : [...currentFavorites, formatMovie];

        set({ favorites: updatedFavorites });
      },
      isFavorite: (movieId) => {
        return get().favorites.some((m) => m.id === movieId);
      },
    }),
    {
      name: "@Favorites",
      storage: storage,
    }
  )
);
