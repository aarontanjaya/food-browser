import useRestaurantListQuery from '../useRestaurantListQuery';
import { GetRestaurantParams, GetRestaurantResponse, restaurantRepository } from '@app/services/restaurant';
import { getInfiniteQueryNextPageParam } from '@app/utils';
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';

type UseRestaurantListInfiniteQueryProps<Data> = {
  selector: (data: InfiniteData<GetRestaurantResponse>) => Data;
} & Omit<GetRestaurantParams, 'page'>;

export default function useRestaurantListInfiniteQuery<Data>({
  limit,
  categoryId,
  search,
  selector,
}: UseRestaurantListInfiniteQueryProps<Data>) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isPending } = useInfiniteQuery({
    getNextPageParam: getInfiniteQueryNextPageParam,
    initialPageParam: 1,
    queryFn: ({ pageParam, signal }) =>
      restaurantRepository.getRestaurantList({ page: pageParam, limit, categoryId, search }, signal),
    queryKey: [useRestaurantListQuery.queryKey, categoryId, limit, search],
    select: selector,
  });

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isPending,
  };
}
