"use client";
import ReactPaginate from "react-paginate";
import useQueryLink from "@/utils/utilshook";
import { useRouter } from "next/navigation";

export default function Pagination({
  pages,
  currentPage,
}: {
  pages: number;
  currentPage: number;
}) {
  const router = useRouter();
  const { queryLink } = useQueryLink();

  // console.log(currentPage);
  // console.log("pages oooo", pages);

  const handlePageChange = ({ selected }: { selected: number }) => {
    const page = selected + 1;
    const link = queryLink("p", page.toString());
    router.push(link);
   
  };
  return (
    <ReactPaginate
      breakLabel="..."
      //   pageRangeDisplayed={4}
      pageCount={pages}
      forcePage={currentPage - 1}
      activeClassName="text-[#0202CB]"
      className="flex space-x-3"
      onPageChange={handlePageChange}
    />
  );
}
