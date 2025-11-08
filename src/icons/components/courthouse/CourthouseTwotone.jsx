import React from "react";
import Icon from "../../Icon";

export default function CourthouseTwotone({
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
      <path d="M2 22H22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 2C13.6 2.64 15.4 2.64 17 2V5C15.4 5.64 13.6 5.64 12 5V2Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 5V8" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 8H7C5 8 4 9 4 11V22H20V11C20 9 19 8 17 8Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.58008 12H19.4201" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path opacity="0.4" d="M7.99023 12V22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
<path opacity="0.4" d="M11.9902 12V22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
<path opacity="0.4" d="M15.9902 12V22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
    </Icon>
  );
}
