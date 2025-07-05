import { useNavigate, useParams } from "react-router";
import { IoMdArrowRoundBack } from "react-icons/io";
import BorrowBookModal from "./components/BorrowBookModal"; 
import { useGetBookByIdQuery } from "@/redux/api/bookApi";

const SingleBookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetBookByIdQuery(id!);
  const book = data?.data;

  if (isLoading) return <p>Loading...</p>;
  if (error || !book) return <p className="text-center text-red-500">Book not found!</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-5 shadow-md border rounded-md flex justify-between">
      <div>
        <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Genre:</strong> {book.genre}</p>
        <p><strong>ISBN:</strong> {book.isbn}</p>
        <p><strong>Copies:</strong> {book.copies}</p>
        <p>
          <strong>Availability:</strong>{" "}
          <span className={book.available === "Available" ? "text-green-500" : "text-red-500"}>
            {book.available}
          </span>
        </p>
        <p>{book.description}</p>
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
