import Pre from "@/common/Pre";
import React from "react";

const Page2 = () => {
  return (
    <div className="centering !items-stretch flex-1 max-w-[1800px] gap-8">
      <div>
        <h2 className="mb-8">Easy and Free !</h2>
        <h3>
          fullPage is designed to be easy to use and customize. It includes tens of examples, great documentation and both
          community and personal support.
        </h3>
      </div>
      <div>
        <Pre>
          {` <FullPageWrapper speed={900}>
 <FullPageSection className="bg-gradient-to-br from-[#40adff] to-[#3f62ff]">
    <p>Page 1 !</p>
 </FullPageSection>
 <FullPageSection className="bg-gradient-to-br from-[#ff983f] to-[#ff4c40]">
    <p>Page 2 !</p>
</FullPageSection>
</FullPageWrapper>`}
        </Pre>
      </div>
    </div>
  );
};

export default Page2;
