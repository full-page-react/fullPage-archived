import Logo from "@/assets/Logo";
import { GitHubIcon, NpmIcon } from "@/assets/icons";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const Page1 = () => {
  return (
    <>
      <div className="centering flex-col gap-1 mb-8">
        <h1 className="mb-4 centering gap-4">
          Full
          <Logo className="w-[110px] h-[110px]" />
          Page
        </h1>
        <h3>Create Beautiful Fullscreen Scrolling Websites</h3>
      </div>

      <div className="centering gap-4 text-black">
        <Link
          target="_blank"
          href="https://github.com/techteammate/Tech-full-page"
          className="bg-white rounded py-1.5 px-4 centering gap-2"
        >
          <GitHubIcon className="w-8 h-8" />
          <span>Start</span>
        </Link>
        <button
          className="bg-white rounded px-4 centering gap-2"
          onClick={() => toast.error("This package is under development")}
        >
          <NpmIcon className="w-[2.69rem] h-[2.69rem]" />
          <span>NPM</span>
        </button>
      </div>
    </>
  );
};

export default Page1;
