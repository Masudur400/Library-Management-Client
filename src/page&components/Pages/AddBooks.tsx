import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";

import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import toast, { Toaster } from 'react-hot-toast';
import { Textarea } from "@/components/ui/textarea";
import { useCreateBookMutation } from "@/redux/api/bookApi";



const AddBooks = () => {

    const [createBook] = useCreateBookMutation()

    const form = useForm()


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {


        const sentData = {
            ...data,
            copies: Number(data.copies)
        }

        const res = await createBook(sentData)
        if (res.data.success) {
            form.reset({
                title: "",
                author: "",
                genre: "",
                isbn: "",
                copies: 0,
                available: "",
                description: "",
            });
            toast.success('Add Book Successfully')
        } 
    }

    return (
        <div className="p-3 md:w-1/2 lg:w-1/3 mx-auto shadow-md m-2 rounded-md">
            <Toaster></Toaster>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                    {/* input field title */}
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
                    {/* input field Author */}
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
                    {/* input field Genre */}
                    <FormField
                        control={form.control}
                        name="genre"
                        render={({ field }) => (
                            <FormItem >
                                <FormLabel>Genre</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value} required>
                                    <FormControl className="w-full">
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
                    {/* input field ISBN */}
                    <FormField
                        control={form.control}
                        name="isbn"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>ISBN</FormLabel>
                                <FormControl>
                                    <Input placeholder="ISBN" {...field} required />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    {/* input field Copies */}
                    <FormField
                        control={form.control}
                        name="copies"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Copies</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="Copies" {...field} required />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    {/* input field Availability */}
                    <FormField
                        control={form.control}
                        name="available"
                        render={({ field }) => (
                            <FormItem >
                                <FormLabel>Availability</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value} required>
                                    <FormControl className="w-full">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a Availability" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {/* <SelectItem value="Limited">Limited</SelectItem> */}
                                        <SelectItem value="Available">Available</SelectItem>
                                    </SelectContent>
                                </Select>

                            </FormItem>
                        )}
                    />
                    {/* input field Description */}
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    {/* <Input placeholder="Description"  /> */}
                                    <Textarea placeholder="Type your message here." {...field} required />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    {/* submit button */}
                    <button type="submit" className="px-2 py-1 rounded-md text-center text-white bg-orange-500 w-full hover:shadow-orange-300 shadow-md">Submit</button>
                </form>
            </Form>
        </div>
    );
};

export default AddBooks;