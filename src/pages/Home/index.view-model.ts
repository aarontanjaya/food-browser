import useFoodCategoryQuery from './hooks/useFoodCategoryQuery';
import useFoodListQuery from './hooks/useFoodListQuery';
import { useEffect } from 'react';

export default function useHomeViewModel() {
  const { data: foodList, isPending: isFoodListLoading } = useFoodListQuery({});
  const { data: foodCategories, isPending: isFoodCategoriesLoading } = useFoodCategoryQuery();

  useEffect(() => {
    console.log('cats', foodCategories);
  }, [foodCategories]);
  return {
    foodList,
    isFoodListLoading,
    foodCategories,
    isFoodCategoriesLoading,
  };
}
