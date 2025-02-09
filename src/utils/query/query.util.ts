import { PaginationResponse } from '@app/services/common';

export function getInfiniteQueryNextPageParam(res: PaginationResponse | null | undefined) {
  const { page: currentPage = 0, limit: currentPageSize = 0, total: totalCount = 0 } = res || {};

  if (currentPage * currentPageSize < totalCount) return currentPage + 1;

  return undefined;
}
