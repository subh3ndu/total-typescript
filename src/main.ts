export const frontendToBackendMap = {
  singleModule: "SINGLE_MODULE",
  multiModule: "MULTI_MODULE",
  sharedModule: "SHARED_MODULE",
} as const;

export type BackendModuleEnum =
  (typeof frontendToBackendMap)[keyof typeof frontendToBackendMap];
