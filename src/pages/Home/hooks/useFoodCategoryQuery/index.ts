import { foodRepository } from '@app/services/food';
import { useQuery } from '@tanstack/react-query';

export default function useFoodCategoryQuery() {
  const { data, error, isPending } = useQuery({
    queryFn: ({ signal }) => foodRepository.getFoodCategories(signal),
    queryKey: [useFoodCategoryQuery.queryKey],
  });

  return { data, error, isPending };
}

useFoodCategoryQuery.queryKey = 'foodCategories';
