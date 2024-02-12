type Route = `/${string}`;

export const goToRoute = (route: Route) => {}

// Should Success
goToRoute("/users");
goToRoute("/");
goToRoute("/admin/users");

// Should Error

// @ts-expect-error
goToRoute('users/1')

// @ts-expect-error
goToRoute('http://facebook.com')