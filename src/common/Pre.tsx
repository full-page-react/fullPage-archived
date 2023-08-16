import Prism from "prismjs";
import { ClipboardIcon, RocketIcon } from "@/assets/icons";
import React, { useCallback, useEffect, useState } from "react";

const Pre = ({ children }: { children: string }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const copyHandler = useCallback(() => {
    if (!active) {
      if ("clipboard" in navigator) {
        setActive(true);
        navigator.clipboard.writeText(children);
        setTimeout(() => setActive(false), 1100);
      }
    }
  }, [active, children]);

  return (
    <pre dir="ltr" className="max-w-full w-full">
      <button onClick={copyHandler} className="mb-4 border border-color rounded-md w-fit p-2 block relative overflow-hidden">
        <ClipboardIcon className={`Transition ${active ? "scale-0" : "scale-100"}`} />
        <span
          className={`absolute w-full h-full centering top-full right-full ${
            active && "translate-x-[200%] -translate-y-[200%] Transition !duration-[1100ms]"
          }`}
        >
          <RocketIcon />
        </span>
      </button>
      <code className="language-javascript">{children}</code>
    </pre>
  );
};

export default Pre;
