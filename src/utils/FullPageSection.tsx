import { DirType } from "@/types/types";
import { FullPageWrapperContext } from "./FullPageWrapper";
import React, { Children, cloneElement, useContext, useEffect, useMemo, useState } from "react";

type FullPageSectionProps = {
  dir?: DirType;
  width?: string;
  speed?: number;
  pageId?: string;
  height?: string;
  className?: string;
  children?: React.ReactNode;
};

const FullPageSection = ({ pageId, width, height, speed, className, children, dir }: FullPageSectionProps) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const data = useContext(FullPageWrapperContext);

  const isWrapper = useMemo(
    () =>
      Children.toArray(children).find(
        (child) => React.isValidElement(child) && child.type && (child.type as any).displayName === "FullPageSection"
      ),
    [children]
  );

  useEffect(() => {
    if (!mounted) {
      if (!isWrapper) {
        data.current.page = data.current.page || (pageId as string);
        data.current.pages.push(pageId as string);
      }
      setMounted(true);
    }
  }, [data, isWrapper, mounted, pageId]);

  return isWrapper ? (
    Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        const childElement = child as React.ReactElement<any, React.ComponentType<any>>;
        if (childElement.type && childElement.type.displayName === "FullPageSection") {
          const props: FullPageSectionProps = {
            width,
            speed,
            height,
            dir: child.props.dir || dir,
            pageId: `${pageId}-${index + 1}`,
          };
          return cloneElement(child, props);
        }
      }
    })
  ) : (
    <section
      id={pageId}
      className={`${className} flex justify-center text-5xl items-center absolute w-full`}
      data-dir={dir}
      style={{
        width,
        height,
        transition: `${speed}ms ease-in-out`,
        top: dir === "horizontal" ? "0%" : "100%",
        left: dir === "horizontal" ? "100%" : "0%",
        transform: data.current.page === pageId ? (dir === "horizontal" ? "translateX(-100%)" : "translateY(-100%)") : undefined,
      }}
    >
      {children}
    </section>
  );
};

FullPageSection.displayName = "FullPageSection";

export default FullPageSection;
