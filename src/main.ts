type YouSayGoodbyeAndISayHello<T> = T extends "hello" ? "goodbye" : "hello";

var Example: YouSayGoodbyeAndISayHello<"a">;
