/* eslint-disable i18next/no-literal-string */
import cls from "./Code.module.scss";
import { memo, ReactNode, useCallback } from "react";
import { Button, ButtonTheme } from "../Button/Button";
import CopyIcon from "@/shared/assets/icons/copy-20-20.svg";

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
