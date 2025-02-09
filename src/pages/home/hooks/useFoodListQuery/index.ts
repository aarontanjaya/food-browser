import { foodRepository, GetFoodParams } from '@app/services/food';
import { useQuery } from '@tanstack/react-query';

type UseFoodListQueryProps = {
  params?: GetFoodParams;
};

export default function useFoodListQuery({ params }: UseFoodListQueryProps) {
  const { data, error, isPending } = useQuery({
    queryFn: ({ signal }) => foodRepository.getFoodList(params || {}, signal),
    queryKey: [useFoodListQuery.queryKey],
  });

  return { data, error, isPending };
}

useFoodListQuery.queryKey = 'food';
