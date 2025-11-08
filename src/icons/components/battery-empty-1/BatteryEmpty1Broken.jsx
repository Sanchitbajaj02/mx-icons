import React from "react";
import Icon from "../../Icon";

export default function BatteryEmpty1Broken({
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
      <path d="M10.99 5H13C17 5 18 6 18 10V14C18 18 17 19 13 19H7C3 19 2 18 2 14V10C2 6 3 5 7 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.38086 10C6.62086 10.98 6.69086 11.99 6.57086 12.99C6.53086 13.33 6.47086 13.67 6.38086 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
