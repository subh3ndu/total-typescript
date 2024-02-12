type CreateDataShape<TData, TError = undefined> = {
  data: TData;
  error: TError;
};

type Example = CreateDataShape<string>;
type Example1 = CreateDataShape<string, boolean>;
