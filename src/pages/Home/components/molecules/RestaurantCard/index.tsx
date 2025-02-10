import RestaurantCardAttributes from '../RestaurantCardAttributes';
import RestaurantPromotionFlag from '../RestaurantPromotionFlag';
import RestaurantCardSkeleton from './index.skeleton';
import { Restaurant } from '@app/services/restaurant';
import { useTranslation } from 'react-i18next';

type RestaurantCardProps = {
  data: Restaurant;
};

export default function RestaurantCard({ data }: RestaurantCardProps) {
  const { t } = useTranslation('home');

  return (
    <div className="relative flex w-full flex-col overflow-hidden rounded-2xl bg-white shadow-xl hover:cursor-pointer">
      {data.promotion && <RestaurantPromotionFlag className="absolute top-0 left-0" type={data.promotion} />}
      <img className="aspect-[3/2] w-full object-cover" src={data.imageUrl} />
      <div className="flex w-full flex-col gap-y-2 p-4 md:gap-y-4 md:p-6">
        <h2 className="text-sm font-bold md:text-base">{data.name}</h2>
        <div className="flex w-full flex-col">
          <RestaurantCardAttributes
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

RestaurantCard.Skeleton = RestaurantCardSkeleton;
