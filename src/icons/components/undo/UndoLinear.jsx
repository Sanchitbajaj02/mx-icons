import React from "react";
import Icon from "../../Icon";

export default function UndoLinear({
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
      <path d="M7.12988 18.3101H15.1299C17.8899 18.3101 20.1299 16.0701 20.1299 13.3101C20.1299 10.5501 17.8899 8.31006 15.1299 8.31006H4.12988" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.43012 10.8099L3.87012 8.24994L6.43012 5.68994" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
