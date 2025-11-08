import React from "react";
import Icon from "../../Icon";

export default function ArrowRight1Broken({
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
      <path d="M15.85 8.98992C18.72 10.6499 18.72 13.3599 15.85 15.0199L13.54 16.3599L11.23 17.6999C8.35 19.3399 6 17.9899 6 14.6699V11.9999V9.32992C6 6.01992 8.35 4.65992 11.22 6.31992" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
