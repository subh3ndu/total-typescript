//* Discriminated Union type
type A =
  | {
      type: "a";
      a: string;
    }
  | {
      type: "b";
      b: string;
    }
  | {
      type: "c";
      c: string;
    };

//* Union type
type B = "a" | "b" | "c";

//* Enum type
enum C {
  A = "a",
  B = "b",
  C = "c",
}
