import React from "react";
import Icon from "../../Icon";

export default function ManBroken({
  size = 24,
  color = "#292D32",
  className = "",
  ...props
}) {
  return (
    <Icon
      size={size}
      color={color}
      fill="none"
      className={className}
      {...props}
    >
      <path d="M4.27 18.68C5.69 20.4 7.84 21.5 10.25 21.5C14.53 21.5 18 18.03 18 13.75C18 9.47 14.53 6 10.25 6C5.97 6 2.5 9.47 2.5 13.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.5 2.5L16 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 2.5H21.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
