import useFoodCategoryQuery from './hooks/useFoodCategoryQuery';
import useFoodListInfiniteQuery from './hooks/useFoodListInfiniteQuery';
import { useDebounced, useToggleValue } from '@utils';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function useHomeViewModel() {
  const { t } = useTranslation('home');
  const { value: selectedCategoryId, toggleValue: toggleCategoryId } = useToggleValue('');
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounced(search, 300);

  const { data: foodCategories, isPending: isFoodCategoriesLoading } = useFoodCategoryQuery();
  const {
    data: foodList,
    isPending: isFoodListLoading,
    hasNextPage: foodListHasNextPage,
    fetchNextPage: fetchNextFoodListPage,
  } = useFoodListInfiniteQuery({
    categoryId: selectedCategoryId || '',
    limit: 9,
    search: debouncedSearch,
    selector: (data) => {
      return { data: data.pages.flatMap((res) => res.data), page: data.pageParams.at(-1) };
    },
  });

  return {
    foodList,
    isFoodListLoading,
    foodListHasNextPage,
    setSearch,
    search,
    toggleCategoryId,
    selectedCategoryId,
    fetchNextFoodListPage,
    foodCategories,
    isFoodCategoriesLoading,
    t,
  };
}
