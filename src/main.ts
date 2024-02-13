const getServerSideProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json: { title: string } = await data.json();

  return {
    props: {
      json,
      isCool: true,
    },
  };
};

// My Solution
type InferPropsFromServerSideFunction<T extends () => any> = Awaited<
  ReturnType<T>
> extends { props: any }
  ? Awaited<ReturnType<T>>["props"]
  : never;

// Author Solution
type InferPropsFromServerSideFunction2<T> = T extends () => Promise<{
  props: infer P;
}>
  ? P
  : never;

type example = InferPropsFromServerSideFunction2<typeof getServerSideProps>;
