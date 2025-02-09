import useFoodCategoryQuery from './hooks/useFoodCategoryQuery';
import useFoodListInfiniteQuery from './hooks/useFoodListInfiniteQuery';
import { useTranslation } from 'react-i18next';

export default function useHomeViewModel() {
  const { t } = useTranslation('home');
  const { data: foodCategories, isPending: isFoodCategoriesLoading } = useFoodCategoryQuery();
  const {
    data: foodList,
    isPending: isFoodListLoading,
    hasNextPage: foodListHasNextPage,
    fetchNextPage: fetchNextFoodListPage,
  } = useFoodListInfiniteQuery({
    selector: (data) => {
      return { data: data.pages.flatMap((res) => res.data), page: data.pageParams.at(-1) };
    },
  });

  return {
    foodList,
    isFoodListLoading,
    foodListHasNextPage,
    fetchNextFoodListPage,
    foodCategories,
    isFoodCategoriesLoading,
    t,
  };
}
