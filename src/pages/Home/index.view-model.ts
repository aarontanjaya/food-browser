import useRestaurantCategoryQuery from './hooks/useRestaurantCategoryQuery';
import useRestaurantListInfiniteQuery from './hooks/useRestaurantListInfiniteQuery';
import { useDebounced, useToggleValue } from '@utils';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function useHomeViewModel() {
  const { t } = useTranslation('home');
  const { value: selectedCategoryId, toggleValue: toggleCategoryId } = useToggleValue('');
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounced(search, 300);

  const { data: restaurantCategories, isPending: isRestaurantCategoriesLoading } = useRestaurantCategoryQuery();
  const {
    data: restaurantList,
    isPending: isRestaurantListLoading,
    hasNextPage: restaurantListHasNextPage,
    fetchNextPage: fetchNextRestaurantListPage,
  } = useRestaurantListInfiniteQuery({
    categoryId: selectedCategoryId || '',
    limit: 9,
    search: debouncedSearch,
    selector: (data) => {
      return { data: data.pages.flatMap((res) => res.data), page: data.pageParams.at(-1) };
    },
  });

  return {
    restaurantList,
    isRestaurantListLoading,
    restaurantListHasNextPage,
    setSearch,
    search,
    toggleCategoryId,
    selectedCategoryId,
    fetchNextRestaurantListPage,
    restaurantCategories,
    isRestaurantCategoriesLoading,
    t,
  };
}
