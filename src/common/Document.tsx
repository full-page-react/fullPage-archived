import React, { ReactNode } from "react";
import Pre from "./Pre";

interface DocumentType {
  pre: string;
  children: ReactNode;
}

const Document = ({ pre = "", children }: DocumentType) => {
  return (
    <div className="max-w-[1000px] mx-auto w-full h-full centering transition-none">
      <div className="m-4 w-full flex flex-col gap-4">
        {children}
        <Pre>{pre}</Pre>
      </div>
    </div>
  );
};

export default Document;
