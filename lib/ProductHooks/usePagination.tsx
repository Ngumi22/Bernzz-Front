"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Custom hook for handling pagination logic
export const usePagination = (initialPage = 1) => {
  const router = useRouter();
  const queryPage =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("page")
      : null;
  const startingPage = queryPage ? parseInt(queryPage) : initialPage;

  const [page, setPage] = useState(startingPage);
  const [availablePages, setAvailablePages] = useState(new Set([1])); // Using Set to avoid duplicates

  // Updates the URL when the page changes and track available pages
  useEffect(() => {
    router.replace(`?page=${page}`);

    // Add the current page to availablePages, ensuring no duplicates
    setAvailablePages((prevPages) => new Set(prevPages).add(page));
  }, [page, router]);

  // Returns state and setter functions, converting the Set to an array for rendering
  return {
    page,
    availablePages: Array.from(availablePages), // Converts Set to array for use in JSX
    setPage,
  };
};
