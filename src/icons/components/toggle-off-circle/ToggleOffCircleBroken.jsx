import React from "react";
import Icon from "../../Icon";

export default function ToggleOffCircleBroken({
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
      <path d="M10 20C5.58 20 2 16.42 2 12C2 7.58 5.58 4 10 4H14C18.42 4 22 7.58 22 12C22 16.08 18.95 19.44 15.01 19.94" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 8C12.21 8 14 9.79 14 12C14 14.21 12.21 16 10 16C7.79 16 6 14.21 6 12C6 11.52 6.09 11.05 6.24 10.62" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
