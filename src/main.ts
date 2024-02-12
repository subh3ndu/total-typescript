export const fakeDataDefaults = {
  String: "Default String",
  Int: 1,
  Float: 1.23,
  Boolean: true,
  Id: "abcdko9384982fdacd",
};

type FakeDataDefaults = typeof fakeDataDefaults;

export type StringTypeObj = Pick<FakeDataDefaults, "String">;
export type IntTypeObj = Pick<FakeDataDefaults, "Int">;
export type FloatTypeObj = Pick<FakeDataDefaults, "Float">;
export type BooleanTypeObj = Pick<FakeDataDefaults, "Boolean">;
export type IdObj = Pick<FakeDataDefaults, "Id">;

export type StringType = FakeDataDefaults["String"];
export type IntType = FakeDataDefaults["Int"];
export type FloatType = FakeDataDefaults["Float"];
export type BooleanType = FakeDataDefaults["Boolean"];
export type Id = FakeDataDefaults["Id"];
