import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "@/redux/hook";
import type { IBook, IBorrow } from "@/redux/interfaces/interface";
import { useState } from "react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { addBorrow } from "@/redux/features/borrowSlice";
import toast, { Toaster } from 'react-hot-toast';




interface IProps {
    book: IBook;
}

const BorrowBookModal = ({ book }: IProps) => {

    const form = useForm()
    const dispatch = useAppDispatch();
    const [open, setOpen] = useState(false);

    const onSubmit: SubmitHandler<FieldValues> =async (data) => {
        const borrowData = { ...data, bookId: book.id,bookTitle:book.Title, bookAuthor:book.Author,genre:book.Genre }
        const available = book.Copies; 

        if (data.quantity > 5) {
            toast.error("You can’t borrow more than 5 books at a time.");
            return;
        }
        if (data.quantity > available) {
            toast.error(`Only ${available} copies are available!`);
            return;
        }


        const res = await dispatch(addBorrow(borrowData as IBorrow));
        toast.success('Borrow Successfully') 
        form.reset({
            buyerName: '',
            quantity: 0
        })
        setOpen(false);

        console.log(res);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <Toaster></Toaster>
            <DialogTitle></DialogTitle>
            <DialogTrigger asChild>
                <button className="bg-green-500 text-white text-sm font-medium px-2 py-1 rounded-md">Buy</button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4"> 
                        <div className="grid grid-cols-2 gap-2">
                            {/* Title */}
                            <FormField
                                control={form.control}
                                name="buyerName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter Buyer Name" {...field} required />
                                        </FormControl>
                                    </FormItem>
                                )}
                            /> 
                            {/* Copies */}
                            <FormField
                                control={form.control}
                                name="quantity"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Copies</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="Enter Quantity" {...field} required />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="px-2 py-1 rounded-md text-center text-white bg-orange-500 w-full hover:shadow-orange-300 shadow-md"
                        >
                            Submit
                        </button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default BorrowBookModal;