import useRestaurantCategoryQuery from './hooks/useRestaurantCategoryQuery';
import useRestaurantListInfiniteQuery from './hooks/useRestaurantListInfiniteQuery';
import useInfiniteContentScrollHandler from '@app/hooks/useInfiniteContentScrollHandler.hook';
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
    isLoading: isRestaurantListLoading,
    isPending: isRestaurantListPending,
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

  const { endListRef, listContainerRef, scrollContainerRef } = useInfiniteContentScrollHandler({
    enabled:
      !isRestaurantListLoading && restaurantListHasNextPage && !isRestaurantListPending && restaurantList?.page !== 1,
    intersectionThreshold: 0.75,
    onLoadMore: fetchNextRestaurantListPage,
  });

  return {
    restaurantList,
    isRestaurantListPending,
    restaurantListHasNextPage,
    setSearch,
    endListRef,
    listContainerRef,
    scrollContainerRef,
    search,
    toggleCategoryId,
    selectedCategoryId,
    fetchNextRestaurantListPage,
    restaurantCategories,
    isRestaurantCategoriesLoading,
    t,
  };
}
