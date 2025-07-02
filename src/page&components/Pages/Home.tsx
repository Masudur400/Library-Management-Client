import { selectBooks } from "@/redux/features/bookSlice";
import { useAppSelector } from "@/redux/hook";
import SingleBookCard from "./components/singleBookCard";





const Home = () => {

    const books = useAppSelector(selectBooks)
    // console.log(books);

    return (
        <div>
            <p className="text-lg font-medium my-10">Total : ({books.length}) Books</p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">

                {
                    books.map(book => <SingleBookCard key={book.id} book={book}></SingleBookCard>)
                }
            </div>
        </div>
    );
};

export default Home;