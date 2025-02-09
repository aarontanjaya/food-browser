import Chip from '@app/ui/atoms/Chip';
import Tab from '@app/ui/atoms/Tab';
import { cn } from '@utils';

type SelectionsProps = {
  items: SelectionItem[];
  value: string | number;
  onChange: (value: string | number) => void;
  className?: string;
  itemClassName?: string;
};

type SelectionItem = {
  label: React.ReactNode;
  value: string | number;
};

export default function Selections({ items, value, onChange, className }: SelectionsProps) {
  return (
    <div className={cn('scrollbar-hidden flex flex-row overflow-x-auto', className)}>
      <div className="hidden flex-row md:flex">
        {items.map((item) => (
          <Tab
            className={cn(
              'border-green-neon-300 hidden rounded-none border border-r border-l-0 first:rounded-l-lg first:border-l last:rounded-r-lg md:block',
            )}
            key={item.value}
            value={item.value}
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
            key={item.value}
            value={item.value}
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
