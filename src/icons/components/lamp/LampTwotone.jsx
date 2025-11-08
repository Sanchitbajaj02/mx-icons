import React from "react";
import Icon from "../../Icon";

export default function LampTwotone({
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
      <path d="M5.78962 14.69H18.2096C19.8696 14.69 20.8696 13.38 20.4396 11.78L18.2396 3.71C17.9796 2.77 16.9696 2 16.0096 2H7.98962C7.02962 2 6.01962 2.77 5.76962 3.7L3.56962 11.77C3.12962 13.38 4.12962 14.69 5.78962 14.69Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<g opacity="0.4">
<path d="M12 15V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 22H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
    </Icon>
  );
}
