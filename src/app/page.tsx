import React from "react";
import FullPageWrapper from "../utils/FullPageWrapper";
import FullPageSection from "../utils/FullPageSection";
import { sum } from "./test";

const Home = () => {
  console.log(sum(1, "s"));

  return (
    <div>
      <FullPageWrapper width="100svh" height="100svh">
        <FullPageSection className="bg-red-700">slam</FullPageSection>
      </FullPageWrapper>
    </div>
  );
};

export default Home;
