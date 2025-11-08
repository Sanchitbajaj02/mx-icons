import React from "react";
import Icon from "../../Icon";

export default function Grid7Bold({
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
      <path d="M11.25 10.5V22H7.81C4.17 22 2 19.83 2 16.19V10.5H11.25Z" fill="currentColor"/>
<path d="M22 10.5V16.19C22 19.83 19.83 22 16.19 22H12.75V10.5H22Z" fill="currentColor"/>
<path d="M22 7.81V9H2V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z" fill="currentColor"/>
    </Icon>
  );
}
