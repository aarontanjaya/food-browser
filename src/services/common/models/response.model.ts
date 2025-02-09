export type PaginatedResponse<T> = {
  limit: number;
  page: number;
  total: number;
  data: T;
};
