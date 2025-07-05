import type { IBorrow } from "@/redux/interfaces/interface";
import SingleBorrowBook from "./components/SingleBorrowBook";
import { useGetBorrowsQuery } from "@/redux/api/borrowApi";

const BorrowBooks = () => {
  const { data, isLoading, error } = useGetBorrowsQuery(undefined); 
  const borrows  = data?.data || []; 

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <div>
      <p className="text-2xl mb-2 font-medium">Borrow Summary</p>
      <p className="text-lg font-medium">
        Total <span className="text-red-500">({borrows.length})</span> books you have borrowed
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {borrows.map((borrow : IBorrow) => (
          <SingleBorrowBook key={borrow._id} borrow={borrow} />
        ))}
      </div>
    </div>
  );
};

export default BorrowBooks;
