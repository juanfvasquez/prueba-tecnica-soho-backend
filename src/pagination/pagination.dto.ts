export interface PaginationRequest {
  limit: number;
  offset: number;
}

export interface Pagination<T> {
  count: number;
  data: T[];
}
