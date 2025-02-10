import { cn } from '@utils';
import { Star } from 'lucide-react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

type RestaurantCardAttributesProps = {
  rating: number;
  duration: string;
  isNew: boolean;
  className?: string;
  textClassName?: string;
  iconClassName?: string;
};

export default function RestaurantCardAttributes({
  rating,
  duration,
  className,
  isNew,
  textClassName,
  iconClassName,
}: RestaurantCardAttributesProps) {
  const { t } = useTranslation('home');

  const formattedRating = useMemo(() => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });

    return formatter.format(rating);
  }, [rating]);

  return (
    <div className="scrollbar-hidden flex flex-row flex-wrap items-center gap-x-1.5 gap-y-1.5 overflow-x-auto md:gap-x-2">
      <div
        className={cn(
          'bg-custom-neutral-1 flex shrink-0 flex-row items-center gap-x-1 rounded-md px-2 py-1 md:gap-x-2',
          className,
        )}
      >
        <Star className={cn('h-2.5 w-2.5 fill-neutral-600 text-neutral-600 md:h-3 md:w-3', iconClassName)} />
        <p className={cn('text-xxs font-semibold md:text-xs', textClassName)}>{formattedRating}</p>
      </div>
      <div
        className={cn(
          'bg-custom-neutral-1 flex shrink-0 flex-row items-center gap-x-1 rounded-md px-2 py-1 md:gap-x-2',
          className,
        )}
      >
        <p className={cn('text-xxs md:text-xs', textClassName)}>{duration}</p>
      </div>
      {isNew && (
        <div
          className={cn(
            'bg-custom-neutral-1 flex shrink-0 flex-row items-center gap-x-1 rounded-md px-2 py-1 md:gap-x-2',
            className,
          )}
        >
          <p className={cn('text-xxs font-semibold text-green-700 md:text-xs', textClassName)}>{t('new')}</p>
        </div>
      )}
    </div>
  );
}
