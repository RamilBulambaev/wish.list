 
import { memo, useCallback } from "react";

import CopyIcon from "@/shared/assets/icons/copy-20-20.svg";

import cls from "./Code.module.scss";
import { Button, ButtonTheme } from "../Button/Button";


interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo(({ text }: CodeProps) => {
  const onCode = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={cls.Code}>
      <Button
        className={cls.copyBtn}
        theme={ButtonTheme.CLEAR}
        onClick={onCode}
      >
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
Code.displayName = "Code";
