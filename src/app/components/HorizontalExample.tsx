import React from "react";
import Pre from "@/common/Pre";

const HorizontalExample = () => {
  return (
    <div>
      <h1 className="text-center text-4xl mb-6">Horizontal Example</h1>
      <Pre>
        {`"use client";

import React from "react";
import FullPageSection from "tech-full-page";
import FullPageWrapper from "tech-full-page";
    
const Horizontal = () => {
  return (
    <FullPageWrapper width="100svw" height="100svh" dir="horizontal" speed={900}>
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
    
export default Horizontal;`}
      </Pre>
    </div>
  );
};

export default HorizontalExample;
