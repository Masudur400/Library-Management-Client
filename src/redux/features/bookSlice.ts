import { createSlice } from "@reduxjs/toolkit";
import type { IBook } from "../interfaces/interface";
import type { RootState } from "../store";



interface BookState {
  data: IBook[];
}


const initialState: BookState  = {
    data: [
        {
             id : 1,
            Title: "To Kill a Mockingbird",
            Author: "Harper Lee",
            Genre: "Fiction",
            ISBN: "9780061120084",
            Copies: 5,
            Availability: "Available", 
        },
        {
            id: 2,
            Title: "1984",
            Author: "George Orwell",
            Genre: "Dystopian",
            ISBN: "9780451524935",
            Copies: 2,
            Availability: "Limited", 
        },
    ]
}

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {}
})

export const selectBooks = (state:RootState)=>{
    return  state.books.data
}


export default bookSlice.reducer;