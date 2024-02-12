type GetParametersAndReturnType<T extends (...args: any) => any> = {
  params: Parameters<T>;
  returnValue: ReturnType<T>;
};

type Example = GetParametersAndReturnType<
  (a: string, b: number, c: boolean) => string
>;
