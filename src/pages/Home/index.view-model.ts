import useFoodListQuery from './hooks/useFoodListQuery';

export default function useHomeViewModel() {
  const { data: foodList, isPending: isFoodListLoading } = useFoodListQuery({});

  return {
    foodList,
    isFoodListLoading,
  };
}
