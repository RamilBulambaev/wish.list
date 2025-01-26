import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./NotificationButton.module.scss";
import { memo } from "react";
import { Popover } from "@/shared/ui/Popups";
import { Icon } from "@/shared/ui/Icon/Icon";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { NotificationList } from "@/entities/Notification";
import NotificationIcon from "@/shared/assets/icons/notification-20-20.svg";

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo(
  ({ className }: NotificationButtonProps) => {
    return (
      <Popover
        className={classNames(cls.NotificationButton, {}, [className])}
        direction="bottom left"
        trigger={
          <Button theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} inverted />
          </Button>
        }
      >
        <NotificationList className={cls.notifications} />
      </Popover>
    );
  }
);
NotificationButton.displayName = "NotificationButton";
