const makeQuery = (
  url: string,
  opts?: {
    method?: string;
    headers?: {
      [key: string]: string;
    };
    body?: string;
  }
) => {};

// type MakeQueryParameters = unknown;
type MakeQueryParameters = Parameters<typeof makeQuery>;
