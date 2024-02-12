const getUser = () => {
  return Promise.resolve({
    id: "123",
    name: "John",
    email: "john@exmaple.com",
  });
};

// type ReturnValue = unknown;
type ReturnValue = Awaited<ReturnType<typeof getUser>>;
