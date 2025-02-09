import { restaurantRepository } from '@app/services/restaurant';
import { useQuery } from '@tanstack/react-query';

export default function useRestaurantCategoryQuery() {
  const { data, error, isPending } = useQuery({
    queryFn: ({ signal }) => restaurantRepository.getRestaurantCategories(signal),
    queryKey: [useRestaurantCategoryQuery.queryKey],
  });

  return { data, error, isPending };
}

useRestaurantCategoryQuery.queryKey = 'restaurantCategories';
