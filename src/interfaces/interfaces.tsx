export interface Props {
  BooksAndAuthor?: BooksAndAuthor;
}

export interface State {
  turnData?: BooksAndAuthor;
}

export interface Authors {
  name: string;
  imageUrl: string;
  books: string[];
}

export interface BooksAndAuthor {
  author?: Authors;
  books?: string[];
}
