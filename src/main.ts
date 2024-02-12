// {} is assignable to every thing that is not null or undefined
export type Maybe<T extends {}> = T | null | undefined;

// @ts-expect-error
export type Example = Maybe<null>;

// @ts-expect-error
export type Example1 = Maybe<undefined>;
