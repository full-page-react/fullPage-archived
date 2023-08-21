import React from "react";

const Page1 = () => {
  return (
    <>
      <div className="centering flex-col gap-1 text-white">
        <h1 className="mb-4">Full Page</h1>
        <h3>Create Beautiful Fullscreen Scrolling Websites</h3>
      </div>

      <div className="centering gap-4 text-black">
        <button className="bg-white rounded py-1.5 px-4">View on GitHub</button>
        <button className="bg-white rounded py-1.5 px-4">NPM</button>
      </div>
    </>
  );
};

export default Page1;
