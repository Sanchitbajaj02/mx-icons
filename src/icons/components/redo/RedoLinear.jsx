import React from "react";
import Icon from "../../Icon";

export default function RedoLinear({
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
      <path d="M16.8701 18.3101H8.87012C6.11012 18.3101 3.87012 16.0701 3.87012 13.3101C3.87012 10.5501 6.11012 8.31006 8.87012 8.31006H19.8701" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5701 10.8099L20.1301 8.24994L17.5701 5.68994" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
