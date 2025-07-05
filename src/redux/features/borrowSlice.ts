// import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
// import type { IBorrow } from "../interfaces/interface";
// import type { RootState } from "../store";




// interface borrowState {
//     data: IBorrow[];
// }

// const initialState: borrowState = {
//     data: [],
// };

// type DraftBorrow = Pick<IBorrow, 'bookId' | 'buyerName'|'quantity'|'bookAuthor'|'bookTitle'|'genre'|'description'>
// const createBorrow = (borrowData: DraftBorrow): IBorrow => {
//     return { id: nanoid(), ...borrowData }
// }

// const borrowSlice = createSlice({
//     name: "borrows",
//     initialState,
//     reducers: {
//         // Add a new borrow
//         addBorrow: (state, action: PayloadAction<IBorrow>) => {
//             const borrowData = createBorrow(action.payload)
//             state.data.push(borrowData)
//         },
//     },
// });


// // Selector to get all borrows
// export const selectBorrows = (state: RootState) => state.borrows.data


// export const { addBorrow } = borrowSlice.actions;

// export default borrowSlice.reducer;