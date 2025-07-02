import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl, 
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
 
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



const AddBooks = () => {
    const form = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }





    //  id: 2,
    //         Title: "1984",
    //         Author: "George Orwell",
    //         Genre: "Dystopian",
    //         ISBN: "9780451524935",
    //         Copies: 2,
    //         Availability: "Limited", 

    return (
        <div>

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
                                    <Input placeholder="Enter Book Title" {...field} />
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
                                    <Input placeholder="Enter Author Name" {...field} />
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
                                    <Input placeholder="Enter Genre" {...field} />
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
                                    <Input placeholder="ISBN" {...field} />
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
                                    <Input placeholder="Copies" {...field} />
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
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    );
};

export default AddBooks;