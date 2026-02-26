import { Page } from '@/src/infra/hooks/usePaginatedList';
import { apiAdapter } from '../apiAdapter';

describe('apiAdapter', () => {
  describe('toPageModel', () => {
    it('converts Page<ApiType> to Page<ModelType> correctly', () => {
      const apiPage: Page<{ id: number; name: string; invalid?: boolean }> = {
        page: 1,
        total_pages: 10,
        results: [
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2', invalid: true },
          { id: 3, name: 'Item 3' },
        ],
      };

      const adapterToModel = (api: { id: number; name: string; invalid?: boolean }) => {
        if (api.invalid) return null;
        return { id: api.id, name: api.name };
      };

      const result = apiAdapter.toPageModel(apiPage, adapterToModel);

      expect(result).toEqual({
        page: 1,
        total_pages: 10,
        results: [
          { id: 1, name: 'Item 1' },
          { id: 3, name: 'Item 3' },
        ],
      });
    });

    it('handles empty results', () => {
      const apiPage: Page<{ id: number }> = {
        page: 1,
        total_pages: 1,
        results: [],
      };

      const adapterToModel = (api: { id: number }) => ({ id: api.id });

      const result = apiAdapter.toPageModel(apiPage, adapterToModel);

      expect(result).toEqual({
        page: 1,
        total_pages: 1,
        results: [],
      });
    });

    it('filters out null values from adapter', () => {
      const apiPage: Page<{ id: number; valid: boolean }> = {
        page: 1,
        total_pages: 1,
        results: [
          { id: 1, valid: true },
          { id: 2, valid: false },
          { id: 3, valid: true },
        ],
      };

      const adapterToModel = (api: { id: number; valid: boolean }) => {
        return api.valid ? { id: api.id } : null;
      };

      const result = apiAdapter.toPageModel(apiPage, adapterToModel);

      expect(result.results).toHaveLength(2);
      expect(result.results[0].id).toBe(1);
      expect(result.results[1].id).toBe(3);
    });
  });
});
