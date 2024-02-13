interface MyComplexInterface<Event, Context, Name, Point> {
  getEvent: () => Event;
  getContext: () => Context;
  getName: () => Name;
  getPoint: () => Point;
}

type example = MyComplexInterface<
  "event",
  "window",
  "my-event",
  { x: 12; y: 14 }
>;

// My Solution
type getPoint<T> = T extends { getPoint: infer TPoint }
  ? TPoint extends () => any
    ? ReturnType<TPoint>
    : never
  : never;

// Author Solution
type getPoint2<T> = T extends MyComplexInterface<
  infer TEvent,
  infer TContext,
  infer TName,
  infer TPoint
>
  ? TPoint
  : never;

let a: getPoint<example>;
let b: getPoint2<example>;
