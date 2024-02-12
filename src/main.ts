type AddRoutePrefix<TRoute extends string> = `/${TRoute}`;

// @ts-expect-error
type Example2 = AddRoutePrefix<boolean>;

// @ts-expect-error
type Example3 = AddRoutePrefix<1>;
