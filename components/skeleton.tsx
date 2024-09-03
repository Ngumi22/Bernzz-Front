import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <section className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      <div className="p-2 md:p-5 lg:p-11 lg:basis-64 flex-grow text-center shadow-lg bg-gray-400 animate-pulse"></div>
      <div className="p-2 md:p-5 lg:p-11 lg:basis-64 flex-grow text-center shadow-lg bg-gray-400 animate-pulse"></div>
      <div className="p-2 md:p-5 lg:p-11 lg:basis-64 flex-grow text-center shadow-lg bg-gray-400 animate-pulse"></div>
      <div className="p-2 md:p-5 lg:p-11 lg:basis-64 flex-grow text-center shadow-lg bg-gray-400 animate-pulse"></div>
      <div className="p-2 md:p-5 lg:p-11 lg:basis-64 flex-grow text-center shadow-lg bg-gray-400 animate-pulse"></div>
      <div className="p-2 md:p-5 lg:p-11 lg:basis-64 flex-grow text-center shadow-lg bg-gray-400 animate-pulse"></div>
    </section>
  );
}
