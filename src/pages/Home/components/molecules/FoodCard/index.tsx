import FoodCardAttributes from '../FoodCardAttributes';
import FoodPromotionFlag from '../FoodPromotionFlag';
import { Food } from '@app/services/food';
import { useTranslation } from 'react-i18next';

type FoodCardProps = {
  data: Food;
};

export default function FoodCard({ data }: FoodCardProps) {
  const { t } = useTranslation('home');

  return (
    <div className="relative flex w-full flex-col overflow-hidden rounded-2xl bg-white shadow-xl">
      {data.promotion && <FoodPromotionFlag className="absolute top-0 left-0" type={data.promotion} />}
      <img className="aspect-[3/2] w-full object-cover" src={data.imageUrl} />
      <div className="flex w-full flex-col gap-y-6 p-6">
        <h2 className="font-bold">{data.name}</h2>
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
