"use client";

import { Icon } from "@iconify/react";

interface IconProps {
  className?: string;
  [key: string]: any;
}

export const NeutralFace = () => {
  return <Icon icon={"noto-v1:neutral-face"} />;
};

export const SiteLogo = ({ className, ...props }: IconProps) => {
  return (
    <Icon icon={"tabler:brand-among-us"} className={className} {...props} />
  );
};

export const Heart = ({ className, ...props }: IconProps) => {
  return <Icon icon={"tabler:heart"} className={className} {...props} />;
};

export const HeartFilled = ({ className, ...props }: IconProps) => {
  return <Icon icon={"tabler:heart-filled"} className={className} {...props} />;
};

export const IComment = ({ className, ...props }: IconProps) => {
  return (
    <Icon icon={"tabler:message-circle"} className={className} {...props} />
  );
};

export const ThumbUp = ({ className, ...props }: IconProps) => {
  return <Icon icon={"tabler:thumb-up"} className={className} {...props} />;
};

export const ThumbUpFilled = ({ className, ...props }: IconProps) => {
  return (
    <Icon icon={"tabler:thumb-up-filled"} className={className} {...props} />
  );
};

export const ThumbDown = ({ className, ...props }: IconProps) => {
  return <Icon icon={"tabler:thumb-down"} className={className} {...props} />;
};

export const ThumbDownFilled = ({ className, ...props }: IconProps) => {
  return (
    <Icon icon={"tabler:thumb-down-filled"} className={className} {...props} />
  );
};
