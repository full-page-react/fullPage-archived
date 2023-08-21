"use client";

import React from "react";
import Link from "next/link";
import FullPageSection from "@/utils/FullPageSection";
import FullPageWrapper from "@/utils/FullPageWrapper";
import Logo from "@/assets/Logo";
import Pre from "@/common/Pre";

const Home = () => {
  return (
    <FullPageWrapper width="100svw" height="100svh" speed={900}>
      <FullPageSection className="centering flex-col gap-8 bg-gradient-to-br from-[#40adff] to-[#3f62ff]">
        <div className="centering flex-col gap-1 text-white">
          <h1 className="mb-4">Full Page</h1>
          <h3>Create Beautiful Fullscreen Scrolling Websites</h3>
        </div>

        <div className="centering gap-4 text-black">
          <button className="bg-white rounded py-1.5 px-4">View on GitHub</button>
          <button className="bg-white rounded py-1.5 px-4">NPM</button>
        </div>
      </FullPageSection>
      <FullPageSection dir="vertical">
        <FullPageSection className="bg-gradient-to-br from-[#ff983f] to-[#ff4c40] centering flex-col">
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
        </FullPageSection>
      </FullPageSection>
      <FullPageSection>
        <FullPageSection className="bg-gradient-to-br from-[#f740ff] to-[#553fff] centering">
          <div className="centering flex-col gap-2">
            <h2>Touch me!</h2>
            <h3>Coming soon ...</h3>
          </div>
        </FullPageSection>
      </FullPageSection>
    </FullPageWrapper>
  );
};

export default Home;

const LinkElement = ({ href, text }: { href: string; text: string }) => {
  return (
    <div className="h-full centering">
      <Link href={href} className="link centering flex-col gap-2">
        {text}
        <p className="!text-xl">Click for more information</p>
      </Link>
    </div>
  );
};
