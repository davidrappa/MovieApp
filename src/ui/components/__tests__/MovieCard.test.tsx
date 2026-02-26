import { Movie } from '@/src/domain/Movies/moviesTypes';
import { useFavoritesStore } from '@/src/infra/store/favoritesStore';
import { fireEvent, render, screen } from '@/src/test-utils/test-utils';
import { MovieCard } from '../MovieCard';

// Mock the favorites store
jest.mock('@/src/infra/store/favoritesStore');

const mockMovie: Movie = {
  id: 1,
  title: 'Test Movie',
  releaseYear: 2024,
  rating: '8.5',
  posterURL: 'https://example.com/poster.jpg',
};

describe('MovieCard', () => {
  const mockToggleFavorite = jest.fn();
  const mockIsFavorite = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useFavoritesStore as jest.Mock).mockReturnValue({
      isFavorite: mockIsFavorite,
      toggleFavorite: mockToggleFavorite,
    });
    mockIsFavorite.mockReturnValue(false);
  });

  it('renders movie information', () => {
    render(<MovieCard item={mockMovie} />);

    expect(screen.getByText('Test Movie')).toBeOnTheScreen();
    expect(screen.getByText('8.5')).toBeOnTheScreen();
    expect(screen.getByText('2024')).toBeOnTheScreen();
  });

  it('displays favorite button when movie is favorited', () => {
    mockIsFavorite.mockReturnValue(true);

    render(<MovieCard item={mockMovie} />);

    const removeButton = screen.getByLabelText('Remover dos favoritos');
    expect(removeButton).toBeOnTheScreen();
  });

  it('calls toggleFavorite when favorite button is pressed', () => {
    mockIsFavorite.mockReturnValue(true);

    render(<MovieCard item={mockMovie} />);

    const removeButton = screen.getByLabelText('Remover dos favoritos');
    fireEvent.press(removeButton);

    expect(mockToggleFavorite).toHaveBeenCalledWith(mockMovie);
  });

  it('has correct accessibility label', () => {
    render(<MovieCard item={mockMovie} />);

    const card = screen.getByLabelText(
      `Filme Test Movie, nota 8.5 lançado em 2024.`,
    );
    expect(card).toBeOnTheScreen();
  });

  it('includes favorite status in accessibility label when favorited', () => {
    mockIsFavorite.mockReturnValue(true);

    render(<MovieCard item={mockMovie} />);

    const card = screen.getByLabelText(
      `Filme Test Movie, nota 8.5 lançado em 2024. Adicionado aos favoritos.`,
    );
    expect(card).toBeOnTheScreen();
  });
});
