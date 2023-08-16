"use client";

import React from "react";
import Link from "next/link";
import FullPageSection from "@/utils/FullPageSection";
import FullPageWrapper from "@/utils/FullPageWrapper";

const Home = () => {
  return (
    <div className="w-[100svw] h-[100svh]">
      <FullPageWrapper width="100svw" height="100svh" speed={500}>
        <FullPageSection className="bg-gradient-to-br from-[#40adff] to-[#3f62ff]">
          <LinkElement href="/vertical" text="Vertical" />
        </FullPageSection>
        <FullPageSection dir="horizontal">
          <FullPageSection className="bg-gradient-to-br from-[#ff983f] to-[#ff4c40]">
            <LinkElement href="/horizontal" text="Horizontal" />
          </FullPageSection>
        </FullPageSection>
        <FullPageSection>
          <FullPageSection className="bg-gradient-to-br from-[#f740ff] to-[#553fff]">
            <LinkElement href="/nested" text="Nested" />
          </FullPageSection>
        </FullPageSection>
      </FullPageWrapper>
    </div>
  );
};

export default Home;

const LinkElement = ({ href, text }: { href: string; text: string }) => {
  return (
    <div className="h-full centering">
      <Link href={href} className="link">
        {text}
      </Link>
    </div>
  );
};
