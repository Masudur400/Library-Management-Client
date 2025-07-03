import { selectBorrows } from "@/redux/features/borrowSlice";
import { useAppSelector } from "@/redux/hook";

 
const BorrowBooks = () => {

     const borrows = useAppSelector(selectBorrows)

    return (
        <div>
            <p className="text-2xl mb-2 font-medium">Borrow Summary</p>
            <p className="text-lg font-medium">Total <span className="text-red-500">({borrows.length})</span> books you have borrowed</p>
            <div> 
                {
                borrows.map(borrow => <p>{borrow.buyerName}</p>)
            }
            </div>
        </div>
    );
};

export default BorrowBooks;