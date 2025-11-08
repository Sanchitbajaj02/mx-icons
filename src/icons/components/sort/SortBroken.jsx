import React from "react";
import Icon from "../../Icon";

export default function SortBroken({
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
      <path d="M10 7H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M3 7H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M6 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M10 17H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
