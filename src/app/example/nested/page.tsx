"use client";

import Document from "@/common/Document";
import Title from "@/common/Title";
import FullPageSection from "@/utils/FullPageSection";
import FullPageWrapper from "@/utils/FullPageWrapper";
import React from "react";

const Nested = () => {
  return (
    <FullPageWrapper width="100svw" height="100svh" speed={900}>
      <FullPageSection className="bg-gradient-to-br from-[#40adff] to-[#3f62ff]">
        <FirstPage />
      </FullPageSection>
      <FullPageSection dir="horizontal">
        <FullPageSection className="bg-gradient-to-br from-[#f740ff] to-[#553fff]">
          <Title title="2-1" />
        </FullPageSection>
        <FullPageSection className="bg-gradient-to-br from-[#f740ff] to-[#553fff]">
          <Title title="2-2" />
        </FullPageSection>
        <FullPageSection className="bg-gradient-to-br from-[#f740ff] to-[#553fff]">
          <Title title="2-3" />
        </FullPageSection>
      </FullPageSection>
      <FullPageSection className="bg-gradient-to-br from-[#ff983f] to-[#ff4c40]">
        <Title title="3" />
      </FullPageSection>
    </FullPageWrapper>
  );
};

export default Nested;

const FirstPage = () => {
  return (
    <Document
      pre={`  "use client";

  import React from "react";
  import FullPageSection from "tech-full-page";
  import FullPageWrapper from "tech-full-page";
      
  const Nested = () => {
    return (
      <FullPageWrapper width="100svw" height="100svh" dir="horizontal" speed={900}>
      <FullPageSection className="bg-gradient-to-br from-[#40adff] to-[#3f62ff]">
        <FirstPage />
      </FullPageSection>
      <FullPageSection dir="horizontal">
        <FullPageSection className="bg-gradient-to-br from-[#f740ff] to-[#553fff]">
          <Title title="2-1" />
        </FullPageSection>
        <FullPageSection className="bg-gradient-to-br from-[#f740ff] to-[#553fff]">
          <Title title="2-2" />
        </FullPageSection>
        <FullPageSection className="bg-gradient-to-br from-[#f740ff] to-[#553fff]">
          <Title title="2-3" />
        </FullPageSection>
      </FullPageSection>
      <FullPageSection className="bg-gradient-to-br from-[#ff983f] to-[#ff4c40]">
        <Title title="2-3" />
      </FullPageSection>
    </FullPageWrapper>
    );
  };
      
  export default Nested;`}
    >
      <h1 className="text-center text-4xl text-white">Nested</h1>
    </Document>
  );
};
