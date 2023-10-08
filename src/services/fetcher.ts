"use client";
import axios from "axios";
import useSWR from "swr";
import { NftProps, CategoryProps } from "@/app/components";

async function fetcher<T>(url: string) {
  return await axios.get<T>(url);
}

export function useMarketPlace() {
  const hours_24 = 24 * 60 * 60 * 1000;

  const useData = <T>(
    url: string,
    query?: string | null,
    page?: string | null
  ) => {
    // /api/seacollections
    const { data, isLoading, error } = useSWR(
      `${url}?query=${query}${page && "&p=" + page}`,
      fetcher<T>,
      { refreshInterval: hours_24 }
    );

    return {
      data,
      isLoading,
      error,
    };
  };

  return {
    getData: useData,
  };
}
