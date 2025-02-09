import { cn } from '@utils';
import React from 'react';

type ButtonVariants = 'outlined';

type ButtonProps = {
  'data-testid'?: string;
  variant?: ButtonVariants;
} & React.ComponentProps<'button'>;

const VARIANT_MAP: Record<ButtonVariants, string> = {
  outlined: 'border rounded-lg border-green-neon-300 hover:text-green-neon-900',
};

export default function Button({ 'data-testid': testId, variant = 'outlined', className, ...rest }: ButtonProps) {
  return (
    <button
      className={cn(VARIANT_MAP[variant], 'rounded-lg px-6 py-3 text-neutral-600 hover:cursor-pointer', className)}
      data-testid={`${testId}:container`}
      {...rest}
    ></button>
  );
}
