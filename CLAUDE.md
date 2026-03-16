# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start              # Start Expo dev server
npm run ios            # Run on iOS simulator
npm run android        # Run on Android emulator
npm run web            # Run in browser
npm run lint           # Run ESLint
npm run test           # Run Jest tests
npm run test:watch     # Run tests in watch mode
npm run test:coverage  # Generate coverage report
```

To run a single test file:
```bash
npx jest path/to/file.test.ts
```

## Environment

Copy `.env.example` to `.env` and add your TMDB API key. The key is injected via `app.config.js` into `expo-constants` at runtime.

## Architecture

Clean Architecture with three layers:

**`src/api/`** — HTTP infrastructure. Axios instance configured with TMDB bearer auth. Generic pagination adapter in `apiAdapter.ts`.

**`src/domain/Movies/`** — Business logic layer:
- `moviesApi.ts` — raw TMDB API calls
- `moviesAdapter.ts` — transforms API responses into domain `Movie`/`MovieDetails` types
- `moviesService.ts` — composes API + adapter
- `useCases/` — React Query hooks that expose services to UI (`usePopularList`, `useMoviesByQuery`, `useMovieById`, `useMovieVideoById`)

**`src/infra/`** — Storage abstraction over AsyncStorage, Zustand store for persisted favorites, shared utility hooks (`usePaginatedList`, `useAppDebounce`).

**`src/ui/`** — Presentation only. Components are small primitives; containers are compound sections. Theme uses Shopify Restyle (`src/ui/theme/theme.ts`).

**`app/`** — Expo Router file-based routing. `(tabs)/` group has three screens: index (popular), search, favorites. `movie-details/[id].tsx` is the detail screen. Root layout sets up providers (QueryClient, Restyle ThemeProvider).

## State Management

- **React Query**: all server/async state. `usePaginatedList` wraps infinite pagination.
- **Zustand** (`src/infra/store/favoritesStore.ts`): favorites list, persisted to AsyncStorage under key `@Favorites`.

## Testing

Tests live in `__tests__/` subdirectories colocated with source. `src/test-utils/test-utils.tsx` provides a custom `render` that wraps components with React Query and Restyle providers.

Expo modules (expo-router, expo-image, expo-linear-gradient, expo-constants, AsyncStorage) are mocked globally in `jest-setup.js`. Tests use `retry: false` in QueryClient to keep them deterministic.

## Path Aliases

`@/` maps to the repository root. Use `@/src/...` for imports from `src/`.
