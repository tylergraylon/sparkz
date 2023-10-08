"use client";
import { Loader, CategoryCard, CategoryProps } from ".";
import { useMarketPlace } from "@/services/fetcher";
import useQueryLink from "@/utils/utilshook";
import { memo } from "react";

export default memo(function Categories() {
  const { getData } = useMarketPlace();
  const { queryLink } = useQueryLink(true);
  const { data: categories, isLoading: isCatLoading } = getData<{
    data: Array<Omit<CategoryProps, "link">>;
  }>("/api/categories");
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 mx-5 sm:mx-8 gap-7">
      {isCatLoading
        ? Array.from({ length: 4 }, (_, i) => <Loader key={i} />)
        : categories && categories.data.data.length > 0
        ? categories.data.data.map((cat, i) => (
            <CategoryCard
              {...cat}
              link={queryLink("filter", cat.category.toLowerCase())}
              key={i}
            />
          ))
        : Array.from({ length: 3 }, (_, i) => <Loader key={i} />)}
    </section>
  );
});
