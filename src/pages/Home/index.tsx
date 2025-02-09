import FoodCard from './components/molecules/FoodCard';
import useHomeViewModel from './index.view-model';
import { Button, Input, Selections } from '@ui';
import { Search } from 'lucide-react';

export default function Home() {
  const {
    foodList,
    foodCategories,
    search,
    setSearch,
    t,
    selectedCategoryId,
    toggleCategoryId,
    fetchNextFoodListPage,
  } = useHomeViewModel();

  return (
    <div className="bg-custom-neutral-1 flex min-h-screen w-full flex-col items-center pt-10">
      <div className="flex w-full max-w-[75rem] flex-col px-8">
        <Input
          value={search}
          onChange={(val) => setSearch(val.target.value)}
          className="bg-custom-neutral-1 w-full max-w-[20rem]"
          LeftElement={<Search className="h-6 w-6 text-neutral-400" />}
          placeholder="Enter restaurant name..."
        />
        <Selections
          onChange={(val) => {
            toggleCategoryId(val);
          }}
          className="my-15"
          value={selectedCategoryId || ''}
          items={foodCategories?.map((item) => ({ label: item.name, key: item.id, value: item.id })) || []}
        />
        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {foodList?.data.map((item) => <FoodCard key={item.id} data={item} />)}
        </div>
        <div className="flex w-full items-center justify-center py-20">
          <Button onClick={() => fetchNextFoodListPage()}>{t('show-more')}</Button>
        </div>
      </div>
    </div>
  );
}
