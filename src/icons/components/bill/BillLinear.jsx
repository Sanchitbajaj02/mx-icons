import React from "react";
import Icon from "../../Icon";

export default function BillLinear({
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
      <path d="M3.67004 2.5V14.47C3.67004 15.45 4.13004 16.38 4.92004 16.97L10.13 20.87C11.24 21.7 12.77 21.7 13.88 20.87L19.09 16.97C19.88 16.38 20.34 15.45 20.34 14.47V2.5H3.67004Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
<path d="M2 2.5H22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M8 8H16" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 13H16" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
