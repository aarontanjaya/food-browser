import FoodCardAttributes from '../FoodCardAttributes';
import { Food } from '@app/services/food';
import { useTranslation } from 'react-i18next';

type FoodCardProps = {
  data: Food;
};

export default function FoodCard({ data }: FoodCardProps) {
  const { t } = useTranslation('home');

  return (
    <div className="flex w-full flex-col overflow-hidden rounded-2xl bg-white shadow-xl">
      <img className="aspect-[3/2] w-full object-cover" src={data.imageUrl} />
      <div className="flex w-full flex-col gap-y-6 p-6">
        <h2 className="text-xl font-bold">{data.name}</h2>
        <div className="flex w-full flex-col">
          <FoodCardAttributes
            rating={data.rating}
            isNew={data.isNew}
            duration={t('time.minute', {
              value: `${data.minCookTime}-${data.maxCookTime}`,
            })}
          />
        </div>
      </div>
    </div>
  );
}
