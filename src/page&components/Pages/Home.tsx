import { useGetBooksQuery } from "@/redux/api/bookApi";
import SingleBookCard from "./components/SingleBookCard";

const Home = () => {
  const { data: response = [], isLoading, error } = useGetBooksQuery(undefined);

   
  const books = response?.data || []; 


  if (isLoading) return <p>Loading books...</p>;
  if (error) return <p>Failed to fetch books.</p>;

  return (
    <div>
      <p className="text-lg font-medium my-10">Total : ({books.length}) Books</p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {Array.isArray(books) && books.map((book) => (
          <SingleBookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
