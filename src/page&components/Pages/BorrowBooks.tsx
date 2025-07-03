import { selectBorrows } from "@/redux/features/borrowSlice";
import { useAppSelector } from "@/redux/hook";
import SingleBorrowBook from "./components/SingleBorrowBook";


const BorrowBooks = () => {

    const borrows = useAppSelector(selectBorrows)

    return (
        <div>
            <p className="text-2xl mb-2 font-medium">Borrow Summary</p>
            <p className="text-lg font-medium">Total <span className="text-red-500">({borrows.length})</span> books you have borrowed</p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    borrows.map(borrow => <SingleBorrowBook key={borrow.id} borrow={borrow} ></SingleBorrowBook>)
                }
            </div>
        </div>
    );
};

export default BorrowBooks;