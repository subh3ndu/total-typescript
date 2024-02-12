const myFunc = () => {
  return "string";
};

// type MyFuncReturn = unknown;
type MyFuncReturn = ReturnType<typeof myFunc>;
