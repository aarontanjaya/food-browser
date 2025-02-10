import RestaurantCard from './components/molecules/RestaurantCard';
import useHomeViewModel from './index.view-model';
import { Button, Input, Selections } from '@ui';
import { Search } from 'lucide-react';
import { Helmet } from 'react-helmet';

export default function Home() {
  const {
    restaurantList,
    restaurantCategories,
    isRestaurantListPending,
    search,
    endListRef,
    listContainerRef,
    scrollContainerRef,
    setSearch,
    t,
    selectedCategoryId,
    toggleCategoryId,
    fetchNextRestaurantListPage,
  } = useHomeViewModel();

  return (
    <div
      ref={scrollContainerRef}
      className="bg-custom-neutral-1 flex h-screen w-full flex-col items-center overflow-y-auto py-5 md:pt-10"
    >
      <div ref={listContainerRef} className="flex w-full flex-col items-center">
        <Helmet>
          <title>{t('helmet.title')}</title>
          <meta name="description" content={t('helmet.description')} />
        </Helmet>
        <div className="flex w-full max-w-[75rem] flex-col px-4 md:px-8">
          <Input
            value={search}
            onChange={(val) => setSearch(val.target.value)}
            className="bg-custom-neutral-1 w-full max-w-[22rem]"
            LeftElement={<Search className="h-6 w-6 text-neutral-400" />}
            placeholder="Enter restaurant name..."
          />
          <Selections
            onChange={(val) => {
              toggleCategoryId(val);
            }}
            className="my-5 md:my-15"
            value={selectedCategoryId || ''}
            items={[
              {
                key: 'all',
                value: '',
                label: t('category.all'),
              },
              ...(restaurantCategories?.map((item) => ({ label: item.name, key: item.id, value: item.id })) || []),
            ]}
          />
          <div className="grid w-full grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
            {restaurantList?.data.map((item) => <RestaurantCard key={item.id} data={item} />)}
            {isRestaurantListPending && (
              <>
                <RestaurantCard.Skeleton />
                <RestaurantCard.Skeleton />
                <RestaurantCard.Skeleton />
              </>
            )}
          </div>
          {restaurantList?.page === 1 && (
            <div className="flex w-full items-center justify-center py-20">
              <Button onClick={() => fetchNextRestaurantListPage()}>{t('show-more')}</Button>
            </div>
          )}
        </div>
        <div ref={endListRef} />
      </div>
    </div>
  );
}
