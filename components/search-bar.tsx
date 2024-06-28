import { Button } from "./ui/button";

export default function SearchBar() {
  return (
    <div className="h-10">
      <input type="search" />
      <button type="submit">Search</button>
    </div>
  );
}
