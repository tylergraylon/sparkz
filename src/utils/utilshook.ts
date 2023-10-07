"use client";
import { useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function useUtils() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const queryLink = (name: string, value: string) =>
    pathname + "?" + createQueryString(name, value);

  return { queryLink };
}
