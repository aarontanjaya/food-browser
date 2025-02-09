import { FoodPromotion } from '@app/services/food';
import { cn } from '@app/utils';
import { Gift, Percent } from 'lucide-react';
import React from 'react';

type FoodPromotionFlagProps = {
  type: FoodPromotion;
  className?: string;
};

const PROMOTION_CONTENT_MAP: Record<FoodPromotion, React.ReactNode> = {
  [FoodPromotion.Gift]: <Gift className="h-4 w-4 text-white" />,
  [FoodPromotion.Discount]: <Percent className="h-4 w-4 text-white" />,
  [FoodPromotion.Bogo]: <p className="text-xs text-white">1+1</p>,
};

const PROMOTION_CONTENT_COLOR: Record<FoodPromotion, string> = {
  [FoodPromotion.Gift]: 'bg-blue-300',
  [FoodPromotion.Bogo]: 'bg-violet-500',
  [FoodPromotion.Discount]: 'bg-red-400',
};

export default function FoodPromotionFlag({ type, className }: FoodPromotionFlagProps) {
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
