export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description?: string;
  copies: number;
  available: string;
}

export interface IBorrow {
  _id?: string;
  bookId: string;
  buyerName: string;
  quantity: number;
  bookTitle: string;
  bookAuthor: string;
  genre: string;
  description: string;
}