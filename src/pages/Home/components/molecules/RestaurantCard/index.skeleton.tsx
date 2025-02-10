export default function RestaurantCardSkeleton() {
  return (
    <div className="relative flex w-full flex-col overflow-hidden rounded-2xl bg-white shadow-xl hover:cursor-pointer">
      <div className="aspect-[3/2] w-full animate-pulse bg-neutral-300" />
      <div className="flex w-full flex-col gap-y-2 p-4 md:gap-y-4 md:p-6">
        <div className="h-5 w-20 rounded-l-full rounded-r-full" />
        <div className="flex w-full animate-pulse gap-x-1.5 gap-y-1.5 md:gap-x-2">
          <div className="h-4.5 w-10 rounded-l-full rounded-r-full bg-neutral-200" />
          <div className="h-4.5 w-10 rounded-l-full rounded-r-full bg-neutral-200" />
        </div>
      </div>
    </div>
  );
}
