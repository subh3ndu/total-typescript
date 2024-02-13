type NonEmptyArray<T> = [T, ...T[]]; // same as [T, ...Array<T>]

export const makeEnum = (values: NonEmptyArray<string>) => {};

makeEnum(["a"]);
makeEnum(["a", "b", "c"]);

// @ts-expect-error
makeEnum([]);
