import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"; 
import type { IBook } from "@/redux/interfaces/interface";
import { MdOutlineDeleteForever } from "react-icons/md"; 
import { SlEye } from "react-icons/sl";
import EditBookModal from "./EditBookModal";
import { Link } from "react-router";
import toast, { Toaster } from 'react-hot-toast';
import { useDeleteBookMutation } from "@/redux/api/bookApi";
import img from "/bookimage.jpg"


interface IProps {
    book: IBook;
}

const SingleBookCard = ({ book }: IProps) => {

    const { _id, title, author, available,copies } = book 

    const [deleteBook] = useDeleteBookMutation();

    const deleteData = async (id: string) => {
        try {
           const res= await deleteBook(id).unwrap();
           if(res.success){
            toast.success('Deleted successfully')
           } 
        } catch (err) {
            console.error("Delete failed:", err);
        }
        
    }

    return (
        <div className="">
            <Toaster></Toaster>
            <Card className=" mb-5 flex flex-col h-full">
                <CardContent className="text-sm space-y-2 h-full">
                    <img src={img} alt="img" className="mb-1" />
                    <p className="font-medium ">Title : {title}</p>
                    <p>Author : {author}</p>
                    <p>Copies : <span className="text-red-500">{copies}</span></p>
                    <p>Availability : <span className={cn({
                        'text-green-500': available === 'Available',
                        'text-red-500': available === 'Limited',
                    })}>{available}</span></p>
                </CardContent>
                <CardFooter className="flex justify-between items-center flex-grow ">
                    <Link to={`/book/${_id}`} className="bg-green-500 w-fit h-fit px-3 py-1 rounded-md hover:shadow-md hover:shadow-green-500   text-white text-xl"><SlEye /></Link>
                    {/* edit button  */}
                    <EditBookModal book={book} />
                    {/* delete button  */}
                    <button onClick={() => deleteData(_id)} className="bg-red-500 w-fit h-fit px-3 py-1 rounded-md hover:shadow-md hover:shadow-red-500   text-white text-xl"><MdOutlineDeleteForever /></button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default SingleBookCard;