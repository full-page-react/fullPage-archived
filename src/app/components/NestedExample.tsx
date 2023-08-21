import Pre from "@/common/Pre";
import React from "react";

const NestedExample = () => {
  
  return (
    <div>
      <h3 className="text-center text-4xl mb-6">Nested Example</h3>

      <Pre>
        {`"use client";

import React from "react";
import FullPageSection from "tech-full-page";
import FullPageWrapper from "tech-full-page";
    
const Nested = () => {
  return (
    <FullPageWrapper width="100svw" height="100svh" dir="horizontal" speed={900}>
    <FullPageSection className="bg-gradient-to-br from-[#40adff] to-[#3f62ff]">
      <p> Page 1 </P>
    </FullPageSection>
    <FullPageSection dir="horizontal">
      <FullPageSection className="bg-gradient-to-br from-[#f740ff] to-[#553fff]">
        <p> Page 2-1 </P>
      </FullPageSection>
      <FullPageSection className="bg-gradient-to-br from-[#f740ff] to-[#553fff]">
        <p> Page 2-2 </P>
      </FullPageSection>
      <FullPageSection className="bg-gradient-to-br from-[#f740ff] to-[#553fff]">
        <p> Page 2-3 </P>
      </FullPageSection>
    </FullPageSection>
  </FullPageWrapper>
  );
};
    
export default Nested;`}
      </Pre>
    </div>
  );
};

export default NestedExample;
