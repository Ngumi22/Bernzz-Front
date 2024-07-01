import CategorySection from "./category-section";
import HeroBanners from "./hero-banners";
import HeroCarousel from "./hero-carousel";

export default function Hero() {
  return (
    <section className="lg:flex justify-between items-center gap-2">
      <div className="w-full lg:w-[20%] hidden lg:block">
        <CategorySection />
      </div>
      <div className="w-full lg:w-[55%]">
        <HeroCarousel />
      </div>
      <div className="w-full lg:w-[30%] hidden lg:block">
        <HeroBanners />
      </div>
    </section>
  );
}
