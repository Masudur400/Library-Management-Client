import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils";
import { deleteBook } from "@/redux/features/bookSlice";
import type { IBook } from "@/redux/interfaces/interface";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { FiEdit } from "react-icons/fi";
import { SlEye } from "react-icons/sl";


interface IProps {
    book: IBook;
}

const SingleBookCard = ({ book }: IProps) => {

    const { id, Title, Author, Genre, ISBN, Copies, Availability, } = book
    const dispatch = useDispatch()

    //   id : 1,
    //         Title: "To Kill a Mockingbird",
    //         Author: "Harper Lee",
    //         Genre: "Fiction",
    //         ISBN: "9780061120084",
    //         Copies: 5,
    //         Availability: "Available", 

    return (
        <div className="">
            <Card className=" mb-5 flex flex-col h-full">
                <CardContent className="text-sm space-y-2 h-full">
                    <p className="font-medium ">Title : {Title}</p>
                    <p>Author : {Author}</p>
                    {/* <p>Genre : {Genre}</p>
                    <p>ISBN : {ISBN}</p>
                    <p>Copies : {Copies}</p> */}
                    <p>Availability : <span className={cn({
                        'text-green-500': Availability === 'Available',
                        'text-red-500': Availability === 'Limited',
                    })}>{Availability}</span></p>
                </CardContent>


                <CardFooter className="flex justify-between items-center flex-grow ">
                    {/* <button className="bg-red-500 w-fit h-fit px-3 py-1 rounded-md hover:shadow-md text-sm">Edit</button> */}
                    <button className="bg-green-500 w-fit h-fit px-3 py-1 rounded-md hover:shadow-md hover:shadow-green-500   text-white text-xl"><SlEye /></button>
                    {/* edit button  */}
                    <button className="bg-blue-500 w-fit h-fit px-3 py-1 rounded-md hover:shadow-md hover:shadow-blue-500   text-white text-xl"><FiEdit /></button>
                    {/* delete button  */}
                    <button onClick={() => dispatch(deleteBook(id))} className="bg-red-500 w-fit h-fit px-3 py-1 rounded-md hover:shadow-md hover:shadow-red-500   text-white text-xl"><MdOutlineDeleteForever /></button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default SingleBookCard;