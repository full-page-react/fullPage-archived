export interface ContextInitialValue {
  pages: string[];
  page: string | null;
}

export interface ContextValue {
  current?: ContextInitialValue;
}

export type DirType = "vertical" | "horizontal";
