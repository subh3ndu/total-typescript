import { S } from "ts-toolbelt";

type Names = [
  "Matt Pocock",
  "Jimi Hendrix",
  "Eric Calpton",
  "John Mayer",
  "BB King"
];

// My solution
type GetSurname<T extends string> = S.Split<T, " ">[1];

// Author solution
type GetSurname2<T> = T extends `${string} ${infer LastName}`
  ? LastName
  : never;

export type Example = GetSurname2<Names[0]>;
export type Example1 = GetSurname2<Names[1]>;
export type Example2 = GetSurname2<Names[2]>;
export type Example3 = GetSurname2<Names[3]>;
export type Example4 = GetSurname2<Names[4]>;
