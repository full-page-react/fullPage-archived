export type ContextInitialValue = {
  pages: string[];
  page: string | null;
};

type dirHeight = "svh" | "lvh" | "vh" | "rem" | "px";
type dirWidth = "svw" | "lvw" | "vw" | "rem" | "px";

export type DirType = "vertical" | "horizontal";

export type width = `${number}${dirWidth}`;
export type height = `${number}${dirHeight}`;

export type FullPageWrapperProps = {
  dir?: DirType;
  width?: width;
  speed?: number;
  height?: height;
  children: React.ReactNode;
};

export type FullPageSectionProps = {
  dir?: DirType;
  width?: width;
  speed?: number;
  pageId?: string;
  height?: height;
  className?: string;
  children?: React.ReactNode;
};
