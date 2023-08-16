import { ContextInitialValue, FullPageWrapperProps } from "@/types/types";
import React, { Children, cloneElement, createContext, useCallback, useRef } from "react";

const initialValue: ContextInitialValue = { page: null, pages: [] };
export const FullPageWrapperContext = createContext({ current: initialValue });

const FullPageWrapper = ({
  children,
  speed = 500,
  width = "100svw",
  dir = "vertical",
  height = "100svh",
}: FullPageWrapperProps) => {
  const isStarted = useRef(false);
  const data = useRef(initialValue);

  const changePageHandler = useCallback(
    (e: React.WheelEvent<HTMLDivElement>) => {
      if (!isStarted.current && data.current.page) {
        isStarted.current = true;
        setTimeout(() => (isStarted.current = false), speed + 100);
        const isForwarding = e.deltaY > 0;

        const currentIndex = data.current.pages.findIndex((item) => item === data.current.page);
        const currentId = data.current.pages[currentIndex];
        const newPageId = isForwarding ? data.current.pages[currentIndex + 1] : data.current.pages[currentIndex - 1];

        const currentElement = document.getElementById(currentId);
        if (newPageId && currentElement) {
          const currentElementDir = currentElement.dataset.dir;
          const nextElement = document.getElementById(newPageId);
          const nextElementDir = nextElement?.dataset?.dir;

          if (isForwarding) {
            if (nextElementDir === "horizontal") {
              if (currentElementDir === "horizontal") currentElement.style.transform = "translateX(-200%)";
              else currentElement.style.transform = "translateY(-100%) translateX(-100%)";
              (nextElement as HTMLElement).style.transform = "translateX(-100%)";
            } else {
              if (currentElementDir === "vertical") currentElement.style.transform = "translateY(-200%)";
              else currentElement.style.transform = "translateY(-100%) translateX(-100%)";
              (nextElement as HTMLElement).style.transform = "translateY(-100%)";
            }
          } else {
            if (nextElementDir === "horizontal") {
              if (currentElementDir === "horizontal") currentElement.style.transform = "translateX(0)";
              else currentElement.style.transform = "translateX(0) translateY(0)";
              (nextElement as HTMLElement).style.transform = "translateX(-100%)";
            } else {
              if (currentElementDir === "vertical") currentElement.style.transform = "translateY(0)";
              else currentElement.style.transform = "translateY(0) translateX(0)";
              (nextElement as HTMLElement).style.transform = "translateY(-100%)";
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
        {Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            const childElement = child as React.ReactElement<any, React.ComponentType<any>>;
            if (childElement.type && childElement.type.displayName === "FullPageSection") {
              return cloneElement(childElement, {
                dir: childElement.props.dir || dir,
                pageId: `${index + 1}`,
                height,
                speed,
                width,
              });
            }
          }
        })}
      </div>
    </FullPageWrapperContext.Provider>
  );
};

export default FullPageWrapper;
