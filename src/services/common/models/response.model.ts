export type PaginatedResponse<T> = {
  data: T;
} & PaginationResponse;

export type PaginationResponse = {
  limit: number;
  page: number;
  total: number;
};
