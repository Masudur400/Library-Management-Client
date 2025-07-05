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
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast"; 
import type { IBook, IBorrow } from "@/redux/interfaces/interface";
import { useCreateBorrowMutation } from "@/redux/api/borrowApi";

interface IProps {
  book: IBook;
}

const BorrowBookModal = ({ book }: IProps) => {
  const [open, setOpen] = useState(false);

  const form = useForm({
    defaultValues: {
      buyerName: "",
      quantity: 1,
    },
  });

  const [createBorrow, { isLoading }] = useCreateBorrowMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const quantity = Number(data.quantity);
    const available = book.copies || 0;

    if (quantity > 5) {
      toast.error("You can’t borrow more than 5 books at a time.");
      return;
    }

    if (quantity > available) {
      toast.error(`Only ${available} copies are available!`);
      return;
    }

    const borrowData: IBorrow = {
      bookId: book._id,
      buyerName: data.buyerName,
      quantity,
      bookTitle: book.title,
      bookAuthor: book.author,
      genre: book.genre,
      description: book.description || "",
    };

    try {
      await createBorrow(borrowData).unwrap();
      toast.success("Book borrowed successfully");
      form.reset();
      setOpen(false);
    } catch (error) { 
        console.log(error);
    }
  };

  return (
    <>
      <Toaster />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-md">
            Borrow
          </button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {/* Buyer Name */}
                <FormField
                  control={form.control}
                  name="buyerName"
                  rules={{ required: "Buyer Name is required" }}
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Buyer Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Buyer Name" {...field} />
                      </FormControl>
                      {fieldState.error && (
                        <p className="text-red-500 text-sm mt-1">
                          {fieldState.error.message}
                        </p>
                      )}
                    </FormItem>
                  )}
                />

                {/* Quantity */}
                <FormField
                  control={form.control}
                  name="quantity"
                  rules={{
                    required: "Quantity is required",
                    min: { value: 1, message: "Minimum quantity is 1" },
                  }}
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Quantity</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter Quantity"
                          {...field}
                          min={1}
                          max={5}
                        />
                      </FormControl>
                      {fieldState.error && (
                        <p className="text-red-500 text-sm mt-1">
                          {fieldState.error.message}
                        </p>
                      )}
                    </FormItem>
                  )}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 disabled:opacity-50"
              >
                {isLoading ? "Borrowing..." : "Submit"}
              </button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BorrowBookModal;
