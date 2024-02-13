type EG<T extends string> = Lowercase<T> extends "hello"
  ? "goodbye"
  : Lowercase<T> extends "goodbye"
  ? "hello"
  : never;

let Example: EG<"a">;

type YouSayGoodbyeAndISayHello<T> = T extends "hello" | "goodbye"
  ? T extends "hello"
    ? "goodbye"
    : "hello"
  : never;

let Example2: YouSayGoodbyeAndISayHello<"hola">;
