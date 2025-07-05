// import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
// import type { IBook } from "../interfaces/interface";
// import type { RootState } from "../store";



// interface BookState {
//     data: IBook[];
// }


// const initialState: BookState = {
//     data: []
// }


// type DraftBook = Pick<IBook, 'title' | 'author' | 'availability' | 'copies' | 'genre' | 'isbn'|'description'>
// const createBook = (bookData: DraftBook): IBook => {
//     return { _id: nanoid(), ...bookData }
// }

// const bookSlice = createSlice({
//     name: 'books',
//     initialState,
//     reducers: {
//         // add Book 
//         addBook: (state, action: PayloadAction<IBook>) => {
//             const bookData = createBook(action.payload)
//             state.data.push(bookData)
//         }, 
//         // delete book 
//         deleteBook: (state, action: PayloadAction<string>) => {
//             state.data = state.data.filter(book => book._id != action.payload)
//         },
//         // update book 
//         updateBook: (state, action: PayloadAction<IBook>) => {
//             const updatedBook = action.payload;
//             const index = state.data.findIndex(book => book._id === updatedBook._id);
//             if (index !== -1) {
//                 state.data[index] = updatedBook;
//             }
//         }
//     }
// })




// // get all book 
// export const selectBooks = (state: RootState) => {
//     return state.baseApi;
// }
// // get single book by id 
// export const selectSingleBook = (id: string) => (state: RootState) => {
//   return state.books.data.find(book => book.id === id); 
// };






// export const { addBook, deleteBook, updateBook } = bookSlice.actions 

// export default bookSlice.reducer;