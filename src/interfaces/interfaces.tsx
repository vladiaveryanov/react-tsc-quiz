import React from "react";

export interface QuizState {
  turnData: BooksAndAuthor;
  selectedAnswer?: string;
}

export interface Authors {
  name: string;
  imageUrl: string;
  books: string;
}

export interface BooksAndAuthor {
  author?: Authors;
  books?: string[];
  answer: string;
}

export interface AppState {
  appData: {}
}

export const AppDispatch = React.createContext(null);

export function answer(page: number, question: string, correctAnswer: string,  selectedValue: string) {
  return {
    type: 'ANSWER',
    page,
    question,
    correctAnswer,
    selectedValue
  } as const;
}