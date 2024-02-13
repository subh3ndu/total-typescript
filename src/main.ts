// Soln-1
type GetDataValue<T> = T extends { data: any } ? T["data"] : never;

// Soln-2
type GetDataValue2<T> = T extends { data: infer TData } ? TData : never;

let example: GetDataValue<{
  data: "hello";
}>;
