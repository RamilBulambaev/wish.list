import { ReactNode } from "react";
import { createPortal } from "react-dom";

import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";

interface PortalProps {
  children: ReactNode;
  element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
  const { children, element = document.body } = props;
  const { theme } = useTheme();

  return createPortal(<div className={theme}>{children}</div>, element);
};
