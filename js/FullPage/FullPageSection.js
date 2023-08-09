import { FullPageWrapperContext, HORIZONTAL, VERTICAL } from "./FullPageWrapper";
import React, { Children, cloneElement, useContext, useEffect, useMemo, useState } from "react";

const FullPageSection = ({ pageId, width, height, speed, className, children, dir }) => {
  const [mounted, setMounted] = useState(false);
  const data = useContext(FullPageWrapperContext);

  const isWrapper = useMemo(
    () => Children.toArray(children).find((child) => child?.type?.displayName === "FullPageSection"),
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
        transform: data.current.page === pageId && (dir === HORIZONTAL ? "translateX(-100%)" : "translateY(-100%)"),
      }}
    >
      {children}
    </section>
  );
};

FullPageSection.displayName = "FullPageSection";

export default FullPageSection;
