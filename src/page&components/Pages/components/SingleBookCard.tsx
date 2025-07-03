import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils";
import { deleteBook } from "@/redux/features/bookSlice";
import type { IBook } from "@/redux/interfaces/interface";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { SlEye } from "react-icons/sl";
import EditBookModal from "./EditBookModal";
import { Link } from "react-router";
import toast, { Toaster } from 'react-hot-toast';


interface IProps {
    book: IBook;
}

const SingleBookCard = ({ book }: IProps) => {

    const { id, Title, Author, Availability, } = book
    const dispatch = useDispatch()

    const deleteData = async (id : string) => {
       const res = await dispatch(deleteBook(id))
        toast.success('Book Deleted Successfully')

        console.log(res);
    } 

    return (
        <div className="">
            <Toaster></Toaster>
            <Card className=" mb-5 flex flex-col h-full">
                <CardContent className="text-sm space-y-2 h-full">
                    <p className="font-medium ">Title : {Title}</p>
                    <p>Author : {Author}</p> 
                    <p>Availability : <span className={cn({
                        'text-green-500': Availability === 'Available',
                        'text-red-500': Availability === 'Limited',
                    })}>{Availability}</span></p>
                </CardContent> 
                <CardFooter className="flex justify-between items-center flex-grow "> 
                    <Link to={`/book/${id}`} className="bg-green-500 w-fit h-fit px-3 py-1 rounded-md hover:shadow-md hover:shadow-green-500   text-white text-xl"><SlEye /></Link>
                    {/* edit button  */}
                    <EditBookModal book={book} />
                    {/* delete button  */}
                    <button onClick={() =>deleteData(id) } className="bg-red-500 w-fit h-fit px-3 py-1 rounded-md hover:shadow-md hover:shadow-red-500   text-white text-xl"><MdOutlineDeleteForever /></button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default SingleBookCard;