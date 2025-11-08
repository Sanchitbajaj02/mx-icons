import React from "react";
import Icon from "../../Icon";

export default function WifiLinear({
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
      <path d="M4.91003 11.84C9.21003 8.51998 14.8 8.51998 19.1 11.84" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 8.35998C8.06 3.67998 15.94 3.67998 22 8.35998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.79004 15.49C9.94004 13.05 14.05 13.05 17.2 15.49" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.40002 19.15C10.98 17.93 13.03 17.93 14.61 19.15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
