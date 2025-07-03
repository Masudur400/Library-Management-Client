export interface IBook {
    id: string;
    Title: string;
    Author: string;
    Genre: string;
    ISBN: string;
    Copies: number;
    Availability: string;
}

export interface IBorrow {
  id: string;
  bookId: string;
  buyerName: string;
  quantity:number;
  bookTitle:string;
  bookAuthor:string;
  genre:string;
}