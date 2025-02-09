import { GetRestaurantParams, restaurantRepository } from '@app/services/restaurant';
import { useQuery } from '@tanstack/react-query';

type UseRestaurantListQueryProps = {
  params?: GetRestaurantParams;
};

export default function useRestaurantListQuery({ params }: UseRestaurantListQueryProps) {
  const { data, error, isPending } = useQuery({
    queryFn: ({ signal }) => restaurantRepository.getRestaurantList(params || {}, signal),
    queryKey: [useRestaurantListQuery.queryKey],
  });

  return { data, error, isPending };
}

useRestaurantListQuery.queryKey = 'restaurant';
