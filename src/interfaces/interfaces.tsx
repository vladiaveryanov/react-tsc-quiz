import React from "react";

export interface QuizState {
  turnData: BooksAndAuthor;
  selectedAnswer?: string;
}

export interface Authors {
  name: string;
  imageUrl: string;
  books: string[];
}

export interface BooksAndAuthor {
  author?: Authors;
  books?: string[];
  answer: string;
}

export interface AppState {
  mistakes: Mistake[],
  correctAnswersCount: number,
  valuesSelectedOnPages: ValuesSelectedOnPages[],
}

export interface Mistake {
  question: string,
  correctAnswer: string
}

export interface ValuesSelectedOnPages {
  page: number,
  selectedValue: string
}

export const AppDispatch = React.createContext(null);

export function answerCorrect( page: number, selectedValue: string) {
  return {
    type: 'ANSWER_CORRECT',
    page,
    selectedValue
  } as const;
}

export function answerWrong(question: string, correctAnswer: string, page: number, selectedValue: string) {
  return {
    type: 'ANSWER_WRONG',
    question,
    correctAnswer,
    page,
    selectedValue
  } as const;
}