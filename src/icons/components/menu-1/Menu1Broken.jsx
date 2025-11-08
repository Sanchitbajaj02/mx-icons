import React from "react";
import Icon from "../../Icon";

export default function Menu1Broken({
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
      <path d="M3 7H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M9.49023 12H21.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M3 12H5.99" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M3 17H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
