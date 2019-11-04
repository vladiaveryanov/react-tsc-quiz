import * as interfaces from './interfaces/interfaces';

export function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

const questions: any = {};

export function getTurnData(
  authors: interfaces.Authors[],
  page: number
): interfaces.BooksAndAuthor {
  // TODO Implement check

  let allBooks: string[] = [];
  authors.forEach(author => {
    for (const n of author.books) {
      allBooks.push(n);
    }
  });

  const fourRandomBooks: string[] = shuffle(allBooks).slice(0, 4);
  const num: number = Math.floor(Math.random() * 4);
  const answer: string = fourRandomBooks[num];

  questions[page] = {
    books: fourRandomBooks,
    author: authors.find(author => author.books.some(title => title === answer))
  };

  return questions[page];
}
