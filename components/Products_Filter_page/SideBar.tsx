import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "../ui/card";

export default function FiltersSideBar() {
  return (
    <Card className="col-span-1 px-3 h-auto">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <div className="mb-6">
        <h3 className="font-medium">Categories</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <Checkbox id="cat1" />
            <label htmlFor="cat1" className="ml-2">
              Laptops
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="cat2" />
            <label htmlFor="cat2" className="ml-2">
              Smartphones
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="cat3" />
            <label htmlFor="cat3" className="ml-2">
              Tablets
            </label>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="font-medium">Brand</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <Checkbox id="brand1" />
            <label htmlFor="brand1" className="ml-2">
              Apple
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="brand2" />
            <label htmlFor="brand2" className="ml-2">
              Samsung
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="brand3" />
            <label htmlFor="brand3" className="ml-2">
              Dell
            </label>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="font-medium">Color</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <Checkbox id="color1" />
            <label htmlFor="color1" className="ml-2">
              Black
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="color2" />
            <label htmlFor="color2" className="ml-2">
              White
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="color3" />
            <label htmlFor="color3" className="ml-2">
              Silver
            </label>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="font-medium">Processor</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <Checkbox id="proc1" />
            <label htmlFor="proc1" className="ml-2">
              Intel
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="proc2" />
            <label htmlFor="proc2" className="ml-2">
              AMD
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="proc3" />
            <label htmlFor="proc3" className="ml-2">
              Apple M1
            </label>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="font-medium">Price</h3>
        <div className="flex items-center">
          <Input type="range" min="0" max="1000" className="w-full" />
        </div>
      </div>
      <div className="mb-6">
        <h3 className="font-medium">Sort By</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <Checkbox id="sort1" />
            <label htmlFor="sort1" className="ml-2">
              Alphabetically
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="sort2" />
            <label htmlFor="sort2" className="ml-2">
              Price: Low to High
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="sort3" />
            <label htmlFor="sort3" className="ml-2">
              Price: High to Low
            </label>
          </div>
        </div>
      </div>
    </Card>
  );
}
