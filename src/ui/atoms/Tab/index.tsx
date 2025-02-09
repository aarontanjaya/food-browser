import { cn } from '@app/utils';
import React from 'react';

type TabProps = {
  'data-testid'?: string;
  isActive?: boolean;
} & React.ComponentProps<'button'>;

export default function Tab({ 'data-testid': testId, className, isActive, ...rest }: TabProps) {
  return (
    <button
      data-active={isActive}
      className={cn(
        'data-[active=true]:bg-green-neon-100 data-[active=true]:text-green-neon-900 rounded-lg bg-white px-4 py-3 text-neutral-600 hover:cursor-pointer',
        className,
      )}
      data-testid={`${testId}:container`}
      {...rest}
    ></button>
  );
}
