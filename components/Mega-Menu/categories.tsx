import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CategorySection from "../Hero-Section/category-section";

export default function MenuCategories() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="hidden md:bg-black bg-[#21476b] hover:bg-[#feda00] md:flex justify-between items-center gap-2 p-2 text-sm space-x-2 text-white hover:text-black">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-align-justify ">
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          </span>
          <p className=" uppercase">Shop By Category</p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-down ">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </PopoverTrigger>
      <PopoverContent className="">
        <CategorySection />
      </PopoverContent>
    </Popover>
  );
}
