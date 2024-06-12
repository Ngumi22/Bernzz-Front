"use client";

import Image from "next/image";

export default function HeroBanners() {
  return (
    <section className="grid grid-cols-2 gap-2 h-96 w-full">
      <div className="flex-shrink-0 relative overflow-hidden bg-orange-200 max-w-xs shadow-lg group">
        <div className="relative flex items-center justify-center group-hover:scale-110 transition-transform">
          <Image
            height={400}
            width={400}
            className="relative w-24"
            src="/sam.png"
            alt=""
          />
        </div>
        <div className="relative text-white">
          <span className="flex justify-center items-center text-lg">
            Indoor Indoor
          </span>
          <div className="flex justify-center">
            <span className="block text-sm">Peace Lily</span>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 relative overflow-hidden bg-blue-200 max-w-xs shadow-lg group">
        <div className="relative flex items-center justify-center group-hover:scale-110 transition-transform">
          <Image
            height={400}
            width={400}
            className="relative w-24"
            src="/sam.png"
            alt=""
          />
        </div>
        <div className="relative text-white">
          <span className="flex justify-center items-center text-lg">
            Indoor Indoor
          </span>
          <div className="flex justify-center">
            <span className="block text-sm">Peace Lily</span>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 relative overflow-hidden bg-[#B7B7A4] max-w-xs shadow-lg group">
        <div className="relative flex items-center justify-center group-hover:scale-110 transition-transform">
          <Image
            height={400}
            width={400}
            className="relative w-24"
            src="/sam.png"
            alt=""
          />
        </div>
        <div className="relative text-white">
          <span className="flex justify-center items-center text-lg">
            Indoor Indoor
          </span>
          <div className="flex justify-center">
            <span className="block text-sm">Peace Lily</span>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 relative overflow-hidden bg-[#DDBEA9] max-w-xs shadow-lg group">
        <div className="relative flex items-center justify-center group-hover:scale-110 transition-transform">
          <Image
            height={400}
            width={400}
            className="relative w-24"
            src="/sam.png"
            alt=""
          />
        </div>
        <div className="relative text-white">
          <span className="flex justify-center items-center text-lg">
            Indoor Indoor
          </span>
          <div className="flex justify-center">
            <span className="block text-sm">Peace Lily</span>
          </div>
        </div>
      </div>
    </section>
  );
}
