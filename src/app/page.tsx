"use client";

import React from "react";
import Link from "next/link";
import FullPageSection from "@/utils/FullPageSection";
import FullPageWrapper from "@/utils/FullPageWrapper";
import Logo from "@/assets/Logo";

const Home = () => {
  return (
    <FullPageWrapper width="100svw" height="100svh" speed={900}>
      <FullPageSection className="centering flex-col gap-8 bg-gradient-to-br from-[#40adff] to-[#3f62ff]">
        <div className="centering flex-col gap-1 text-white">
          <h1 className="text-[130px] font-bold mb-4">Full Page</h1>
          <p className="text-xl">Create Beautiful Fullscreen Scrolling Websites</p>
        </div>

        <div className="centering gap-4">
          <button className="bg-white rounded py-1.5 px-4">View on GitHub</button>
          <button className="bg-white rounded py-1.5 px-4">NPM</button>
        </div>
      </FullPageSection>
      <FullPageSection dir="vertical">
        <FullPageSection className="bg-gradient-to-br from-[#ff983f] to-[#ff4c40] centering">
          <div>
            <h1 className="text-[130px] font-bold">Easy!</h1>
            <p>
              fullPage is designed to be easy to use and customize. It includes tens of examples, great documentation and both
              community and personal support.{" "}
            </p>
          </div>
          <div></div>
        </FullPageSection>
      </FullPageSection>
      <FullPageSection>
        <FullPageSection className="bg-gradient-to-br from-[#f740ff] to-[#553fff]">
          <LinkElement href="/example/nested" text="Nested" />
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
