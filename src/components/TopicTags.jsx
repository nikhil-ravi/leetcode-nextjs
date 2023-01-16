"use client";

import { Chip } from "@material-tailwind/react";

export default function TopicTag({
  value = "tag",
  color = undefined,
  icon = undefined,
  className = "",
}) {
  return (
    <Chip
      variant="filled"
      value={value}
      color={color}
      icon={icon}
      className={className}
    />
  );
}
