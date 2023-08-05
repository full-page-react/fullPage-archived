"use client";

import { ContextInitialValue, ContextValue } from "@/types/types";
import React, { Children, ReactElement, ReactNode, WheelEvent, cloneElement, createContext, useCallback, useRef } from "react";

interface Props {
  width?: string;
  speed?: number;
  children?: any;
  height?: string;
  dir?: "horizontal" | "vertical";
}

const initialValue = { page: null, pages: [] };

export const VERTICAL = "vertical";
export const HORIZONTAL = "horizontal";

export const FullPageWrapperContext = createContext<ContextValue>({ current: initialValue });

const FullPageWrapper = ({ children, height = "100svh", width = "100svw", speed = 500, dir = VERTICAL }: Props) => {
  const isStarted = useRef<boolean>(false);
  const data = useRef<ContextInitialValue>(initialValue);

  const changePageHandler = useCallback(
    (e: WheelEvent<HTMLDivElement>) => {
      if (data.current && data.current.page && !isStarted.current) {
        isStarted.current = true;
        setTimeout(() => (isStarted.current = false), speed);
        const isForwarding = e.deltaY > 0;

        const currentIndex = data.current.pages.findIndex((item) => item === data.current.page);
        const currentId = data.current.pages[currentIndex];
        const newPageId = isForwarding ? data.current.pages[currentIndex + 1] : data.current.pages[currentIndex - 1];

        if (newPageId) {
          const currentElement = document.getElementById(currentId)!;
          const currentElementDir = currentElement.dataset.dir;
          const nextElement = document.getElementById(newPageId)!;
          const nextElementDir = nextElement.dataset.dir;

          if (isForwarding) {
            if (nextElementDir === HORIZONTAL) {
              if (currentElementDir === HORIZONTAL) currentElement.style.transform = "translateX(-200%)";
              else currentElement.style.transform = "translateY(-100%) translateX(-100%)";
              nextElement.style.transform = "translateX(-100%)";
            } else {
              if (currentElementDir === VERTICAL) currentElement.style.transform = "translateY(-200%)";
              else currentElement.style.transform = "translateY(-100%) translateX(-100%)";
              nextElement.style.transform = "translateY(-100%)";
            }
          } else {
            if (nextElementDir === HORIZONTAL) {
              if (currentElementDir === HORIZONTAL) currentElement.style.transform = "translateX(0)";
              else currentElement.style.transform = "translateX(0) translateY(0)";
              nextElement.style.transform = "translateX(-100%)";
            } else {
              if (currentElementDir === VERTICAL) currentElement.style.transform = "translateY(0)";
              else currentElement.style.transform = "translateY(0) translateX(0)";
              nextElement.style.transform = "translateY(-100%)";
            }
          }

          data.current = { ...data.current, page: newPageId };
        }
      }
    },
    [speed]
  );

  return (
    <FullPageWrapperContext.Provider value={data}>
      <div style={{ width, height }} className="relative overflow-hidden mr-auto" onWheel={changePageHandler}>
        {children &&
          Children.map(
            children,
            (child, index) =>
              child?.type.displayName === "FullPageSection" &&
              cloneElement(child, { width, speed, height, pageId: `${index + 1}`, dir: child.props.dir || dir })
          )}
      </div>
    </FullPageWrapperContext.Provider>
  );
};

export default FullPageWrapper;
