import React from "react";
import Icon from "../../Icon";

export default function StopBroken({
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
      <path d="M3 9.3C3 4.8 4.8 3 9.3 3H14.7C19.2 3 21 4.8 21 9.3V14.7C21 19.2 19.2 21 14.7 21H9.3C4.8 21 3 19.2 3 14.7V13.99" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
