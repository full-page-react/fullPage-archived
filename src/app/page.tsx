"use client";
import React from "react";
import FullPageWrapper from "../utils/FullPageWrapper";
import FullPageSection from "../utils/FullPageSection";

const Home = () => {
  return (
    <div>
      <FullPageWrapper>
        <FullPageSection pageId="1" className="bg-red-400 flex items-center justify-center">
          1
        </FullPageSection>
        <FullPageSection pageId="2" className="bg-blue-400 flex items-center justify-center">
          2
        </FullPageSection>
      </FullPageWrapper>
    </div>
  );
};

export default Home;
