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
    <div className="scrollbar-hidden flex flex-row items-center gap-x-2 overflow-x-auto">
      <div
        className={cn(
          'bg-custom-neutral-1 flex shrink-0 flex-row items-center gap-x-2 rounded-md px-2 py-1',
          className,
        )}
      >
        <Star className={cn('h-3 w-3 fill-neutral-600 text-neutral-600', iconClassName)} />
        <p className={cn('text-xs font-semibold', textClassName)}>{formattedRating}</p>
      </div>
      <div
        className={cn(
          'bg-custom-neutral-1 flex shrink-0 flex-row items-center gap-x-2 rounded-md px-2 py-1',
          className,
        )}
      >
        <p className={cn('text-xs', textClassName)}>{duration}</p>
      </div>
      {isNew && (
        <div
          className={cn(
            'bg-custom-neutral-1 flex shrink-0 flex-row items-center gap-x-2 rounded-md px-2 py-1',
            className,
          )}
        >
          <p className={cn('text-xs font-semibold text-green-700', textClassName)}>{t('new')}</p>
        </div>
      )}
    </div>
  );
}
