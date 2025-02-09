import { cn } from '@app/utils';
import React from 'react';

type ChipProps = {
  'data-testid'?: string;
  isActive?: boolean;
} & React.ComponentProps<'button'>;

export default function Chip({ 'data-testid': testId, className, isActive, ...rest }: ChipProps) {
  return (
    <button
      data-active={isActive}
      className={cn(
        'data-[active=true]:bg-green-neon-100 data-[active=true]:text-green-neon-900 rounded-l-full rounded-r-full bg-white px-6 py-3 text-neutral-600 hover:cursor-pointer',
        className,
      )}
      data-testid={`${testId}:container`}
      {...rest}
    ></button>
  );
}
