"use client";

import React from "react";
import FullPageWrapper from "./FullPage/FullPageWrapper";
import FullPageSection from "./FullPage/FullPageSection";

const Test = () => {
  return (
    <FullPageWrapper width="100svw" height="100svh" dir="HORIZONTAL">
      <FullPageSection className="bg-slate-700">1</FullPageSection>
      <FullPageSection className="bg-sky-700">2</FullPageSection>
      <FullPageSection className="bg-green-700">3</FullPageSection>

      <FullPageSection dir="VERTICAL" className="bg-red-700" >
        <FullPageSection className="bg-slate-700">4-1</FullPageSection>
        <FullPageSection className="bg-sky-700">4-2</FullPageSection>
        <FullPageSection className="bg-green-700">
          <FullPageSection className="bg-slate-700">5</FullPageSection>
          <FullPageSection className="bg-sky-700">6</FullPageSection>
          <FullPageSection className="bg-green-700">7</FullPageSection>
          <FullPageSection className="bg-yellow-700">8</FullPageSection>
        </FullPageSection>
      </FullPageSection>

      <FullPageSection className="bg-slate-700">5</FullPageSection>
      <FullPageSection className="bg-sky-700">6</FullPageSection>
      <FullPageSection className="bg-green-700">7</FullPageSection>
      <FullPageSection className="bg-yellow-700">8</FullPageSection>
    </FullPageWrapper>
  );
};

export default Test;
