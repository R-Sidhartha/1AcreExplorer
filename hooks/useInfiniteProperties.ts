import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchProperties } from "@/lib/api";

export function useInfiniteScroll() {
  return useInfiniteQuery({
    queryKey: ["properties"],
    queryFn: ({ pageParam }) => fetchProperties(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.next ? pages.length + 1 : undefined,
  });
}
