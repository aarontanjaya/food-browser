import Chip from '@app/ui/atoms/Chip';
import Tab from '@app/ui/atoms/Tab';
import { cn } from '@utils';

type SelectionsProps<T> = {
  items: SelectionItem<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
  itemClassName?: string;
};

type SelectionItem<T> = {
  label: React.ReactNode;
  key: string;
  value: T;
};

export default function Selections<T>({ items, value, onChange, className }: SelectionsProps<T>) {
  return (
    <div className={cn('scrollbar-hidden flex flex-row overflow-x-auto', className)}>
      <div className="hidden flex-row md:flex">
        {items.map((item) => (
          <Tab
            className={cn(
              'border-green-neon-300 hidden rounded-none border border-r border-l-0 first:rounded-l-lg first:border-l last:rounded-r-lg md:block',
            )}
            key={item.key}
            isActive={item.value === value}
            onClick={() => onChange(item.value)}
          >
            {item.label}
          </Tab>
        ))}
      </div>
      <div className="flex flex-row gap-x-3 md:hidden">
        {items.map((item) => (
          <Chip
            className={cn('border-green-neon-300 line-clamp-1 shrink-0 text-nowrap md:hidden')}
            key={item.key}
            isActive={item.value === value}
            onClick={() => onChange(item.value)}
          >
            {item.label}
          </Chip>
        ))}
      </div>
    </div>
  );
}
