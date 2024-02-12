export const programModeEnumMap = Object.freeze({
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
});

type ProgramModeEnumMap = typeof programModeEnumMap;

export type GroupProgram = ProgramModeEnumMap["GROUP"];
export type AnnouncementProgram = ProgramModeEnumMap["ANNOUNCEMENT"];
export type OneOnOneProgram = ProgramModeEnumMap["ONE_ON_ONE"];
export type SelfDirectedProgram = ProgramModeEnumMap["SELF_DIRECTED"];
export type PlannedOneOnOneProgram = ProgramModeEnumMap["PLANNED_ONE_ON_ONE"];
export type PlannedSelfDirectedProgram =
  ProgramModeEnumMap["PLANNED_SELF_DIRECTED"];
