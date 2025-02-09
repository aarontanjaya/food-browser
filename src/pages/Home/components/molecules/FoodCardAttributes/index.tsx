import { cn } from '@utils';
import { Star } from 'lucide-react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

type FoodCardAttributesProps = {
  rating: number;
  duration: string;
  isNew: boolean;
  className?: string;
  textClassName?: string;
  iconClassName?: string;
};

export default function FoodCardAttributes({
  rating,
  duration,
  className,
  isNew,
  textClassName,
  iconClassName,
}: FoodCardAttributesProps) {
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
    <div className="flex flex-row items-center gap-x-2">
      <div className={cn('bg-custom-neutral-1 flex flex-row items-center gap-x-2 rounded-md px-4 py-2', className)}>
        <Star className={cn('h-5 w-5 fill-neutral-600 text-neutral-600', iconClassName)} />
        <p className={cn('font-semibold', textClassName)}>{formattedRating}</p>
      </div>
      <div className={cn('bg-custom-neutral-1 flex flex-row items-center gap-x-2 rounded-md px-4 py-2', className)}>
        <p className={cn('font-semibold', textClassName)}>{duration}</p>
      </div>
      {isNew && (
        <div className={cn('bg-custom-neutral-1 flex flex-row items-center gap-x-2 rounded-md px-4 py-2', className)}>
          <p className={cn('font-semibold text-green-700', textClassName)}>{t('new')}</p>
        </div>
      )}
    </div>
  );
}
