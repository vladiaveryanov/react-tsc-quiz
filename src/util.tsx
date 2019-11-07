import * as interfaces from './interfaces/interfaces';

export function shuffle(books: string[]) {
  let randomIndex: number;
  let book: string;
  let index: number;

  for (index = books.length - 1; index > 0; index--) {
    randomIndex = Math.floor(Math.random() * (index + 1));
    book = books[index];
    books[index] = books[randomIndex];
    books[randomIndex] = book;
  }

  return books;
}

let questions: any = {};

export function getTurnData(
  authors: interfaces.Authors[],
  page: number
): interfaces.BooksAndAuthor {

  if (questions[page]) {
    return questions[page];
  }
  
  let allBooks: string[] = [];
  
  authors.forEach(author => {
    allBooks.push(author.books);
  });
  
  const fourRandomBooks: string[] = shuffle(allBooks).slice(0, 4);
  const num: number = Math.floor(Math.random() * 4);
  const answer: string = fourRandomBooks[num];
  
  //rename keys
  questions[page] = {
    books: fourRandomBooks,
    author: authors.find(author => author.books === answer),
    answer: answer
  };

  return questions[page];
}
