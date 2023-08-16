"use client";
import React from "react";
import FullPageWrapper from "../utils/FullPageWrapper";
import FullPageSection from "../utils/FullPageSection";

// dir: having children

const Home = () => {
  return (
    <FullPageWrapper width="100svw" height="100svh" dir="horizontal" speed={300}>
      <FullPageSection className="bg-slate-700">1</FullPageSection>
      <FullPageSection className="bg-sky-700">2</FullPageSection>
      <FullPageSection className="bg-green-700">3</FullPageSection>

      <FullPageSection dir="vertical" className="bg-red-700">
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

export default Home;
