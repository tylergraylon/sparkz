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
      page ? `${url}?query=${query}&p=${page}` : `${url}?query=${query}`,
      fetcher<T>,
      {
        refreshInterval: hours_24,
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      }
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
