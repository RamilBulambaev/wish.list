import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { StateSchema } from "@/app/providers/StoreProvider";
import { getUIScrollByPath, uiActions } from "@/features/UI";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useThrottle } from "@/shared/lib/hooks/useThrottle/useThrottle";
import { TestProps } from "@/shared/types/tests";

import cls from "./Page.module.scss";

interface PageProps extends TestProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const PAGE_ID = "PAGE_ID";

export const Page = memo(
  ({ className, children, onScrollEnd, dataTestId }: PageProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) =>
      getUIScrollByPath(state, pathname)
    );

    useInfiniteScroll({
      triggerRef,
      wrapperRef,
      callback: onScrollEnd,
    });

    useInitialEffect(() => {
      wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
      dispatch(
        uiActions.setScrollPosition({
          position: e.currentTarget.scrollTop,
          path: pathname,
        })
      );
    }, 500);

    return (
      <main
        ref={wrapperRef}
        className={classNames(cls.Page, {}, [className])}
        onScroll={onScroll}
        id={PAGE_ID}
        data-testid={dataTestId ?? "Page"}
      >
        {children}
        {onScrollEnd && <div ref={triggerRef} className={cls.trigger} />}
      </main>
    );
  }
);
Page.displayName = "Page";
