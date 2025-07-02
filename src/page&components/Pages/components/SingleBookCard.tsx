import {
    Card, 
    CardContent,
    CardFooter, 
} from "@/components/ui/card"
import { cn } from "@/lib/utils";
import type { IBook } from "@/redux/interfaces/interface";
import { MdOutlineDeleteForever } from "react-icons/md";


interface IProps {
    book: IBook;
}

const SingleBookCard = ({ book }: IProps) => {

    const { Title, Author, Genre, ISBN, Copies, Availability, } = book

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
                        'text-green-500' : Availability === 'Available',
                        'text-red-500' : Availability === 'Limited',
                    })}>{Availability}</span></p>
                </CardContent>


                <CardFooter className="flex justify-between items-center flex-grow ">
                    {/* <button className="bg-red-500 w-fit h-fit px-3 py-1 rounded-md hover:shadow-md text-sm">Edit</button> */}
                    <button className="bg-green-500 w-fit h-fit px-3 py-1 rounded-md hover:shadow-md hover:shadow-green-500  text-sm text-white font-medium">Details</button>
                    <button className="bg-red-500 w-fit h-fit px-3 py-1 rounded-md hover:shadow-md hover:shadow-red-500   text-white text-xl"><MdOutlineDeleteForever /></button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default SingleBookCard;