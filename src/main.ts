type CreateDataShape<T, U> = {
  data: T;
  error: U;
};

type Example = CreateDataShape<string, boolean>;
