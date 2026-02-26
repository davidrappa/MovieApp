# Testing Guide

This project uses **Jest** and **React Testing Library** for testing React Native components and utilities.

## Setup

The testing setup includes:

- **Jest** - Test runner
- **React Testing Library** - Component testing utilities
- **jest-expo** - Expo-specific Jest preset
- **React Query** - Query client provider for tests

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Test Structure

Tests are organized alongside the code they test:

```
src/
  ui/
    components/
      __tests__/
        ComponentName.test.tsx
  domain/
    Movies/
      __tests__/
        moviesAdapter.test.ts
```

## Writing Tests

### Component Tests

Use the custom `render` function from `test-utils` which includes React Query provider:

```typescript
import { render, screen } from '@/src/test-utils/test-utils';
import { MyComponent } from '../MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeOnTheScreen();
  });
});
```

### Utility/Adapter Tests

For pure functions and adapters, you can test them directly:

```typescript
import { myAdapter } from '../myAdapter';

describe('myAdapter', () => {
  it('converts data correctly', () => {
    const result = myAdapter.transform(input);
    expect(result).toEqual(expected);
  });
});
```

### Testing with React Query

When testing components that use React Query hooks, use the `render` function from `test-utils`:

```typescript
import { render, screen, waitFor } from '@/src/test-utils/test-utils';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// The test-utils render function already includes QueryClientProvider
```

### Testing with Navigation

Expo Router is mocked in `jest-setup.js`. To test navigation:

```typescript
import { useRouter } from 'expo-router';

jest.mock('expo-router');

const mockPush = jest.fn();
(useRouter as jest.Mock).mockReturnValue({
  push: mockPush,
});
```

### Testing with Zustand Stores

Mock the store in your tests:

```typescript
import { useFavoritesStore } from '@/src/infra/store/favoritesStore';

jest.mock('@/src/infra/store/favoritesStore');

const mockToggleFavorite = jest.fn();
(useFavoritesStore as jest.Mock).mockReturnValue({
  isFavorite: jest.fn().mockReturnValue(false),
  toggleFavorite: mockToggleFavorite,
});
```

## Best Practices

1. **Test user behavior, not implementation** - Focus on what users see and interact with
2. **Use accessibility queries** - Prefer `getByRole`, `getByLabelText` over `getByTestId`
3. **Keep tests simple** - One assertion per test when possible
4. **Mock external dependencies** - API calls, navigation, storage, etc.
5. **Test edge cases** - Empty states, error states, loading states

## Available Matchers

React Testing Library provides these matchers (built-in, no need for jest-native):

- `toBeOnTheScreen()` - Check if element is visible
- `toBeDisabled()` - Check if element is disabled
- `toHaveTextContent()` - Check text content
- `toBeEnabled()` - Check if element is enabled

## Coverage

To generate coverage reports:

```bash
npm run test:coverage
```

Coverage reports will be generated in the `coverage/` directory.

## Troubleshooting

### Watchman Issues

If you encounter Watchman errors, Jest will fall back to Node's file watching. You can disable Watchman in `jest.config.js`:

```javascript
module.exports = {
  // ... other config
  watchman: false,
};
```

### Module Resolution

If you have issues with path aliases (`@/`), ensure `tsconfig.json` paths match `jest.config.js` moduleNameMapper.
