import { FullPageSectionProps } from "@/types/types";
import { FullPageWrapperContext } from "./FullPageWrapper";
import React, { Children, cloneElement, isValidElement, useCallback, useContext, useEffect, useMemo, useState } from "react";

const FullPageSection = ({ pageId, width, height, speed, className, children, dir }: FullPageSectionProps) => {
  const [mounted, setMounted] = useState(false);
  const data = useContext(FullPageWrapperContext);

  const isWrapper = useMemo(
    () =>
      Children.toArray(children).find(
        (child) => isValidElement(child) && child.type && (child.type as any).displayName === "FullPageSection"
      ),
    [children]
  );

  const applyTransitionWithDelay = useCallback(() => {
    const timeout = setTimeout(() => {
      const element = document.getElementById(pageId as string)!;
      element.style.transition = `${speed}ms ease-in-out`;
      clearTimeout(timeout);
    }, 150);
    return undefined;
  }, [pageId, speed]);

  useEffect(() => {
    if (!mounted) {
      if (!isWrapper) {
        if (pageId === "1") {
          data.current.page = "1";
          data.current.pages = ["1"];
        } else {
          !data.current.page && (data.current.page = pageId as string);
          data.current.pages.push(pageId as string);
        }
      }
      setMounted(true);
    }
  }, [data, isWrapper, mounted, pageId]);

  return isWrapper ? (
    <>
      {Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          const childElement = child as React.ReactElement<any, React.ComponentType<any>>;
          if (childElement.type && childElement.type.displayName === "FullPageSection") {
            const props: FullPageSectionProps = {
              speed,
              width,
              height,
              dir: child.props.dir || dir,
              pageId: `${pageId}-${index + 1}`,
            };
            return cloneElement(child, props);
          }
        }
      })}
    </>
  ) : (
    <section
      id={pageId}
      className={`${className} absolute w-full`}
      data-dir={dir}
      style={{
        width,
        height,
        top: dir === "horizontal" ? "0%" : "100%",
        left: dir === "horizontal" ? "100%" : "0%",
        transition: pageId === "1" ? applyTransitionWithDelay() : `${speed}ms ease-in-out`,
        transform: data.current.page === pageId ? (dir === "horizontal" ? "translateX(-100%)" : "translateY(-100%)") : undefined,
      }}
    >
      {children}
    </section>
  );
};

FullPageSection.displayName = "FullPageSection";

export default FullPageSection;
