"use client";
import { Loader, CategoryCard, CategoryProps } from ".";
import { useMarketPlace } from "@/services/fetcher";
import useUtils from "@/utils/utilshook";
import { memo } from "react";

export default memo(function Categories() {
  const { getData } = useMarketPlace();
  const { queryLink } = useUtils();
  const { data: categories, isLoading: isCatLoading } =
    getData<Omit<CategoryProps, "link">>("/api/categories");
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 mx-5 sm:mx-8 gap-7">
      {isCatLoading
        ? Array.from({ length: 4 }, (_, i) => <Loader key={i} />)
        : categories && categories.data
        ? categories.data.data.map((cat, i) => (
            <CategoryCard
              {...cat}
              link={queryLink("filter", cat.category.toLowerCase())}
              key={i}
            />
          ))
        : Array.from({ length: 1 }, (_, i) => <Loader key={i} />)}
    </section>
  );
});
