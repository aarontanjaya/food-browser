import { RestaurantPromotion } from '@app/services/restaurant';
import { cn } from '@app/utils';
import { Gift, Percent } from 'lucide-react';
import React from 'react';

type RestaurantPromotionFlagProps = {
  type: RestaurantPromotion;
  className?: string;
};

const PROMOTION_CONTENT_MAP: Record<RestaurantPromotion, React.ReactNode> = {
  [RestaurantPromotion.Gift]: <Gift className="h-4 w-4 text-white" />,
  [RestaurantPromotion.Discount]: <Percent className="h-4 w-4 text-white" />,
  [RestaurantPromotion.Bogo]: <p className="text-xs text-white">1+1</p>,
};

const PROMOTION_CONTENT_COLOR: Record<RestaurantPromotion, string> = {
  [RestaurantPromotion.Gift]: 'bg-blue-300',
  [RestaurantPromotion.Bogo]: 'bg-violet-500',
  [RestaurantPromotion.Discount]: 'bg-red-400',
};

export default function RestaurantPromotionFlag({ type, className }: RestaurantPromotionFlagProps) {
  return (
    <div
      className={cn(
        'rounded-d flex h-8 w-12 items-center justify-center rounded-tl-2xl rounded-br-2xl',
        PROMOTION_CONTENT_COLOR[type],
        className,
      )}
    >
      {PROMOTION_CONTENT_MAP[type]}
    </div>
  );
}
