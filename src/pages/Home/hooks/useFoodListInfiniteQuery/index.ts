import useFoodListQuery from '../useFoodListQuery';
import { foodRepository, GetFoodParams, GetFoodResponse } from '@app/services/food';
import { getInfiniteQueryNextPageParam } from '@app/utils';
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';

type UseFoodListInfiniteQueryProps<Data> = {
  selector: (data: InfiniteData<GetFoodResponse>) => Data;
} & Omit<GetFoodParams, 'page'>;

export default function useFoodListInfiniteQuery<Data>({
  limit,
  categoryId,
  selector,
}: UseFoodListInfiniteQueryProps<Data>) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isPending } = useInfiniteQuery({
    getNextPageParam: getInfiniteQueryNextPageParam,
    initialPageParam: 1,
    queryFn: ({ pageParam, signal }) => foodRepository.getFoodList({ page: pageParam, limit, categoryId }, signal),
    queryKey: [useFoodListQuery.queryKey, categoryId, limit],
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
