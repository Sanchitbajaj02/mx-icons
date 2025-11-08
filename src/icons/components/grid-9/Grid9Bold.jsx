import React from "react";
import Icon from "../../Icon";

export default function Grid9Bold({
  size = 24,
  color = "#292D32",
  className = "",
  ...props
}) {
  return (
    <Icon
      size={size}
      color={color}
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M22 7.81V16.19C22 19.83 19.83 22 16.19 22H12.75V2H16.19C19.83 2 22 4.17 22 7.81Z" fill="currentColor"/>
<path d="M11.25 2V22H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2H11.25Z" fill="currentColor"/>
    </Icon>
  );
}
