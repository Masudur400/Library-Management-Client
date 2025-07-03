import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { IBook } from "../interfaces/interface";
import type { RootState } from "../store";



interface BookState {
    data: IBook[];
}


const initialState: BookState = {
    data: [
        {
            id: '1',
            Title: "To Kill a Mockingbird",
            Author: "Harper Lee",
            Genre: "Fiction",
            ISBN: "9780061120084",
            Copies: 5,
            Availability: "Available",
        },
        {
            id: '2',
            Title: "1984",
            Author: "George Orwell",
            Genre: "Dystopian",
            ISBN: "9780451524935",
            Copies: 2,
            Availability: "Limited",
        },
    ]
}


type DraftBook = Pick<IBook, 'Title' | 'Author' | 'Availability' | 'Copies' | 'Genre' | 'ISBN'>
const createBook = (bookData: DraftBook): IBook => {
    return { id: nanoid(), ...bookData }
}

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        // add Book 
        addBook: (state, action: PayloadAction<IBook>) => {
            const bookData = createBook(action.payload)
            state.data.push(bookData)
        }, 
        // delete book 
        deleteBook: (state, action: PayloadAction<string>) => {
            state.data = state.data.filter(book => book.id != action.payload)
        },
        // update book 
        updateBook: (state, action: PayloadAction<IBook>) => {
            const updatedBook = action.payload;
            const index = state.data.findIndex(book => book.id === updatedBook.id);
            if (index !== -1) {
                state.data[index] = updatedBook;
            }
        }
    }
})




// get all book 
export const selectBooks = (state: RootState) => {
    return state.books.data
}
// get single book by id 
export const selectSingleBook = (id: string) => (state: RootState) => {
  return state.books.data.find(book => book.id === id);
};






export const { addBook, deleteBook, updateBook } = bookSlice.actions 

export default bookSlice.reducer;