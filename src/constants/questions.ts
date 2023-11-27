export interface Question {
  type: string;
  text: string;
  order: number;
  score?: number;
};

export interface ShortQuestion {
  text: string,
  score: number,
};

export type QuestionnaireItem = Question|ShortQuestion;

export const FULL_QUESTIONNAIRE: Question[] = [
  { type: "a", text: "full.1a", order: 1 },
  { type: "e", text: "full.2e", order: 2 },
  { type: "d", text: "full.3d", order: 3 },
  { type: "e", text: "full.4e", order: 4 },
  { type: "b", text: "full.5b", order: 5 },
  { type: "a", text: "full.6a", order: 6 },
  { type: "b", text: "full.7b", order: 7 },
  { type: "d", text: "full.8d", order: 8 },
  { type: "e", text: "full.9e", order: 9 },
  { type: "a", text: "full.10a", order: 10 },
  { type: "b", text: "full.11b", order: 11 },
  { type: "c", text: "full.12c", order: 12 },
  { type: "c", text: "full.13c", order: 13 },
  { type: "d", text: "full.14d", order: 14 },
  { type: "c", text: "full.15c", order: 15 },
  { type: "c", text: "full.16c", order: 16 },
  { type: "c", text: "full.17c", order: 17 },
  { type: "b", text: "full.18b", order: 18 },
  { type: "b", text: "full.19b", order: 19 },
  { type: "a", text: "full.20a", order: 20 },
  { type: "d", text: "full.21d", order: 21 },
  { type: "c", text: "full.22c", order: 22 },
  { type: "a", text: "full.23a", order: 23 },
  { type: "e", text: "full.24e", order: 24 },
  { type: "b", text: "full.25b", order: 25 },
  { type: "b", text: "full.26b", order: 26 },
  { type: "a", text: "full.27a", order: 27 },
  { type: "e", text: "full.28e", order: 28 },
  { type: "d", text: "full.29d", order: 29 },
  { type: "d", text: "full.30d", order: 30 },
  { type: "d", text: "full.31d", order: 31 },
  { type: "a", text: "full.32a", order: 32 },
  { type: "a", text: "full.33a", order: 33 },
  { type: "e", text: "full.34e", order: 34 },
  { type: "a", text: "full.35a", order: 35 },
  { type: "d", text: "full.36d", order: 36 },
  { type: "e", text: "full.37e", order: 37 },
  { type: "d", text: "full.38d", order: 38 },
  { type: "e", text: "full.39e", order: 39 },
  { type: "b", text: "full.40b", order: 40 },
  { type: "a", text: "full.41a", order: 41 },
];
