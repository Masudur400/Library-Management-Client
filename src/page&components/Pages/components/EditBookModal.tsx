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
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useUpdateBookMutation } from "@/redux/api/bookApi";
import type { IBook } from "@/redux/interfaces/interface";
import toast, { Toaster } from 'react-hot-toast';

const EditBookModal = ({ book }: { book: IBook }) => {
    const [open, setOpen] = useState(false);

    const form = useForm<FieldValues>({
        defaultValues: {
            id: book._id,
            title: book.title,
            author: book.author,
            genre: book.genre,
            isbn: book.isbn,
            copies: book.copies,
            available: book.available,
            description: book.description,
        },
    });

    const [updateBook] = useUpdateBookMutation();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const { id, ...updatedData } = data;


            const res = await updateBook({ id, updatedData }).unwrap();
            if (res.success) {
                toast.success('Data updated successfully')
                setOpen(false);
            }


        } catch (err) {
            console.error("Update failed:", err);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <Toaster></Toaster>
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
                                name="title"
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
                                name="author"
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
                                name="genre"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Genre</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value} required>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a Genre" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="FICTION">FICTION</SelectItem>
                                                <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                                                <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                                                <SelectItem value="HISTORY">HISTORY</SelectItem>
                                                <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                                                <SelectItem value="FANTASY">FANTASY</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                            {/* ISBN */}
                            <FormField
                                control={form.control}
                                name="isbn"
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
                                name="copies"
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
                                name="available"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Availability</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value} required>
                                            <FormControl>
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

                        {/* Description */}
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Enter book description" {...field} required />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

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
