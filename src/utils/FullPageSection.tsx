"use client";

import { ContextValue } from "@/types/types";
import { FullPageWrapperContext, HORIZONTAL, VERTICAL } from "./FullPageWrapper";
import React, { useMemo, Children, useState, ReactNode, useEffect, useContext, cloneElement } from "react";

interface Props {
  width?: string;
  speed?: string;
  height?: string;
  pageId?: string;
  className?: string;
  children?: ReactNode;
  dir?: "horizontal" | "vertical";
  [key: string]: string | ReactNode;
}

const FullPageSection = ({ pageId, width, height, speed, className, children, dir }: Props): any => {
  const [mounted, setMounted] = useState(false);
  const data = useContext<ContextValue>(FullPageWrapperContext);

  const isWrapper = useMemo(
    () =>
      Children.toArray(children).find((child) => {
        if (child && child.type) {
          child?.type?.displayName === "FullPageSection";
        }
      }),
    [children]
  );

  useEffect(() => {
    if (!mounted) {
      !isWrapper && (data.current = { page: data.current.page || pageId, pages: [...data.current.pages, pageId] });
      setMounted(true);
    }
  }, [data, isWrapper, mounted, pageId]);

  return isWrapper ? (
    Children.map(
      children,
      (child, index) =>
        child.type.displayName === "FullPageSection" &&
        cloneElement(child, { pageId: `${pageId}-${index + 1}`, width, height, dir: child.props.dir || dir, speed })
    )
  ) : (
    <section
      id={pageId}
      className={`${className} centering absolute`}
      data-dir={dir === HORIZONTAL ? HORIZONTAL : VERTICAL}
      style={{
        width,
        height,
        transition: `${speed}ms ease-in-out`,
        top: dir === HORIZONTAL ? "0%" : "100%",
        left: dir === HORIZONTAL ? "100%" : "0%",
        transform: data.current
          ? data.current.page === pageId
            ? dir === HORIZONTAL
              ? "translateX(-100%)"
              : "translateY(-100%)"
            : undefined
          : undefined,
      }}
    >
      {children}
    </section>
  );
};

FullPageSection.displayName = "FullPageSection";

export default FullPageSection;
