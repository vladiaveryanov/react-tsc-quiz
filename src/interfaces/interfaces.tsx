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
}

export interface Mistake {
  question: string,
  correctAnswer: string
}

export const AppDispatch = React.createContext(null);

export function answerCorrect() {
  return {
    type: 'ANSWER_CORRECT'
  } as const;
}

export function answerWrong(question: string, correctAnswer: string) {
  return {
    type: 'ANSWER_WRONG',
    question,
    correctAnswer
  } as const;
}