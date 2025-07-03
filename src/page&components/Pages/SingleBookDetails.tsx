
import { useAppSelector } from "@/redux/hook";
import { selectSingleBook } from "@/redux/features/bookSlice";
import {useNavigate, useParams } from "react-router";
import { IoMdArrowRoundBack } from "react-icons/io";
import BorrowBookModal from "./components/BorrowBookModal";


const SingleBookDetails = () => {


    const { id } = useParams();
    const navigate = useNavigate()

    const book = useAppSelector(selectSingleBook(id as string));

    if (!book) {
        return <p className="text-center text-red-500">Book not found!</p>;
    }


    return (
        <div className="max-w-xl mx-auto mt-10 p-5 shadow-md border rounded-md flex justify-between">
            <div>
                <h1 className="text-2xl font-bold mb-4">{book.Title}</h1>
                <p><strong>Author:</strong> {book.Author}</p>
                <p><strong>Genre:</strong> {book.Genre}</p>
                <p><strong>ISBN:</strong> {book.ISBN}</p>
                <p><strong>Copies:</strong> {book.Copies}</p>
                <p>
                    <strong>Availability:</strong>{" "}
                    <span className={book.Availability === "Available" ? "text-green-500" : "text-red-500"}>
                        {book.Availability}
                    </span>
                </p>
            </div>
            <div className="flex flex-col justify-between items-center">
                <button onClick={() => navigate(-1)} className="h-5 w-5 rounded-full bg-red-500 text-white text-xl">
                    <IoMdArrowRoundBack />
                </button>
                <BorrowBookModal book={book}></BorrowBookModal>
            </div>
        </div>
    );
};

export default SingleBookDetails;