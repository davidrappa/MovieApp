import { render, screen } from '@/src/test-utils/test-utils';
import { Text } from '../Text';

describe('Text', () => {
  it('renders text content', () => {
    render(<Text>Hello World</Text>);

    expect(screen.getByText('Hello World')).toBeOnTheScreen();
  });

  it('applies variant styles', () => {
    const { getByText } = render(
      <Text variant="displayLG">Display Text</Text>,
    );

    const text = getByText('Display Text');
    expect(text).toBeOnTheScreen();
  });

  it('applies color prop', () => {
    render(<Text color="purpleBase">Colored Text</Text>);

    expect(screen.getByText('Colored Text')).toBeOnTheScreen();
  });
});
