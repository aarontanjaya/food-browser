import { cn } from '@app/utils';
import React from 'react';

type InputProps = {
  'data-testid'?: string;
  LeftElement?: React.ReactNode;
  inputClassName?: string;
} & React.ComponentProps<'input'>;

export default function Input({ 'data-testid': testId, LeftElement, inputClassName, className, ...rest }: InputProps) {
  return (
    <div className={cn(`flex flex-col`, className)}>
      <div
        data-testid={`${testId}:container`}
        className={cn(
          'flex flex-1 flex-row items-center gap-x-3 rounded-md border border-neutral-200 bg-white p-2',
          inputClassName,
        )}
      >
        {LeftElement}
        <input
          data-testid={`${testId}:input`}
          className={'w-full bg-transparent placeholder-neutral-500 outline-0'}
          {...rest}
        />
      </div>
    </div>
  );
}
