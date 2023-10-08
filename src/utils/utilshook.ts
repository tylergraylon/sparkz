"use client";
import { useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function useQueryLink(cat: boolean = false) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      let params: URLSearchParams;
      if (cat) {
        params = new URLSearchParams();
      } else {
        params = new URLSearchParams(searchParams);
      }

      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const queryLink = (name: string, value: string) =>
    pathname + "?" + createQueryString(name, value);

  return { queryLink };
}
