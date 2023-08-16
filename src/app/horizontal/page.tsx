"use client";

import React from "react";
import Title from "@/common/Title";
import Document from "@/common/Document";
import FullPageSection from "@/utils/FullPageSection";
import FullPageWrapper from "@/utils/FullPageWrapper";

const Vertical = () => {
  return (
    <FullPageWrapper width="100svw" height="100svh" dir="horizontal" speed={500}>
      <FullPageSection className="bg-gradient-to-br from-[#40adff] to-[#3f62ff]">
        <FirstPage />
      </FullPageSection>
      <FullPageSection className="bg-gradient-to-br from-[#ff983f] to-[#ff4c40]">
        <Title title="Page 2" />
      </FullPageSection>
      <FullPageSection className="bg-gradient-to-br from-[#f740ff] to-[#553fff]">
        <Title title="Page 3" />
      </FullPageSection>
    </FullPageWrapper>
  );
};

export default Vertical;

const FirstPage = () => {
  return (
    <Document
      pre={`  "use client";

  import React from "react";
  import FullPageSection from "tech-full-page";
  import FullPageWrapper from "tech-full-page";
      
  const Vertical = () => {
    return (
      <FullPageWrapper width="100svw" height="100svh" dir="horizontal" speed={500}>
        <FullPageSection className="bg-gradient-to-br from-[#40adff] to-[#3f62ff]">
          Page 1
        </FullPageSection>
        <FullPageSection className="bg-gradient-to-br from-[#ff983f] to-[#ff4c40]">
          Page 2
        </FullPageSection>
        <FullPageSection className="bg-gradient-to-br from-[#f740ff] to-[#553fff]">
          Page 3
        </FullPageSection>
      </FullPageWrapper>
    );
  };
      
  export default Vertical;`}
    >
      <h1 className="text-center text-4xl text-white">Horizontal</h1>
    </Document>
  );
};
