import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <section className="mx-1 flex flex-row overflow-x-auto md:flex-wrap md:justify-center items-center gap-4 md:gap-6 my-2 md:my-8">
      <div className="p-2 md:p-5 lg:p-11 lg:basis-64 flex-grow text-center shadow-lg bg-gray-400 animate-pulse"></div>
      <div className="p-2 md:p-5 lg:p-11 lg:basis-64 flex-grow text-center shadow-lg bg-gray-400 animate-pulse"></div>
      <div className="p-2 md:p-5 lg:p-11 lg:basis-64 flex-grow text-center shadow-lg bg-gray-400 animate-pulse"></div>
      <div className="p-2 md:p-5 lg:p-11 lg:basis-64 flex-grow text-center shadow-lg bg-gray-400 animate-pulse"></div>
    </section>
  );
}
