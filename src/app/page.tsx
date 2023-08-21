"use client";

import React from "react";
import Link from "next/link";
import FullPageSection from "@/utils/FullPageSection";
import FullPageWrapper from "@/utils/FullPageWrapper";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page4 from "./components/Page4";
import HorizontalExample from "./components/HorizontalExample";
import NestedExample from "./components/NestedExample";
import VerticalExample from "./components/VerticalExample";

const Home = () => {
  return (
    <FullPageWrapper width="100svw" height="100svh" speed={900}>
      <FullPageSection className="centering flex-col gap-8 bg-gradient-to-br from-[#58effa] to-[#390a77]">
        <Page1 />
      </FullPageSection>

      <FullPageSection className="bg-gradient-to-br from-[#ff983f] to-[#f84f43] centering flex-col">
        <Page2 />
      </FullPageSection>

      <FullPageSection className="bg-gradient-to-br from-[#64e453] to-[#097420] centering flex-col">
        <VerticalExample />
      </FullPageSection>

      <FullPageSection dir="horizontal">
        <FullPageSection className="bg-gradient-to-br from-[#40adff] to-[#3f62ff] centering flex-col">
          <HorizontalExample />
        </FullPageSection>
        <FullPageSection className="bg-gradient-to-br from-[#ff6b6b] to-[#c41616] centering flex-col">
          <NestedExample />
        </FullPageSection>
      </FullPageSection>

      <FullPageSection className="bg-gradient-to-br from-[#ffd23e] to-[#ccbf04] centering">
        <Page4 />
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
