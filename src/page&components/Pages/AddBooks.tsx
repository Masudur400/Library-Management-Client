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
import { useAppDispatch } from "@/redux/hook";
import { addBook } from "@/redux/features/bookSlice";
import type { IBook } from "@/redux/interfaces/interface";



const AddBooks = () => {


    const dispatch = useAppDispatch()

    const form = useForm()

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const res = await dispatch(addBook(data as IBook))
        console.log('res', res);
    }





    //  id: 2,
    //         Title: "1984",
    //         Author: "George Orwell",
    //         Genre: "Dystopian",
    //         ISBN: "9780451524935",
    //         Copies: 2,
    //         Availability: "Limited", 

    return (
        <div className="p-3 md:w-1/2 lg:w-1/3 mx-auto shadow-md m-2 rounded-md">

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                    {/* input field 1 */}
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
                    {/* input field 2 */}
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
                    {/* input field 3 */}
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
                    {/* input field 4 */}
                    <FormField
                        control={form.control}
                        name="ISBN"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>ISBN</FormLabel>
                                <FormControl>
                                    <Input placeholder="ISBN" {...field} required />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    {/* input field 5 */}
                    <FormField
                        control={form.control}
                        name="Copies"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Copies</FormLabel>
                                <FormControl>
                                    <Input placeholder="Copies" {...field} required />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    {/* input field 6 */}
                    <FormField
                        control={form.control}
                        name="Availability"
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
                                        <SelectItem value="Limited">Limited</SelectItem>
                                        <SelectItem value="Available">Available</SelectItem>
                                    </SelectContent>
                                </Select>

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