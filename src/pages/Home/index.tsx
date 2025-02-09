import { Input } from '@ui';
import { Search } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-custom-neutral-1 flex min-h-screen w-screen flex-col">
      <Input
        className="bg-custom-neutral-1 w-full max-w-[20rem]"
        LeftElement={<Search className="h-5 w-5 text-neutral-400" />}
        placeholder="Enter restaurant name"
      />
    </div>
  );
}
