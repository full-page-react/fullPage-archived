export type ContextInitialValue = {
  pages: string[];
  page: string | null;
};

type dirHeight = "svh" | "lvh" | "vh" | "rem" | "px";
type dirWidth = "svw" | "lvw" | "vw" | "rem" | "px";

export type DirType = "vertical" | "horizontal";

export type FullPageSectionProps = {
  dir?: DirType;
  width?: string;
  speed?: number;
  pageId?: string;
  height?: string;
  className?: string;
  children?: React.ReactNode;
};

export type FullPageWrapperProps = {
  dir?: DirType;
  speed?: number;
  children: React.ReactNode;
  width?: `${number}${dirWidth}`;
  height?: `${number}${dirHeight}`;
};
