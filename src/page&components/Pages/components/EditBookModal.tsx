import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import { FiEdit } from "react-icons/fi";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "@/redux/hook";
import { updateBook } from "@/redux/features/bookSlice";
import type { IBook } from "@/redux/interfaces/interface";
import { useState } from "react";





const EditBookModal = ({ book }: { book: IBook }) => {
    const dispatch = useAppDispatch();
    const [open, setOpen] = useState(false);

    const form = useForm<FieldValues>({
        defaultValues: {
            id: book.id,
            Title: book.Title,
            Author: book.Author,
            Genre: book.Genre,
            ISBN: book.ISBN,
            Copies: book.Copies,
            Availability: book.Availability,
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const res = await dispatch(updateBook(data as IBook));
        setOpen(false);
        console.log(res);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className="bg-blue-500 w-fit h-fit px-3 py-1 rounded-md hover:shadow-md hover:shadow-blue-500 text-white text-xl">
                    <FiEdit />
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                        <div className="grid grid-cols-2 gap-2">
                            {/* Title */}
                            <FormField
                                control={form.control}
                                name="Title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter Book Title" {...field} required />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            {/* Author */}
                            <FormField
                                control={form.control}
                                name="Author"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Author</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter Author Name" {...field} required />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            {/* Genre */}
                            <FormField
                                control={form.control}
                                name="Genre"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Genre</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter Genre" {...field} required />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            {/* ISBN */}
                            <FormField
                                control={form.control}
                                name="ISBN"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>ISBN</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter ISBN" {...field} required />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            {/* Copies */}
                            <FormField
                                control={form.control}
                                name="Copies"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Copies</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="Enter Copies" {...field} required />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            {/* Availability */}
                            <FormField
                                control={form.control}
                                name="Availability"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Availability</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value} required>
                                            <FormControl className="w-full">
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select Availability" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Available">Available</SelectItem>
                                                <SelectItem value="Limited">Limited</SelectItem>
                                            </SelectContent>
                                        </Select>
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

export default EditBookModal;
