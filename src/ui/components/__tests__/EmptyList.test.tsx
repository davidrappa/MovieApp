import { render, screen } from '@/src/test-utils/test-utils';
import { EmptyList } from '../EmptyList';

describe('EmptyList', () => {
  it('renders title and subtitle when provided', () => {
    render(<EmptyList title="No items" subtitle="Try again later" />);

    expect(screen.getByText('No items')).toBeOnTheScreen();
    expect(screen.getByText('Try again later')).toBeOnTheScreen();
  });

  it('renders only title when subtitle is not provided', () => {
    render(<EmptyList title="No items" />);

    expect(screen.getByText('No items')).toBeOnTheScreen();
  });

  it('renders only subtitle when title is not provided', () => {
    render(<EmptyList subtitle="Try again later" />);

    expect(screen.getByText('Try again later')).toBeOnTheScreen();
  });

  it('has correct accessibility label', () => {
    render(<EmptyList title="No items" subtitle="Try again later" />);

    const container = screen.getByLabelText('No items. Try again later');
    expect(container).toBeOnTheScreen();
  });

  it('has correct accessibility role', () => {
    render(<EmptyList title="No items" />);

    const container = screen.getByLabelText('No items');
    expect(container.props.accessibilityRole).toBe('text');
  });
});
