import FoodCard from './components/molecules/FoodCard';
import useHomeViewModel from './index.view-model';
import { Input } from '@ui';
import { Search } from 'lucide-react';

export default function Home() {
  const { foodList } = useHomeViewModel();

  return (
    <div className="bg-custom-neutral-1 flex min-h-screen w-full flex-col items-center pt-10">
      <div className="flex w-full max-w-[75rem] flex-col">
        <Input
          className="bg-custom-neutral-1 w-full max-w-[20rem]"
          LeftElement={<Search className="h-6 w-6 text-neutral-400" />}
          placeholder="Enter restaurant name..."
        />
        <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
          {foodList?.data.map((item) => <FoodCard key={item.id} data={item} />)}
        </div>
      </div>
    </div>
  );
}
