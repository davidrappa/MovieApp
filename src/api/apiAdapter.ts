import { Page } from "../infra/hooks/usePaginatedList";

function toPageModel<ApiType, ModelType>(
  page: Page<ApiType>,
  adapterToModel: (api: ApiType) => ModelType
): Page<ModelType> {
  return {
    page: page.page,
    total_pages: page.total_pages,
    results: page.results.map(adapterToModel),
  };
}

export const apiAdapter = {
  toPageModel,
};
