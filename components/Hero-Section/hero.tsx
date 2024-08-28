import CategorySection from "./category-section";
import HeroBanners from "./hero-banners";
import HeroCarousel from "./hero-carousel";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
      <div className="col-span-2">
        <HeroCarousel />
      </div>
      <div className="col-span-1">
        <HeroBanners />
      </div>
    </section>
  );
}
