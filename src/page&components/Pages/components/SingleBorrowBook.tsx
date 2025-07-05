import { Card, CardContent } from "@/components/ui/card";
import type { IBorrow } from "@/redux/interfaces/interface";



interface IProps {
    borrow: IBorrow;
}

const SingleBorrowBook = ({ borrow }: IProps) => {

    const { buyerName, quantity, bookTitle, bookAuthor, genre,description } = borrow

    return (
        <Card className="mb-5 flex flex-col h-full">
            <CardContent className="text-sm space-y-2 h-full">
                <div>
                    <h1 className="text-xl font-medium mb-2"> {bookTitle}</h1>
                    <h1 className="mb-1"><strong>BuyerName : {buyerName}</strong></h1>
                    <p><strong>Author:</strong> {bookAuthor}</p>
                    <p><strong>Genre:</strong> {genre}</p>
                    <p><strong>Quantity:</strong> {quantity}</p>
                    <p className="mt-2">{description}</p>
                </div>
            </CardContent>
        </Card>
    );
};

export default SingleBorrowBook;